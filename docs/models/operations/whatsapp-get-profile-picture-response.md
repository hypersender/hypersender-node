# WhatsappGetProfilePictureResponse

Profile picture retrieved successfully

## Example Usage

```typescript
import { WhatsappGetProfilePictureResponse } from "hypersender/models/operations";

let value: WhatsappGetProfilePictureResponse = {
  message: "Profile picture retrieved successfully.",
  data: {
    profilePictureURL:
      "https://pps.whatsapp.net/v/t61.24694-24/374498176_337577482181161_7091117586184162691_n.jpg?ccb=11-4&oh=01_Q5Aa3gEERUGD4fegyplSv2MnHmt_UIA9JnpjREhSJMNVWZC-RA&oe=6970FAAA&_nc_sid=5e03e0&_nc_cat=104",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | Profile picture retrieved successfully.                                                                  |
| `data`                                                                                                   | [operations.WhatsappGetProfilePictureData](../../models/operations/whatsapp-get-profile-picture-data.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |