# SendLocationRequest

## Example Usage

```typescript
import { SendLocationRequest } from "hypersender-node/models";

let value: SendLocationRequest = {
  chatId: "111111111111@c.us",
  latitude: 339.06,
  longitude: 4400.08,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `chatId`           | *string*           | :heavy_check_mark: | N/A                | 111111111111@c.us  |
| `latitude`         | *number*           | :heavy_check_mark: | N/A                |                    |
| `longitude`        | *number*           | :heavy_check_mark: | N/A                |                    |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |                    |
| `replyTo`          | *string*           | :heavy_minus_sign: | N/A                |                    |