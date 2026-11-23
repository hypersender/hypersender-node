# SmsEditMessageThreadRequest

## Example Usage

```typescript
import { SmsEditMessageThreadRequest } from "hypersender-node/models/operations";

let value: SmsEditMessageThreadRequest = {
  messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
  isArchived: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `messageThreadId`                                      | *string*                                               | :heavy_check_mark:                                     | The `id` of the thread.                                | 9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d                   |
| `isArchived`                                           | *boolean*                                              | :heavy_check_mark:                                     | `true` to archive the thread, `false` to unarchive it. | true                                                   |