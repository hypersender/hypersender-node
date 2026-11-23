# WhatsappGetAllContactsResponse

Contacts retrieved successfully

## Example Usage

```typescript
import { WhatsappGetAllContactsResponse } from "hypersender/models/operations";

let value: WhatsappGetAllContactsResponse = {
  message: "Contacts retrieved successfully.",
  data: [
    {
      id: "100875997589545@lid",
      name: "Maria",
      pushname: "Maria Doe",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `message`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | Contacts retrieved successfully.                                                                     |
| `data`                                                                                               | [operations.WhatsappGetAllContactsData](../../models/operations/whatsapp-get-all-contacts-data.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |