# CreateInstanceRequest

## Example Usage

```typescript
import { CreateInstanceRequest } from "hypersender/models";

let value: CreateInstanceRequest = {
  phone: "+201234567890",
  name: "MyInstanceName",
  webhookUrl: "https://yourdomain.com/webhooks/whatsapp",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `phone`                                                                | *string*                                                               | :heavy_check_mark:                                                     | E.164 format phone number (e.g. +201234567890)                         | +201234567890                                                          |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Instance name (max 50 characters, must be unique per user per service) | MyInstanceName                                                         |
| `webhookUrl`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | Optional webhook URL (must be a valid https URL)                       | https://yourdomain.com/webhooks/whatsapp                               |