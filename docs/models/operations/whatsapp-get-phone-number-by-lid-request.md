# WhatsappGetPhoneNumberByLidRequest

## Example Usage

```typescript
import { WhatsappGetPhoneNumberByLidRequest } from "hypersender/models/operations";

let value: WhatsappGetPhoneNumberByLidRequest = {
  lid: "1111111@lid",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `lid`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The linked identifier to resolve. You can send either the full value like 1111111@lid or just the numeric part. | 1111111@lid                                                                                                     |