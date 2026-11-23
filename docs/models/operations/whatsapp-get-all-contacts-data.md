# WhatsappGetAllContactsData

## Example Usage

```typescript
import { WhatsappGetAllContactsData } from "hypersender-node/models/operations";

let value: WhatsappGetAllContactsData = {
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