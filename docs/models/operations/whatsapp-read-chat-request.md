# WhatsappReadChatRequest

## Example Usage

```typescript
import { WhatsappReadChatRequest } from "hypersender-node/models/operations";

let value: WhatsappReadChatRequest = {
  messages: "30",
  days: "7",
  body: {
    chatId: "111111111111@c.us",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `messages`                                                  | *string*                                                    | :heavy_minus_sign:                                          | How much messages to read (latest first)                    | 30                                                          |
| `days`                                                      | *string*                                                    | :heavy_minus_sign:                                          | How much days to read (latest first)                        | 7                                                           |
| `body`                                                      | [models.ReadChatRequest](../../models/read-chat-request.md) | :heavy_check_mark:                                          | N/A                                                         |                                                             |