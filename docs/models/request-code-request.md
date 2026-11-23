# RequestCodeRequest

## Example Usage

```typescript
import { RequestCodeRequest } from "hypersender/models";

let value: RequestCodeRequest = {
  chatId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `chatId`                                 | *string*                                 | :heavy_check_mark:                       | WhatsApp chat id (e.g. 20123456789@c.us) |
| `length`                                 | *number*                                 | :heavy_minus_sign:                       | Length of the code                       |
| `useLetter`                              | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `useNumber`                              | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `allCapital`                             | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | Name to show in messages                 |
| `expires`                                | *number*                                 | :heavy_minus_sign:                       | TTL in seconds                           |