# LidMapping

## Example Usage

```typescript
import { LidMapping } from "hypersender-node/models";

let value: LidMapping = {
  lid: "1111111@lid",
  pn: "3333333@c.us",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `lid`                                           | *string*                                        | :heavy_check_mark:                              | Linked identifier for the contact               | 1111111@lid                                     |
| `pn`                                            | *string*                                        | :heavy_check_mark:                              | Phone-number-based chat ID for the same contact | 3333333@c.us                                    |