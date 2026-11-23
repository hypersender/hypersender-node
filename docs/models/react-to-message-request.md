# ReactToMessageRequest

## Example Usage

```typescript
import { ReactToMessageRequest } from "hypersender-node/models";

let value: ReactToMessageRequest = {
  chatId: "111111111111@c.us",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `chatId`           | *string*           | :heavy_check_mark: | N/A                | 111111111111@c.us  |
| `messageId`        | *string*           | :heavy_minus_sign: | Message ID         |                    |
| `reaction`         | *string*           | :heavy_minus_sign: | Reaction to add    |                    |