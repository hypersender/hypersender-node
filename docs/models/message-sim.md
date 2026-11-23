# MessageSim

For received messages, the SIM that received it. For sent messages, the instance's SIM.

## Example Usage

```typescript
import { MessageSim } from "hypersender/models";

let value: MessageSim = "SIM2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SIM1" | "SIM2" | Unrecognized<string>
```