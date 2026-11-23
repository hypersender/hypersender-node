# Heartbeat

## Example Usage

```typescript
import { Heartbeat } from "hypersender-node/models";

let value: Heartbeat = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `phone`                                            | [models.Phone](../models/phone.md)                 | :heavy_minus_sign:                                 | N/A                                                |
| `id`                                               | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `phoneId`                                          | *string*                                           | :heavy_minus_sign:                                 | Your Instance ID.                                  |
| `batteryLevel`                                     | *number*                                           | :heavy_minus_sign:                                 | Battery level in percent.                          |
| `isCharging`                                       | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `localTimestamp`                                   | *string*                                           | :heavy_minus_sign:                                 | The phone's local time when it sent the heartbeat. |
| `appVersion`                                       | *string*                                           | :heavy_minus_sign:                                 | App version that sent the heartbeat.               |
| `createdAt`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `updatedAt`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |