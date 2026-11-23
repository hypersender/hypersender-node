# EnterpriseListInstancesRequest

## Example Usage

```typescript
import { EnterpriseListInstancesRequest } from "hypersender/models/operations";

let value: EnterpriseListInstancesRequest = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `filterUuid`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Filter by instance UUID                                                                                              |
| `filterName`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Filter by instance name (partial match)                                                                              |
| `filterPhone`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Filter by phone number                                                                                               |
| `filterStatus`                                                                                                       | [operations.EnterpriseListInstancesFilterStatus](../../models/operations/enterprise-list-instances-filter-status.md) | :heavy_minus_sign:                                                                                                   | Filter by instance status                                                                                            |