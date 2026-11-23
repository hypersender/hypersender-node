# WhatsappUpsertContactResponse

Contact upserted successfully

## Example Usage

```typescript
import { WhatsappUpsertContactResponse } from "hypersender-node/models/operations";

let value: WhatsappUpsertContactResponse = {
  message: "Contact upserted successfully.",
  data: {
    success: true,
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `message`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | Contact upserted successfully.                                                                  |
| `data`                                                                                          | [operations.WhatsappUpsertContactData](../../models/operations/whatsapp-upsert-contact-data.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |