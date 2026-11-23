# SmsMessageThreadsResponse

A page of threads.

## Example Usage

```typescript
import { SmsMessageThreadsResponse } from "hypersender-node/models/operations";

let value: SmsMessageThreadsResponse = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [models.MessageThread](../../models/message-thread.md)[]   | :heavy_minus_sign:                                         | N/A                                                        |
| `links`                                                    | [models.PaginationLinks](../../models/pagination-links.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `meta`                                                     | [models.PaginationMeta](../../models/pagination-meta.md)   | :heavy_minus_sign:                                         | N/A                                                        |