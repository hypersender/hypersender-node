# WhatsappCheckContactExistsResponse

Successful response

## Example Usage

```typescript
import { WhatsappCheckContactExistsResponse } from "hypersender-node/models/operations";

let value: WhatsappCheckContactExistsResponse = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `numberExists`                                        | *boolean*                                             | :heavy_minus_sign:                                    | Whether the phone number exists on WhatsApp           |
| `chatId`                                              | *string*                                              | :heavy_minus_sign:                                    | The WhatsApp chat ID if number exists, null otherwise |