// Live smoke test: calls the real Hypersender API with your own keys.
// It SENDS REAL MESSAGES (a WhatsApp text, an SMS, an OTP code) to the numbers you set below.
//
//   npm run build
//   node --env-file=.env scripts/smoke-test.mjs
//
// .env (only the products you set are tested):
//   HYPERSENDER_WHATSAPP_API_KEY=...   HYPERSENDER_WHATSAPP_INSTANCE_ID=...   SMOKE_WHATSAPP_TO=201234567890@c.us
//   HYPERSENDER_SMS_API_KEY=...        HYPERSENDER_SMS_INSTANCE_ID=...        SMOKE_SMS_TO=+201234567890
//   HYPERSENDER_OTP_API_KEY=...        HYPERSENDER_OTP_INSTANCE_ID=...        SMOKE_OTP_TO=201234567890@c.us
//
// Prints one line per check; never prints your keys.

import { Hypersender } from "../esm/index.js";

const env = process.env;
const results = [];
const check = async (name, fn) => {
  try {
    const detail = await fn();
    results.push(["PASS", name, detail ?? ""]);
  } catch (e) {
    const status = e?.statusCode ?? e?.httpMeta?.response?.status ?? "";
    results.push(["FAIL", name, `${e?.constructor?.name ?? "Error"} ${status} ${String(e?.message ?? e).slice(0, 200)}`]);
  }
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// WhatsApp
if (env.HYPERSENDER_WHATSAPP_API_KEY && env.SMOKE_WHATSAPP_TO) {
  const wa = Hypersender.whatsapp();
  let queuedUuid;
  await check("whatsapp.sendText (expects 201 + queued response)", async () => {
    const r = await wa.sendText({ chatId: env.SMOKE_WHATSAPP_TO, text: "hypersender-node smoke test" });
    queuedUuid = r.queuedRequestUuid;
    return `queued=${r.queued} uuid=${r.queuedRequestUuid}`;
  });

  let messageId;
  if (queuedUuid) {
    await check("whatsapp.getQueuedRequest (poll until processed)", async () => {
      for (let i = 0; i < 15; i++) {
        const q = await wa.getQueuedRequest(queuedUuid);
        if (q.responseStatus != null) {
          const b = q.responseBody ?? {};
          const id = b.id ?? b.messageId ?? b.key?.id;
          messageId = typeof id === "object" && id ? id._serialized ?? id.id : id;
          return `responseStatus=${q.responseStatus} messageId=${messageId ?? "(not found in responseBody)"} responseBodyKeys=${Object.keys(q.responseBody ?? {}).join(",")}`;
        }
        await sleep(2000);
      }
      throw new Error("still not processed after 30s");
    });
  }

  await check("whatsapp.contacts.getLidsCount", async () => `count=${(await wa.contacts.getLidsCount()).count}`);
  await check("whatsapp.contacts.getAllKnownLids", async () => `rows=${(await wa.contacts.getAllKnownLids({ limit: 5 })).length}`);

  // Does react-to-message need chatId? The spec says yes; the Laravel package never sends it.
  // Raw call without chatId, so the SDK's own validation doesn't decide the answer for us.
  if (messageId) {
    await check("react-to-message WITHOUT chatId (raw HTTP)", async () => {
      const res = await fetch(
        `https://app.hypersender.com/api/whatsapp/v2/${env.HYPERSENDER_WHATSAPP_INSTANCE_ID}/react-to-message`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${env.HYPERSENDER_WHATSAPP_API_KEY}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messageId, reaction: "👍" }),
        },
      );
      const body = (await res.text()).slice(0, 200);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${body}`);
      return `HTTP ${res.status} (chatId NOT required): ${body}`;
    });
  }

  // Raw probes: record the real status code and response shape of each WhatsApp endpoint, so the
  // OpenAPI spec (and the SDK generated from it) can be checked against what the API really returns.
  const base = `https://app.hypersender.com/api/whatsapp/v2/${env.HYPERSENDER_WHATSAPP_INSTANCE_ID}`;
  const auth = { Authorization: `Bearer ${env.HYPERSENDER_WHATSAPP_API_KEY}`, Accept: "application/json" };
  const to = env.SMOKE_WHATSAPP_TO;
  const imageUrl = "https://placehold.co/64x64.png";
  // 1x1 transparent PNG
  const png = Uint8Array.from(atob("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="), (c) => c.charCodeAt(0));
  const form = (fields) => {
    const fd = new FormData();
    for (const [k, v] of Object.entries(fields)) fd.append(k, v);
    return fd;
  };
  const probe = async (name, method, path, body) => {
    await check(`probe ${name}`, async () => {
      const isForm = body instanceof FormData;
      const res = await fetch(base + path, {
        method,
        headers: isForm || !body ? auth : { ...auth, "Content-Type": "application/json" },
        body: isForm ? body : body ? JSON.stringify(body) : undefined,
      });
      const text = await res.text();
      let shape = text.slice(0, 120);
      try {
        const json = JSON.parse(text);
        shape = Array.isArray(json) ? `array(${json.length})` : `keys=${Object.keys(json).join(",")}`;
      } catch {}
      if (!res.ok) throw new Error(`HTTP ${res.status} ${shape}`);
      return `HTTP ${res.status} ${shape}`;
    });
  };

  await probe("send-image JSON url", "POST", "/send-image", { chatId: to, url: imageUrl, caption: "smoke: image by url (json)" });
  await probe("send-image MULTIPART url", "POST", "/send-image", form({ chatId: to, url: imageUrl, caption: "smoke: image by url (multipart)" }));
  await probe("send-image MULTIPART file", "POST", "/send-image", form({ chatId: to, file: new Blob([png], { type: "image/png" }), filename: "smoke.png", caption: "smoke: image upload" }));
  await probe("send-location", "POST", "/send-location", { chatId: to, latitude: 30.0444, longitude: 31.2357, title: "smoke: Cairo" });
  await probe("start-typing", "POST", "/start-typing", { chatId: to });
  await probe("stop-typing", "POST", "/stop-typing", { chatId: to });
  await probe("read-chat", "POST", "/read-chat", { chatId: to });
  if (messageId) {
    await probe("star-message", "PUT", "/star-message", { chatId: to, messageId, star: true });
    await probe("delete-message (the smoke-test text)", "DELETE", `/delete-message?chatId=${encodeURIComponent(to)}&messageId=${encodeURIComponent(messageId)}`);
  }
}

// SMS
if (env.HYPERSENDER_SMS_API_KEY && env.SMOKE_SMS_TO) {
  const sms = Hypersender.sms();
  await check("sms.sendMessage", async () => {
    const r = await sms.sendMessage({ to: env.SMOKE_SMS_TO, content: "hypersender-node smoke test" });
    return JSON.stringify(r).slice(0, 160);
  });
  await check("sms.listMessages", async () => `rows=${(await sms.listMessages({ perPage: 5 })).data?.length}`);
  await check("sms.listMessageThreads", async () => `rows=${(await sms.listMessageThreads({ perPage: 5 })).data?.length}`);
  await check("sms.getHeartbeats", async () => `rows=${(await sms.getHeartbeats({ perPage: 5 })).data?.length}`);
}

// OTP
if (env.HYPERSENDER_OTP_API_KEY && env.SMOKE_OTP_TO) {
  const otp = Hypersender.otp();
  await check("otp.requestCode (expects 200)", async () => {
    const r = await otp.requestCode({ chatId: env.SMOKE_OTP_TO, length: 6 });
    return `success=${r.success}`;
  });
  await check("otp.validateCode with a wrong code (expects a 422 error)", async () => {
    try {
      await otp.validateCode({ chatId: env.SMOKE_OTP_TO, code: "000000" });
    } catch (e) {
      const status = e?.statusCode ?? e?.httpMeta?.response?.status;
      if (status === 422) return `threw ${e.constructor.name} 422 as expected`;
      throw e;
    }
    throw new Error("no error for a wrong code");
  });
  await check("otp.generateLink", async () => {
    const r = await otp.generateLink({ chatId: env.SMOKE_OTP_TO });
    return JSON.stringify(r).slice(0, 160);
  });
}

if (!results.length) {
  console.log("Nothing tested: set the API keys, instance IDs and SMOKE_*_TO numbers in .env (see the top of this file).");
  process.exit(1);
}
for (const [status, name, detail] of results) console.log(`${status}  ${name}  ${detail}`);
process.exit(results.some(([s]) => s === "FAIL") ? 1 : 0);
