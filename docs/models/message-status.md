# MessageStatus

## Example Usage

```typescript
import { MessageStatus } from "hypersender-node/models";

let value: MessageStatus = "expired";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "scheduled" | "sending" | "sent" | "delivered" | "failed" | "expired" | "received" | "deleted" | Unrecognized<string>
```