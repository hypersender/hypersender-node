# WhatsappGetContactData

## Example Usage

```typescript
import { WhatsappGetContactData } from "hypersender/models/operations";

let value: WhatsappGetContactData = {
  id: "100875997589545@lid",
  name: "Maria",
  pushname: "Maria Doe",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `id`                | *string*            | :heavy_minus_sign:  | Contact ID          | 100875997589545@lid |
| `name`              | *string*            | :heavy_minus_sign:  | Contact name        | Maria               |
| `pushname`          | *string*            | :heavy_minus_sign:  | Contact push name   | Maria Doe           |