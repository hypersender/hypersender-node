# WhatsappGetAllContactsRequest

## Example Usage

```typescript
import { WhatsappGetAllContactsRequest } from "hypersender/models/operations";

let value: WhatsappGetAllContactsRequest = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `limit`                                                       | *number*                                                      | :heavy_minus_sign:                                            | Number of contacts to return (1-1000)                         | 100                                                           |
| `offset`                                                      | *number*                                                      | :heavy_minus_sign:                                            | Number of contacts to skip                                    | 0                                                             |
| `sortBy`                                                      | [operations.SortBy](../../models/operations/sort-by.md)       | :heavy_minus_sign:                                            | Sort by id or name                                            | name                                                          |
| `sortOrder`                                                   | [operations.SortOrder](../../models/operations/sort-order.md) | :heavy_minus_sign:                                            | Sort order: asc or desc                                       | asc                                                           |