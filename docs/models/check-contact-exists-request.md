# CheckContactExistsRequest

## Example Usage

```typescript
import { CheckContactExistsRequest } from "hypersender-node/models";

let value: CheckContactExistsRequest = {
  phone: "20123456789",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `phone`                                                        | *string*                                                       | :heavy_check_mark:                                             | Phone number to check (with country code, without + or spaces) | 20123456789                                                    |