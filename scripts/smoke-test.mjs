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
          messageId = q.responseBody?.id ?? q.responseBody?.messageId ?? q.responseBody?.key?.id;
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
