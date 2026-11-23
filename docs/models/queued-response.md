# QueuedResponse

All API requests in v2 return a queued response. Use the queued_request_link to check the actual message response.

## Example Usage

```typescript
import { QueuedResponse } from "hypersender-node/models";

let value: QueuedResponse = {
  queued: true,
  message: "Processing your request...",
  queuedRequestUuid: "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  queuedRequestLink:
    "https://app.hypersender.com/api/whatsapp/v2/{instance}/queued-requests/a0816120-7e37-4e8b-8cf3-92deb2cdc133",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `queued`                                                                                                    | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Indicates that the request has been queued                                                                  | true                                                                                                        |
| `message`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Status message                                                                                              | Processing your request...                                                                                  |
| `queuedRequestUuid`                                                                                         | *string*                                                                                                    | :heavy_check_mark:                                                                                          | UUID of the queued request                                                                                  | a0816120-7e37-4e8b-8cf3-92deb2cdc133                                                                        |
| `queuedRequestLink`                                                                                         | *string*                                                                                                    | :heavy_check_mark:                                                                                          | URL to check the status and response of the queued request                                                  | https://app.hypersender.com/api/whatsapp/v2/{instance}/queued-requests/a0816120-7e37-4e8b-8cf3-92deb2cdc133 |