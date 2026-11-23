# WhatsappGetLidByPhoneNumberRequest

## Example Usage

```typescript
import { WhatsappGetLidByPhoneNumberRequest } from "hypersender-node/models/operations";

let value: WhatsappGetLidByPhoneNumberRequest = {
  phoneNumber: "3333333@c.us",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `phoneNumber`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The phone-number-based identifier to resolve. You can send either the full value like 3333333@c.us or just the numeric part. | 3333333@c.us                                                                                                                 |