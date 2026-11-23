# Whatsapp

## Overview

### Available Operations

* [getQueuedRequest](#getqueuedrequest)
* [sendTextSafe](#sendtextsafe)
* [sendText](#sendtext)
* [sendLinkCustomPreview](#sendlinkcustompreview)
* [sendFile](#sendfile)
* [sendImage](#sendimage)
* [sendVideo](#sendvideo)
* [sendVoice](#sendvoice)
* [forwardMessage](#forwardmessage)
* [sendSeen](#sendseen)
* [readChat](#readchat)
* [startTyping](#starttyping)
* [stopTyping](#stoptyping)
* [sendPoll](#sendpoll)
* [sendContactCard](#sendcontactcard)
* [sendLocation](#sendlocation)
* [reactToMessage](#reacttomessage)
* [starMessage](#starmessage)
* [deleteMessage](#deletemessage)

## getQueuedRequest

### Example Usage: Failed Request

<!-- UsageSnippet language="typescript" operationID="whatsapp-getQueuedRequest" method="get" path="/whatsapp/v2/{whatsappInstanceId}/queued-requests/{queued_request_uuid}" example="Failed Request" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.getQueuedRequest("a0816120-7e37-4e8b-8cf3-92deb2cdc133");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappGetQueuedRequest } from "hypersender-node/funcs/whatsapp-get-queued-request.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappGetQueuedRequest(hypersenderClient, "a0816120-7e37-4e8b-8cf3-92deb2cdc133");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappGetQueuedRequest failed:", res.error);
  }
}

run();
```
### Example Usage: Successful Message

<!-- UsageSnippet language="typescript" operationID="whatsapp-getQueuedRequest" method="get" path="/whatsapp/v2/{whatsappInstanceId}/queued-requests/{queued_request_uuid}" example="Successful Message" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.getQueuedRequest("a0816120-7e37-4e8b-8cf3-92deb2cdc133");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappGetQueuedRequest } from "hypersender-node/funcs/whatsapp-get-queued-request.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappGetQueuedRequest(hypersenderClient, "a0816120-7e37-4e8b-8cf3-92deb2cdc133");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappGetQueuedRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `queuedRequestUuid`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The UUID of the queued request returned from any API call                                                                                                                      | a0816120-7e37-4e8b-8cf3-92deb2cdc133                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.QueuedRequestResponse](../../models/queued-request-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendTextSafe

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendTextSafe" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text-safe" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendTextSafe({
    chatId: "111111111111@c.us",
    text: "Hi there!",
    replyTo: "string",
    linkPreview: false,
    linkPreviewHighQuality: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendTextSafe } from "hypersender-node/funcs/whatsapp-send-text-safe.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendTextSafe(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "Hi there!",
    replyTo: "string",
    linkPreview: false,
    linkPreviewHighQuality: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendTextSafe failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendTextSafe" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text-safe" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendTextSafe({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendTextSafe } from "hypersender-node/funcs/whatsapp-send-text-safe.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendTextSafe(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendTextSafe failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendTextSafe" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text-safe" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendTextSafe({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendTextSafe } from "hypersender-node/funcs/whatsapp-send-text-safe.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendTextSafe(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendTextSafe failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendTextSafe" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text-safe" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendTextSafe({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendTextSafe } from "hypersender-node/funcs/whatsapp-send-text-safe.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendTextSafe(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendTextSafe failed:", res.error);
  }
}

run();
```
### Example Usage: queued

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendTextSafe" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text-safe" example="queued" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendTextSafe({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendTextSafe } from "hypersender-node/funcs/whatsapp-send-text-safe.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendTextSafe(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendTextSafe failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendMessageRequest](../../models/send-message-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.QueuedResponse](../../models/queued-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendText

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendText" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendText({
    chatId: "111111111111@c.us",
    text: "Hi there!",
    replyTo: "string",
    linkPreview: false,
    linkPreviewHighQuality: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendText } from "hypersender-node/funcs/whatsapp-send-text.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendText(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "Hi there!",
    replyTo: "string",
    linkPreview: false,
    linkPreviewHighQuality: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendText failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendText" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendText({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendText } from "hypersender-node/funcs/whatsapp-send-text.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendText(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendText failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendText" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendText({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendText } from "hypersender-node/funcs/whatsapp-send-text.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendText(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendText failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendText" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendText({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendText } from "hypersender-node/funcs/whatsapp-send-text.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendText(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendText failed:", res.error);
  }
}

run();
```
### Example Usage: queued

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendText" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-text" example="queued" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendText({
    chatId: "111111111111@c.us",
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendText } from "hypersender-node/funcs/whatsapp-send-text.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendText(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendText failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendMessageRequest](../../models/send-message-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.QueuedResponse](../../models/queued-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendLinkCustomPreview

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendLinkCustomPreview" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-link-custom-preview" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendLinkCustomPreview({
    chatId: "1111111111@c.us",
    text: "Check this out! https://hypersender.com/",
    replyTo: "string",
    highQuality: true,
    previewTitle: "Hypersender is awesome",
    previewDescription: "Check this out, this is a custom link preview!",
    previewUrl: "https://hypersender.com/",
    previewImageUrl: "https://m.media-amazon.com/images/M/MV5BMjRhYjdkOGMtZDY5Zi00OWEwLTlkOWEtYz.jpg",
    previewImageFile: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendLinkCustomPreview } from "hypersender-node/funcs/whatsapp-send-link-custom-preview.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendLinkCustomPreview(hypersenderClient, {
    chatId: "1111111111@c.us",
    text: "Check this out! https://hypersender.com/",
    replyTo: "string",
    highQuality: true,
    previewTitle: "Hypersender is awesome",
    previewDescription: "Check this out, this is a custom link preview!",
    previewUrl: "https://hypersender.com/",
    previewImageUrl: "https://m.media-amazon.com/images/M/MV5BMjRhYjdkOGMtZDY5Zi00OWEwLTlkOWEtYz.jpg",
    previewImageFile: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendLinkCustomPreview failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendLinkCustomPreview" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-link-custom-preview" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendLinkCustomPreview({
    chatId: "111111111111@c.us",
    text: "<value>",
    previewTitle: "<value>",
    previewDescription: "<value>",
    previewUrl: "https://curly-digit.com/",
    previewImageUrl: "https://basic-swanling.name/",
    previewImageFile: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendLinkCustomPreview } from "hypersender-node/funcs/whatsapp-send-link-custom-preview.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendLinkCustomPreview(hypersenderClient, {
    chatId: "111111111111@c.us",
    text: "<value>",
    previewTitle: "<value>",
    previewDescription: "<value>",
    previewUrl: "https://curly-digit.com/",
    previewImageUrl: "https://basic-swanling.name/",
    previewImageFile: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendLinkCustomPreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendLinkCustomPreview](../../models/send-link-custom-preview.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendLinkCustomPreviewResponse](../../models/operations/whatsapp-send-link-custom-preview-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendFile

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendFile" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-file" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendFile({
    chatId: "11111111111@c.us",
    url: "https://hypersender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52c242e8.png&w=640&q=75",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendFile } from "hypersender-node/funcs/whatsapp-send-file.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendFile(hypersenderClient, {
    chatId: "11111111111@c.us",
    url: "https://hypersender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52c242e8.png&w=640&q=75",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendFile failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendFile" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-file" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendFile({
    chatId: "11111111111@c.us",
    file: "hypersender.jpeg",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendFile } from "hypersender-node/funcs/whatsapp-send-file.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendFile(hypersenderClient, {
    chatId: "11111111111@c.us",
    file: "hypersender.jpeg",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendFile failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendFile" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-file" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendFile({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendFile } from "hypersender-node/funcs/whatsapp-send-file.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendFile(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendFileRequest](../../models/send-file-request.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendFileResponse](../../models/operations/whatsapp-send-file-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendImage

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendImage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-image" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendImage({
    chatId: "11111111111@c.us",
    url: "https://hypersender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52c242e8.png&w=640&q=75",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendImage } from "hypersender-node/funcs/whatsapp-send-image.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendImage(hypersenderClient, {
    chatId: "11111111111@c.us",
    url: "https://hypersender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52c242e8.png&w=640&q=75",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendImage failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendImage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-image" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendImage({
    chatId: "11111111111@c.us",
    file: "hypersender.jpeg",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendImage } from "hypersender-node/funcs/whatsapp-send-image.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendImage(hypersenderClient, {
    chatId: "11111111111@c.us",
    file: "hypersender.jpeg",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendImage failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendImage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-image" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendImage({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendImage } from "hypersender-node/funcs/whatsapp-send-image.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendImage(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendImageRequest](../../models/send-image-request.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendImageResponse](../../models/operations/whatsapp-send-image-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendVideo

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendVideo" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-video" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendVideo({
    chatId: "11111111111@c.us",
    url: "https://hypersender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52c242e8.png&w=640&q=75",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendVideo } from "hypersender-node/funcs/whatsapp-send-video.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendVideo(hypersenderClient, {
    chatId: "11111111111@c.us",
    url: "https://hypersender.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52c242e8.png&w=640&q=75",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendVideo failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendVideo" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-video" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendVideo({
    chatId: "11111111111@c.us",
    file: "hypersender.jpeg",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendVideo } from "hypersender-node/funcs/whatsapp-send-video.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendVideo(hypersenderClient, {
    chatId: "11111111111@c.us",
    file: "hypersender.jpeg",
    mimetype: "image",
    caption: "string",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendVideo failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendVideo" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-video" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendVideo({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendVideo } from "hypersender-node/funcs/whatsapp-send-video.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendVideo(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendVideo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendVideoRequest](../../models/send-video-request.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendVideoResponse](../../models/operations/whatsapp-send-video-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendVoice

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendVoice" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-voice" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendVoice({
    chatId: "1111111111111@c.us",
    url: "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
    caption: "hypersender",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendVoice } from "hypersender-node/funcs/whatsapp-send-voice.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendVoice(hypersenderClient, {
    chatId: "1111111111111@c.us",
    url: "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a",
    caption: "hypersender",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendVoice failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendVoice" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-voice" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendVoice({
    chatId: "1111111111111@c.us",
    file: "audio.opus",
    caption: "hypersender",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendVoice } from "hypersender-node/funcs/whatsapp-send-voice.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendVoice(hypersenderClient, {
    chatId: "1111111111111@c.us",
    file: "audio.opus",
    caption: "hypersender",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendVoice failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendVoice" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-voice" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendVoice({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendVoice } from "hypersender-node/funcs/whatsapp-send-voice.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendVoice(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendVoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendVoiceRequest](../../models/send-voice-request.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendVoiceResponse](../../models/operations/whatsapp-send-voice-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## forwardMessage

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-forwardMessage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/forward-message" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.forwardMessage({
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappForwardMessage } from "hypersender-node/funcs/whatsapp-forward-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappForwardMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappForwardMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-forwardMessage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/forward-message" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.forwardMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappForwardMessage } from "hypersender-node/funcs/whatsapp-forward-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappForwardMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappForwardMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-forwardMessage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/forward-message" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.forwardMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappForwardMessage } from "hypersender-node/funcs/whatsapp-forward-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappForwardMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappForwardMessage failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-forwardMessage" method="post" path="/whatsapp/v2/{whatsappInstanceId}/forward-message" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.forwardMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappForwardMessage } from "hypersender-node/funcs/whatsapp-forward-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappForwardMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappForwardMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ForwardMessageRequest](../../models/forward-message-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappForwardMessageResponse](../../models/operations/whatsapp-forward-message-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendSeen

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendSeen" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-seen" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendSeen({
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    participant: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendSeen } from "hypersender-node/funcs/whatsapp-send-seen.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendSeen(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    participant: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendSeen failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendSeen" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-seen" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendSeen({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendSeen } from "hypersender-node/funcs/whatsapp-send-seen.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendSeen(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendSeen failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendSeen" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-seen" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendSeen({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendSeen } from "hypersender-node/funcs/whatsapp-send-seen.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendSeen(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendSeen failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendSeen" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-seen" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendSeen({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendSeen } from "hypersender-node/funcs/whatsapp-send-seen.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendSeen(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendSeen failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendSeenRequest](../../models/send-seen-request.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendSeenResponse](../../models/operations/whatsapp-send-seen-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## readChat

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-readChat" method="post" path="/whatsapp/v2/{whatsappInstanceId}/read-chat" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.readChat({
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReadChat } from "hypersender-node/funcs/whatsapp-read-chat.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReadChat(hypersenderClient, {
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReadChat failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-readChat" method="post" path="/whatsapp/v2/{whatsappInstanceId}/read-chat" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.readChat({
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReadChat } from "hypersender-node/funcs/whatsapp-read-chat.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReadChat(hypersenderClient, {
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReadChat failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-readChat" method="post" path="/whatsapp/v2/{whatsappInstanceId}/read-chat" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.readChat({
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReadChat } from "hypersender-node/funcs/whatsapp-read-chat.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReadChat(hypersenderClient, {
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReadChat failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-readChat" method="post" path="/whatsapp/v2/{whatsappInstanceId}/read-chat" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.readChat({
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReadChat } from "hypersender-node/funcs/whatsapp-read-chat.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReadChat(hypersenderClient, {
    messages: "30",
    days: "7",
    body: {
      chatId: "111111111111@c.us",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReadChat failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WhatsappReadChatRequest](../../models/operations/whatsapp-read-chat-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappReadChatResponse](../../models/operations/whatsapp-read-chat-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## startTyping

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-startTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/start-typing" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.startTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStartTyping } from "hypersender-node/funcs/whatsapp-start-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStartTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStartTyping failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-startTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/start-typing" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.startTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStartTyping } from "hypersender-node/funcs/whatsapp-start-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStartTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStartTyping failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-startTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/start-typing" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.startTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStartTyping } from "hypersender-node/funcs/whatsapp-start-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStartTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStartTyping failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-startTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/start-typing" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.startTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStartTyping } from "hypersender-node/funcs/whatsapp-start-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStartTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStartTyping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | 111111111111@c.us                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WhatsappStartTypingResponse](../../models/operations/whatsapp-start-typing-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## stopTyping

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-stopTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/stop-typing" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.stopTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStopTyping } from "hypersender-node/funcs/whatsapp-stop-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStopTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStopTyping failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-stopTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/stop-typing" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.stopTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStopTyping } from "hypersender-node/funcs/whatsapp-stop-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStopTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStopTyping failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-stopTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/stop-typing" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.stopTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStopTyping } from "hypersender-node/funcs/whatsapp-stop-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStopTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStopTyping failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-stopTyping" method="post" path="/whatsapp/v2/{whatsappInstanceId}/stop-typing" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.stopTyping({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStopTyping } from "hypersender-node/funcs/whatsapp-stop-typing.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStopTyping(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStopTyping failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | 111111111111@c.us                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WhatsappStopTypingResponse](../../models/operations/whatsapp-stop-typing-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendPoll

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendPoll" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-poll" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendPoll({
    chatId: "1111111111111@c.us",
    replyTo: "string",
    poll: {
      name: "How are you?",
      options: [
        "Awesome!",
        "Good!",
        "Not bad!",
      ],
      multipleAnswers: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendPoll } from "hypersender-node/funcs/whatsapp-send-poll.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendPoll(hypersenderClient, {
    chatId: "1111111111111@c.us",
    replyTo: "string",
    poll: {
      name: "How are you?",
      options: [
        "Awesome!",
        "Good!",
        "Not bad!",
      ],
      multipleAnswers: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendPoll failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendPoll" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-poll" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendPoll({
    chatId: "1111111111111@c.us",
    replyTo: "string",
    poll: {
      name: "How are you?",
      options: [
        "Awesome!",
        "Good!",
        "Not bad!",
      ],
      multipleAnswers: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendPoll } from "hypersender-node/funcs/whatsapp-send-poll.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendPoll(hypersenderClient, {
    chatId: "1111111111111@c.us",
    replyTo: "string",
    poll: {
      name: "How are you?",
      options: [
        "Awesome!",
        "Good!",
        "Not bad!",
      ],
      multipleAnswers: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendPoll failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendPoll" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-poll" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendPoll({
    chatId: "1111111111111@c.us",
    poll: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendPoll } from "hypersender-node/funcs/whatsapp-send-poll.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendPoll(hypersenderClient, {
    chatId: "1111111111111@c.us",
    poll: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendPoll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendPollRequest](../../models/send-poll-request.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendPollResponse](../../models/operations/whatsapp-send-poll-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendContactCard

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendContactCard" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-contact-card" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendContactCard({
    chatId: "1111111111111@c.us",
    contacts: [
      {
        vcard: "BEGIN:VCARD\\nVERSION:3.0\\nFN:Jane Doe\\nORG:Company Name;\\nTEL;type=CELL;type=VOICE;waid=911111111111:+11111111111111\\nEND:VCARD",
        organization: "Hypersender",
        whatsappId: "911111111111",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendContactCard } from "hypersender-node/funcs/whatsapp-send-contact-card.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendContactCard(hypersenderClient, {
    chatId: "1111111111111@c.us",
    contacts: [
      {
        vcard: "BEGIN:VCARD\\nVERSION:3.0\\nFN:Jane Doe\\nORG:Company Name;\\nTEL;type=CELL;type=VOICE;waid=911111111111:+11111111111111\\nEND:VCARD",
        organization: "Hypersender",
        whatsappId: "911111111111",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendContactCard failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendContactCard" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-contact-card" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendContactCard({
    chatId: "1111111111111@c.us",
    contacts: [
      {
        vcard: "<value>",
        fullName: "John Doe",
        organization: "Hypersender",
        phoneNumber: "111111111111",
        whatsappId: "911111111111",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendContactCard } from "hypersender-node/funcs/whatsapp-send-contact-card.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendContactCard(hypersenderClient, {
    chatId: "1111111111111@c.us",
    contacts: [
      {
        vcard: "<value>",
        fullName: "John Doe",
        organization: "Hypersender",
        phoneNumber: "111111111111",
        whatsappId: "911111111111",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendContactCard failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendContactCard" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-contact-card" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendContactCard({
    chatId: "1111111111111@c.us",
    contacts: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendContactCard } from "hypersender-node/funcs/whatsapp-send-contact-card.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendContactCard(hypersenderClient, {
    chatId: "1111111111111@c.us",
    contacts: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendContactCard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendContactCardRequest](../../models/send-contact-card-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendContactCardResponse](../../models/operations/whatsapp-send-contact-card-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## sendLocation

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendLocation" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-location" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendLocation({
    chatId: "111111111111@c.us",
    latitude: 38.8937255,
    longitude: -77.0969763,
    title: "Our office",
    replyTo: "string",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendLocation } from "hypersender-node/funcs/whatsapp-send-location.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendLocation(hypersenderClient, {
    chatId: "111111111111@c.us",
    latitude: 38.8937255,
    longitude: -77.0969763,
    title: "Our office",
    replyTo: "string",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendLocation failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendLocation" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-location" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendLocation({
    chatId: "111111111111@c.us",
    latitude: 1236.2,
    longitude: 4385.3,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendLocation } from "hypersender-node/funcs/whatsapp-send-location.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendLocation(hypersenderClient, {
    chatId: "111111111111@c.us",
    latitude: 1236.2,
    longitude: 4385.3,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendLocation failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendLocation" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-location" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendLocation({
    chatId: "111111111111@c.us",
    latitude: 1236.2,
    longitude: 4385.3,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendLocation } from "hypersender-node/funcs/whatsapp-send-location.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendLocation(hypersenderClient, {
    chatId: "111111111111@c.us",
    latitude: 1236.2,
    longitude: 4385.3,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendLocation failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-sendLocation" method="post" path="/whatsapp/v2/{whatsappInstanceId}/send-location" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.sendLocation({
    chatId: "111111111111@c.us",
    latitude: 1236.2,
    longitude: 4385.3,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappSendLocation } from "hypersender-node/funcs/whatsapp-send-location.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappSendLocation(hypersenderClient, {
    chatId: "111111111111@c.us",
    latitude: 1236.2,
    longitude: 4385.3,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappSendLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SendLocationRequest](../../models/send-location-request.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappSendLocationResponse](../../models/operations/whatsapp-send-location-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## reactToMessage

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-reactToMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/react-to-message" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.reactToMessage({
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    reaction: "👍",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReactToMessage } from "hypersender-node/funcs/whatsapp-react-to-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReactToMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    reaction: "👍",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReactToMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-reactToMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/react-to-message" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.reactToMessage({
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    reaction: "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReactToMessage } from "hypersender-node/funcs/whatsapp-react-to-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReactToMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "false_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    reaction: "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReactToMessage failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-reactToMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/react-to-message" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.reactToMessage({
    chatId: "111111111111@c.us",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappReactToMessage } from "hypersender-node/funcs/whatsapp-react-to-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappReactToMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappReactToMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReactToMessageRequest](../../models/react-to-message-request.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappReactToMessageResponse](../../models/operations/whatsapp-react-to-message-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## starMessage

### Example Usage: Example 1

<!-- UsageSnippet language="typescript" operationID="whatsapp-starMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/star-message" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.starMessage({
    chatId: "111111111111@c.us",
    messageId: "true_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    star: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStarMessage } from "hypersender-node/funcs/whatsapp-star-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStarMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "true_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    star: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStarMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Example 2

<!-- UsageSnippet language="typescript" operationID="whatsapp-starMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/star-message" example="Example 2" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.starMessage({
    chatId: "111111111111@c.us",
    messageId: "true_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    star: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStarMessage } from "hypersender-node/funcs/whatsapp-star-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStarMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "true_111111111111@c.us_3EB08F6AD2A432386EFA0E",
    star: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStarMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Multiple fields Error

<!-- UsageSnippet language="typescript" operationID="whatsapp-starMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/star-message" example="Multiple fields Error" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.starMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
    star: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStarMessage } from "hypersender-node/funcs/whatsapp-star-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStarMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
    star: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStarMessage failed:", res.error);
  }
}

run();
```
### Example Usage: Single Field error 

<!-- UsageSnippet language="typescript" operationID="whatsapp-starMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/star-message" example="Single Field error " -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.starMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
    star: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStarMessage } from "hypersender-node/funcs/whatsapp-star-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStarMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
    star: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStarMessage failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="whatsapp-starMessage" method="put" path="/whatsapp/v2/{whatsappInstanceId}/star-message" example="default" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.starMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
    star: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappStarMessage } from "hypersender-node/funcs/whatsapp-star-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappStarMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
    star: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappStarMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.StarMessageRequest](../../models/star-message-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappStarMessageResponse](../../models/operations/whatsapp-star-message-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## deleteMessage

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-deleteMessage" method="delete" path="/whatsapp/v2/{whatsappInstanceId}/delete-message" example="Example 1" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.whatsapp.deleteMessage({
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { whatsappDeleteMessage } from "hypersender-node/funcs/whatsapp-delete-message.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  whatsappInstanceId: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappDeleteMessage(hypersenderClient, {
    chatId: "111111111111@c.us",
    messageId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappDeleteMessage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WhatsappDeleteMessageRequest](../../models/operations/whatsapp-delete-message-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappDeleteMessageResponse](../../models/operations/whatsapp-delete-message-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |