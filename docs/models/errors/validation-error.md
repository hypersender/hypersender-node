# ValidationError

## Example Usage

```typescript
import { ValidationError } from "hypersender/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `message`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `errors`                                                                | [models.ValidationErrorErrors](../../models/validation-error-errors.md) | :heavy_check_mark:                                                      | Invalid or missing feilds will be shown here                            |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |