# UpsertContactRequest

## Example Usage

```typescript
import { UpsertContactRequest } from "hypersender/models";

let value: UpsertContactRequest = {
  chatId: "1234567890@c.us",
  firstName: "John",
  lastName: "Doe",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `chatId`                                                        | *string*                                                        | :heavy_check_mark:                                              | Phone number (123123123) or chat ID (123123@c.us or 123123@lid) | 1234567890@c.us                                                 |
| `firstName`                                                     | *string*                                                        | :heavy_check_mark:                                              | The contact's first name                                        | John                                                            |
| `lastName`                                                      | *string*                                                        | :heavy_minus_sign:                                              | The contact's last name                                         | Doe                                                             |