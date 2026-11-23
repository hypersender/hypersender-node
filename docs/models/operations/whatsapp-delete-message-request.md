# WhatsappDeleteMessageRequest

## Example Usage

```typescript
import { WhatsappDeleteMessageRequest } from "hypersender/models/operations";

let value: WhatsappDeleteMessageRequest = {
  chatId: "111111111111@c.us",
  messageId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `chatId`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Contact number - **learn what is [`chatId`](https://docs.hypersender.com/v2/api-reference/whatsapp/what-is-chatid)** | 111111111111@c.us                                                                                                    |
| `messageId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the message to delete                                                                                          |                                                                                                                      |