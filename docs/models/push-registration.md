# PushRegistration

Whether Hypersender can push messages to the phone.

## Example Usage

```typescript
import { PushRegistration } from "hypersender-node/models";

let value: PushRegistration = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `status`                                                                                          | [models.PhoneStatus](../models/phone-status.md)                                                   | :heavy_minus_sign:                                                                                | `missing` means sends are refused with `PHONE_PUSH_NOT_REGISTERED` until the app registers again. |
| `recoveryRequired`                                                                                | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | `true` when the app must register again. Open the app on the phone.                               |
| `syncedAt`                                                                                        | *string*                                                                                          | :heavy_minus_sign:                                                                                | When the app last reported its registration (ISO 8601).                                           |
| `clientState`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Registration state reported by the app.                                                           |