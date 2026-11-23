# SendPollRequest

## Example Usage

```typescript
import { SendPollRequest } from "hypersender-node/models";

let value: SendPollRequest = {
  chatId: "1111111111111@c.us",
  poll: {},
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `chatId`                         | *string*                         | :heavy_check_mark:               | N/A                              | 1111111111111@c.us               |
| `replyTo`                        | *string*                         | :heavy_minus_sign:               | N/A                              |                                  |
| `poll`                           | [models.Poll](../models/poll.md) | :heavy_check_mark:               | N/A                              |                                  |