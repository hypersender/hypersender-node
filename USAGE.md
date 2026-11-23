<!-- Start SDK Example Usage [usage] -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->