# EnterpriseRestartInstanceRequest

## Example Usage

```typescript
import { EnterpriseRestartInstanceRequest } from "hypersender/models/operations";

let value: EnterpriseRestartInstanceRequest = {
  instance: "{{ instance_id }}",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `instance`                                      | *string*                                        | :heavy_check_mark:                              | Instance UUID copied from hypersender dashboard | {{ instance_id }}                               |