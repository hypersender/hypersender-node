# InstanceResponse

## Example Usage

```typescript
import { InstanceResponse } from "hypersender-node/models";

let value: InstanceResponse = {
  id: "fa3d01c4-1234-4c0d-a12f-df319b612f8c",
  name: "MyInstanceName",
  phone: "+201234567890",
  serviceType: "whatsapp",
  status: "WORKING",
  accessToken: "234|3uB2pBST2H6If8twXIeUaeNu23VJ8XassYoOVJuva48388e1",
  createdAt: "2025-05-26T10:12:45",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Instance UUID                                                          | fa3d01c4-1234-4c0d-a12f-df319b612f8c                                   |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Instance name                                                          | MyInstanceName                                                         |
| `phone`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Phone number in E.164 format                                           | +201234567890                                                          |
| `serviceType`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Service type                                                           | whatsapp                                                               |
| `status`                                                               | [models.InstanceResponseStatus](../models/instance-response-status.md) | :heavy_minus_sign:                                                     | Instance status                                                        | WORKING                                                                |
| `accessToken`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Access token for the instance                                          | 234\|3uB2pBST2H6If8twXIeUaeNu23VJ8XassYoOVJuva48388e1                  |
| `createdAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Creation timestamp                                                     | 2025-05-26T10:12:45                                                    |