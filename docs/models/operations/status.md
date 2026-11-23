# Status

Instance status:
- STOPPED: Instance is stopped
- STARTING: Instance is starting
- WORKING: Instance is running and ready
- SCAN_QR_CODE: Waiting for QR code to be scanned
- FAILED: Instance failed to start
- PENDING: Awaiting server assignment

## Example Usage

```typescript
import { Status } from "hypersender/models/operations";

let value: Status = "WORKING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"STOPPED" | "STARTING" | "WORKING" | "SCAN_QR_CODE" | "FAILED" | "PENDING" | Unrecognized<string>
```