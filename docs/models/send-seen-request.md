# SendSeenRequest

## Example Usage

```typescript
import { SendSeenRequest } from "hypersender/models";

let value: SendSeenRequest = {
  chatId: "111111111111@c.us",
  messageId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `chatId`                           | *string*                           | :heavy_check_mark:                 | N/A                                | 111111111111@c.us                  |
| `messageId`                        | *string*                           | :heavy_check_mark:                 | N/A                                |                                    |
| `participant`                      | *string*                           | :heavy_minus_sign:                 | Participant JID for group messages |                                    |