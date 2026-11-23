# SendContactCardRequest

## Example Usage

```typescript
import { SendContactCardRequest } from "hypersender-node/models";

let value: SendContactCardRequest = {
  chatId: "1111111111111@c.us",
  contacts: [
    {},
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `chatId`                                 | *string*                                 | :heavy_check_mark:                       | N/A                                      | 1111111111111@c.us                       |
| `contacts`                               | [models.Contact](../models/contact.md)[] | :heavy_check_mark:                       | N/A                                      |                                          |