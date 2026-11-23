# StarMessageRequest

## Example Usage

```typescript
import { StarMessageRequest } from "hypersender/models";

let value: StarMessageRequest = {
  chatId: "111111111111@c.us",
  messageId: "<id>",
  star: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `chatId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Contact number - **learn what is [`chatId`](https://docs.hypersender.com/v2/api-reference/whatsapp/what-is-chatid)** | 111111111111@c.us                                                                                                    |
| `messageId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `star`                                                                                                               | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | star or unstar a message                                                                                             |                                                                                                                      |