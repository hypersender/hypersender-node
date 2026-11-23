# RequestT

The original request details

## Example Usage

```typescript
import { RequestT } from "hypersender/models";

let value: RequestT = {
  chatId: "111111111111@c.us",
  text: "Hello world!",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `chatId`                            | *string*                            | :heavy_minus_sign:                  | The chat ID the message was sent to | 111111111111@c.us                   |
| `text`                              | *string*                            | :heavy_minus_sign:                  | The message text                    | Hello world!                        |