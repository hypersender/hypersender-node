# SendVoiceRequest

## Example Usage

```typescript
import { SendVoiceRequest } from "hypersender/models";

let value: SendVoiceRequest = {
  chatId: "111111111111@c.us",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `chatId`                            | *string*                            | :heavy_check_mark:                  | Contact number - see chatId docs    | 111111111111@c.us                   |
| `url`                               | *string*                            | :heavy_minus_sign:                  | url to send (required without file) |                                     |
| `file`                              | *string*                            | :heavy_minus_sign:                  | file to send (required without url) |                                     |
| `caption`                           | *string*                            | :heavy_minus_sign:                  | caption for the file                |                                     |
| `replyTo`                           | *string*                            | :heavy_minus_sign:                  | reply to message id                 |                                     |