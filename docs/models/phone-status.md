# PhoneStatus

`missing` means sends are refused with `PHONE_PUSH_NOT_REGISTERED` until the app registers again.

## Example Usage

```typescript
import { PhoneStatus } from "hypersender/models";

let value: PhoneStatus = "registered";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"registered" | "missing" | Unrecognized<string>
```