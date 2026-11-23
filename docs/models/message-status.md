# MessageStatus

## Example Usage

```typescript
import { MessageStatus } from "hypersender/models";

let value: MessageStatus = "expired";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "scheduled" | "sending" | "sent" | "delivered" | "failed" | "expired" | "received" | "deleted" | Unrecognized<string>
```