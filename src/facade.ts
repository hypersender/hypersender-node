/**
 * Laravel-style facade: reads credentials from the environment and gives you each product's client.
 *
 *   import { Hypersender } from "hypersender-node";
 *   await Hypersender.whatsapp().sendText({ chatId: "201234567890@c.us", text: "Hello" });
 *
 * Environment variables (same names as the Laravel package):
 *   HYPERSENDER_WHATSAPP_API_KEY, HYPERSENDER_WHATSAPP_INSTANCE_ID
 *   HYPERSENDER_SMS_API_KEY,      HYPERSENDER_SMS_INSTANCE_ID
 *   HYPERSENDER_OTP_API_KEY,      HYPERSENDER_OTP_INSTANCE_ID
 *   HYPERSENDER_ENTERPRISE_API_KEY
 *
 * Need several accounts or config without env vars? Use `new HypersenderClient({ ... })` directly.
 */

import { SDKOptions } from "./lib/config.js";
import { HypersenderClient } from "./sdk/sdk.js";

let client: HypersenderClient | undefined;

// Created on first use, so env vars loaded later (e.g. by dotenv) are still picked up.
function instance(): HypersenderClient {
  return (client ??= new HypersenderClient());
}

export const Hypersender = {
  whatsapp: () => instance().whatsapp,
  sms: () => instance().sms,
  otp: () => instance().otp,
  enterprise: () => instance().enterprise,

  /** Replace the env-based client, e.g. to pass options in code or a custom HTTP client in tests. */
  configure(options: SDKOptions = {}): void {
    client = new HypersenderClient(options);
  },
};
