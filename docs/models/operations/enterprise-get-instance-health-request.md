# EnterpriseGetInstanceHealthRequest

## Example Usage

```typescript
import { EnterpriseGetInstanceHealthRequest } from "hypersender-node/models/operations";

let value: EnterpriseGetInstanceHealthRequest = {
  instance: "{{ instance_id }}",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `instance`                                      | *string*                                        | :heavy_check_mark:                              | Instance UUID copied from hypersender dashboard | {{ instance_id }}                               |