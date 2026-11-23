# AppUpdateReason

Why an update is required.

## Example Usage

```typescript
import { AppUpdateReason } from "hypersender-node/models";

let value: AppUpdateReason = "expired";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"expired" | "force_update" | Unrecognized<string>
```