# ForwardMessageRequest

## Example Usage

```typescript
import { ForwardMessageRequest } from "hypersender-node/models";

let value: ForwardMessageRequest = {
  chatId: "111111111111@c.us",
  messageId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `chatId`              | *string*              | :heavy_check_mark:    | Contact number        | 111111111111@c.us     |
| `messageId`           | *string*              | :heavy_check_mark:    | Message ID to forward |                       |