# EnterpriseValidationError

## Example Usage

```typescript
import { EnterpriseValidationError } from "hypersender/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `message`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |
| `errors`                                                                                     | [models.EnterpriseValidationErrorErrors](../../models/enterprise-validation-error-errors.md) | :heavy_check_mark:                                                                           | Invalid or missing fields will be shown here                                                 |                                                                                              |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 422                                                                                          |