# Sms

## Overview

### Available Operations

* [sendMessage](#sendmessage) - Send Message
* [getHeartbeats](#getheartbeats) - Heartbeats
* [listMessages](#listmessages) - Index Messages
* [deleteMessage](#deletemessage) - Delete Message
* [listMessageThreads](#listmessagethreads) - Message threads
* [editMessageThread](#editmessagethread) - Edit Message Thread
* [deleteMessageThread](#deletemessagethread) - Delete Message threads

## sendMessage

Send an SMS through the Android phone linked to your instance, now or up to 3 days ahead. The API answers before the phone sends the message: follow the result with webhooks.

A retry with the same `request_id`, `to`, and `content` returns the existing message with status 200 instead of creating a new one.

### Example Usage: Retry of an existing message

<!-- UsageSnippet language="typescript" operationID="sms-send-message" method="post" path="/sms/v1/{smsInstance}/send-message" example="Retry of an existing message" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.sendMessage({
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    scheduleSendAt: "2026-11-20 09:30:00",
    maxSendAttempts: 3,
    messageExpirationSeconds: 600,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsSendMessage } from "hypersender/funcs/sms-send-message.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsSendMessage(hypersender, {
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    scheduleSendAt: "2026-11-20 09:30:00",
    maxSendAttempts: 3,
    messageExpirationSeconds: 600,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsSendMessage failed:", res.error);
  }
}

run();
```
### Example Usage: SMS service unreachable

<!-- UsageSnippet language="typescript" operationID="sms-send-message" method="post" path="/sms/v1/{smsInstance}/send-message" example="SMS service unreachable" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.sendMessage({
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    scheduleSendAt: "2026-11-20 09:30:00",
    maxSendAttempts: 3,
    messageExpirationSeconds: 600,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsSendMessage } from "hypersender/funcs/sms-send-message.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsSendMessage(hypersender, {
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    scheduleSendAt: "2026-11-20 09:30:00",
    maxSendAttempts: 3,
    messageExpirationSeconds: 600,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsSendMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Schedule

<!-- UsageSnippet language="typescript" operationID="sms-send-message" method="post" path="/sms/v1/{smsInstance}/send-message" example="Schedule" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.sendMessage({
    to: "+12025550147",
    content: "Your appointment is tomorrow at 10:00.",
    requestId: "appointment-reminder-2231",
    scheduleSendAt: "2026-11-20 09:30:00",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsSendMessage } from "hypersender/funcs/sms-send-message.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsSendMessage(hypersender, {
    to: "+12025550147",
    content: "Your appointment is tomorrow at 10:00.",
    requestId: "appointment-reminder-2231",
    scheduleSendAt: "2026-11-20 09:30:00",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsSendMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Send now

<!-- UsageSnippet language="typescript" operationID="sms-send-message" method="post" path="/sms/v1/{smsInstance}/send-message" example="Send now" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.sendMessage({
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    messageExpirationSeconds: 600,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsSendMessage } from "hypersender/funcs/sms-send-message.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsSendMessage(hypersender, {
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    messageExpirationSeconds: 600,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsSendMessage failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="sms-send-message" method="post" path="/sms/v1/{smsInstance}/send-message" example="default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.sendMessage({
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    scheduleSendAt: "2026-11-20 09:30:00",
    maxSendAttempts: 3,
    messageExpirationSeconds: 600,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsSendMessage } from "hypersender/funcs/sms-send-message.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsSendMessage(hypersender, {
    to: "+12025550147",
    content: "Acme code: 482913",
    requestId: "order-1042-otp",
    scheduleSendAt: "2026-11-20 09:30:00",
    maxSendAttempts: 3,
    messageExpirationSeconds: 600,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsSendMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SmsSendMessageRequest](../../models/operations/sms-send-message-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SendMessageResponse](../../models/send-message-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorT                     | 400, 401, 403, 404, 422, 426, 429 | application/json                  |
| errors.ErrorT                     | 500                               | application/json                  |
| errors.HypersenderDefaultError    | 4XX, 5XX                          | \*/\*                             |

## getHeartbeats

List the heartbeats your phone sent, newest first. The app sends one every 15 minutes. Paginated with up to 50 heartbeats per page.

### Example Usage: Heartbeats

<!-- UsageSnippet language="typescript" operationID="sms-heartbeats" method="get" path="/sms/v1/{smsInstance}/heartbeats" example="Heartbeats" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.getHeartbeats();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsGetHeartbeats } from "hypersender/funcs/sms-get-heartbeats.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsGetHeartbeats(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsGetHeartbeats failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="sms-heartbeats" method="get" path="/sms/v1/{smsInstance}/heartbeats" example="default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.getHeartbeats();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsGetHeartbeats } from "hypersender/funcs/sms-get-heartbeats.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsGetHeartbeats(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsGetHeartbeats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SmsHeartbeatsRequest](../../models/operations/sms-heartbeats-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SmsHeartbeatsResponse](../../models/operations/sms-heartbeats-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ErrorT                  | 400, 401, 403, 404, 422, 426   | application/json               |
| errors.ErrorT                  | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## listMessages

List sent and received messages. Filter by `request_id`, number, content, status, type, or date. Paginated with up to 50 messages per page, newest first by `updated_at`.

### Example Usage: Messages

<!-- UsageSnippet language="typescript" operationID="sms-index-messages" method="get" path="/sms/v1/{smsInstance}/messages" example="Messages" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.listMessages();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsListMessages } from "hypersender/funcs/sms-list-messages.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsListMessages(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsListMessages failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="sms-index-messages" method="get" path="/sms/v1/{smsInstance}/messages" example="default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.listMessages();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsListMessages } from "hypersender/funcs/sms-list-messages.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsListMessages(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsListMessages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SmsIndexMessagesRequest](../../models/operations/sms-index-messages-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SmsIndexMessagesResponse](../../models/operations/sms-index-messages-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ErrorT                  | 400, 401, 403, 404, 422        | application/json               |
| errors.ErrorT                  | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## deleteMessage

Delete a message. It is removed from its thread and cannot be restored.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="sms-delete-message" method="delete" path="/sms/v1/{smsInstance}/delete-message" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  await hypersender.sms.deleteMessage("9f8b7c6d-3333-4a2b-8c3d-4e5f6a7b8c9d");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsDeleteMessage } from "hypersender/funcs/sms-delete-message.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsDeleteMessage(hypersender, "9f8b7c6d-3333-4a2b-8c3d-4e5f6a7b8c9d");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("smsDeleteMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The `id` of the message to delete.                                                                                                                                             | 9f8b7c6d-3333-4a2b-8c3d-4e5f6a7b8c9d                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ErrorT                  | 401, 403, 404                  | application/json               |
| errors.ErrorT                  | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## listMessageThreads

List the conversations (threads) of your phone. Each thread is one number your phone sent to or received from. Paginated with up to 50 threads per page, newest first by `updated_at`.

### Example Usage: Threads

<!-- UsageSnippet language="typescript" operationID="sms-message-threads" method="get" path="/sms/v1/{smsInstance}/message-threads" example="Threads" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.listMessageThreads();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsListMessageThreads } from "hypersender/funcs/sms-list-message-threads.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsListMessageThreads(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsListMessageThreads failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="sms-message-threads" method="get" path="/sms/v1/{smsInstance}/message-threads" example="default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.listMessageThreads();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsListMessageThreads } from "hypersender/funcs/sms-list-message-threads.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsListMessageThreads(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsListMessageThreads failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SmsMessageThreadsRequest](../../models/operations/sms-message-threads-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SmsMessageThreadsResponse](../../models/operations/sms-message-threads-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ErrorT                  | 400, 401, 403, 404, 422        | application/json               |
| errors.ErrorT                  | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## editMessageThread

Archive or unarchive a thread.

### Example Usage: Archive

<!-- UsageSnippet language="typescript" operationID="sms-edit-message-thread" method="put" path="/sms/v1/{smsInstance}/edit-message-thread" example="Archive" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.editMessageThread({
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsEditMessageThread } from "hypersender/funcs/sms-edit-message-thread.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsEditMessageThread(hypersender, {
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsEditMessageThread failed:", res.error);
  }
}

run();
```
### Example Usage: Archived

<!-- UsageSnippet language="typescript" operationID="sms-edit-message-thread" method="put" path="/sms/v1/{smsInstance}/edit-message-thread" example="Archived" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.editMessageThread({
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsEditMessageThread } from "hypersender/funcs/sms-edit-message-thread.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsEditMessageThread(hypersender, {
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsEditMessageThread failed:", res.error);
  }
}

run();
```
### Example Usage: Expired token

<!-- UsageSnippet language="typescript" operationID="sms-edit-message-thread" method="put" path="/sms/v1/{smsInstance}/edit-message-thread" example="Expired token" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.editMessageThread({
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsEditMessageThread } from "hypersender/funcs/sms-edit-message-thread.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsEditMessageThread(hypersender, {
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsEditMessageThread failed:", res.error);
  }
}

run();
```
### Example Usage: Invalid token

<!-- UsageSnippet language="typescript" operationID="sms-edit-message-thread" method="put" path="/sms/v1/{smsInstance}/edit-message-thread" example="Invalid token" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.editMessageThread({
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsEditMessageThread } from "hypersender/funcs/sms-edit-message-thread.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsEditMessageThread(hypersender, {
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsEditMessageThread failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="sms-edit-message-thread" method="put" path="/sms/v1/{smsInstance}/edit-message-thread" example="default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.sms.editMessageThread({
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsEditMessageThread } from "hypersender/funcs/sms-edit-message-thread.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsEditMessageThread(hypersender, {
    messageThreadId: "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d",
    isArchived: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsEditMessageThread failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SmsEditMessageThreadRequest](../../models/operations/sms-edit-message-thread-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EditMessageThread](../../models/edit-message-thread.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ErrorT                  | 401, 403, 404, 422             | application/json               |
| errors.ErrorT                  | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## deleteMessageThread

Delete a thread and every message in it. This cannot be undone.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="sms-delete-message-thread" method="delete" path="/sms/v1/{smsInstance}/delete-message-thread" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  await hypersender.sms.deleteMessageThread("9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { smsDeleteMessageThread } from "hypersender/funcs/sms-delete-message-thread.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  smsInstance: "{{ instance_id }}",
  security: {
    smsApiKey: process.env["HYPERSENDER_SMS_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsDeleteMessageThread(hypersender, "9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("smsDeleteMessageThread failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messageThreadId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The `id` of the thread to delete.                                                                                                                                              | 9f8b7c6d-4444-4a2b-8c3d-4e5f6a7b8c9d                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ErrorT                  | 401, 403, 404                  | application/json               |
| errors.ErrorT                  | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |