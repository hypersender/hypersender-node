# WhatsappGetContactResponse

Contact retrieved successfully

## Example Usage

```typescript
import { WhatsappGetContactResponse } from "hypersender-node/models/operations";

let value: WhatsappGetContactResponse = {
  message: "Contact retrieved successfully.",
  data: {
    id: "100875997589545@lid",
    name: "Maria",
    pushname: "Maria Doe",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `message`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | Contact retrieved successfully.                                                           |
| `data`                                                                                    | [operations.WhatsappGetContactData](../../models/operations/whatsapp-get-contact-data.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |