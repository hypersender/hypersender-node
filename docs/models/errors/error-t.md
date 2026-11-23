# ErrorT

## Example Usage

```typescript
import { ErrorT } from "hypersender/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `message`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | What went wrong.                                                                  |
| `errors`                                                                          | [models.ErrorErrors](../../models/error-errors.md)                                | :heavy_minus_sign:                                                                | Validation errors by field. Each value is a list of messages.                     |
| `code`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Machine-readable reason, when there is one. Example: `PHONE_PUSH_NOT_REGISTERED`. |
| `errorCode`                                                                       | [models.ErrorCode](../../models/error-code.md)                                    | :heavy_minus_sign:                                                                | Set on `426` responses.                                                           |
| `data`                                                                            | [models.ErrorData](../../models/error-data.md)                                    | :heavy_minus_sign:                                                                | Extra details, for example the app versions on a `426`.                           |
| `statusCode`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | The HTTP status. Present on errors returned by the SMS service.                   |