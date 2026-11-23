# ResponseBody

The actual API response body once the request is processed. Contains the message details when completed, or error details when failed. Null while processing.

## Example Usage

```typescript
import { ResponseBody } from "hypersender-node/models";

let value: ResponseBody = {
  messageId: "AAAAAA0000BBBBB00CCCCCC",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `messageId`                               | *string*                                  | :heavy_minus_sign:                        | The unique identifier of the sent message | AAAAAA0000BBBBB00CCCCCC                   |