# GenerateLinkRequest

## Example Usage

```typescript
import { GenerateLinkRequest } from "hypersender/models";

let value: GenerateLinkRequest = {
  chatId: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `chatId`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | WhatsApp chat ID of the recipient (e.g. 20123456789@c.us)                       |
| `expires`                                                                       | *number*                                                                        | :heavy_minus_sign:                                                              | TTL in seconds                                                                  |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `message`                                                                       | [models.GenerateLinkRequestMessage](../models/generate-link-request-message.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `callback`                                                                      | [models.Callback](../models/callback.md)                                        | :heavy_minus_sign:                                                              | N/A                                                                             |