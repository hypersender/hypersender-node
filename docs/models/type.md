# Type

`sent_to_mobile` for messages you sent, `received_from_mobile` for incoming messages.

## Example Usage

```typescript
import { Type } from "hypersender/models";

let value: Type = "sent_to_mobile";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sent_to_mobile" | "received_from_mobile" | Unrecognized<string>
```