# SmsIndexMessagesResponse

A page of messages.

## Example Usage

```typescript
import { SmsIndexMessagesResponse } from "hypersender/models/operations";

let value: SmsIndexMessagesResponse = {
  data: [
    {
      tags: [
        "otp",
      ],
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [models.Message](../../models/message.md)[]                | :heavy_minus_sign:                                         | N/A                                                        |
| `links`                                                    | [models.PaginationLinks](../../models/pagination-links.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `meta`                                                     | [models.PaginationMeta](../../models/pagination-meta.md)   | :heavy_minus_sign:                                         | N/A                                                        |