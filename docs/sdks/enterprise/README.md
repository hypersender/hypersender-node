# Enterprise

## Overview

### Available Operations

* [getInstanceHealth](#getinstancehealth) - Check Instance Health
* [listInstances](#listinstances) - List Instances
* [createInstance](#createinstance) - Create Instance
* [requestNewQrCode](#requestnewqrcode) - Request New QR Code
* [restartInstance](#restartinstance) - Restart Instance

## getInstanceHealth

Checks the current health status of a WhatsApp instance by its UUID. This endpoint is limited to 10 requests per minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enterprise-getInstanceHealth" method="get" path="/whatsapp/v2/{instance}/health" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.enterprise.getInstanceHealth("{{ instance_id }}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { enterpriseGetInstanceHealth } from "hypersender-node/funcs/enterprise-get-instance-health.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await enterpriseGetInstanceHealth(hypersenderClient, "{{ instance_id }}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enterpriseGetInstanceHealth failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `instance`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Instance UUID copied from hypersender dashboard                                                                                                                                | {{ instance_id }}                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.EnterpriseGetInstanceHealthResponse](../../models/operations/enterprise-get-instance-health-response.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.EnterpriseNotFoundError                         | 404                                                    | application/json                                       |
| errors.EnterpriseGetInstanceHealthTooManyRequestsError | 429                                                    | application/json                                       |
| errors.HypersenderDefaultError                         | 4XX, 5XX                                               | \*/\*                                                  |

## listInstances

Lists all WhatsApp instances associated with the authenticated user's account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enterprise-listInstances" method="get" path="/whatsapp/v2/instances" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.enterprise.listInstances();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { enterpriseListInstances } from "hypersender-node/funcs/enterprise-list-instances.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await enterpriseListInstances(hypersenderClient);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enterpriseListInstances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnterpriseListInstancesRequest](../../models/operations/enterprise-list-instances-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.InstanceResponse[]](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## createInstance

Creates a new WhatsApp instance associated with a phone number and a user-defined name. This endpoint is limited to 5 requests per minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enterprise-createInstance" method="post" path="/whatsapp/v2/create-instance" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.enterprise.createInstance({
    phone: "+201234567890",
    name: "MyInstanceName",
    webhookUrl: "https://yourdomain.com/webhooks/whatsapp",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { enterpriseCreateInstance } from "hypersender-node/funcs/enterprise-create-instance.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await enterpriseCreateInstance(hypersenderClient, {
    phone: "+201234567890",
    name: "MyInstanceName",
    webhookUrl: "https://yourdomain.com/webhooks/whatsapp",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enterpriseCreateInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateInstanceRequest](../../models/create-instance-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.InstanceWithQRResponse](../../models/instance-with-qr-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.EnterpriseValidationError                    | 422                                                 | application/json                                    |
| errors.EnterpriseCreateInstanceTooManyRequestsError | 429                                                 | application/json                                    |
| errors.HypersenderDefaultError                      | 4XX, 5XX                                            | \*/\*                                               |

## requestNewQrCode

Forces the instance to generate a new QR code, typically after an expired or failed scan. This endpoint is limited to 1 request per minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enterprise-requestNewQrCode" method="post" path="/whatsapp/v2/{instance}/request-new-qr-code" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.enterprise.requestNewQrCode("{{ instance_id }}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { enterpriseRequestNewQrCode } from "hypersender-node/funcs/enterprise-request-new-qr-code.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await enterpriseRequestNewQrCode(hypersenderClient, "{{ instance_id }}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enterpriseRequestNewQrCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `instance`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Instance UUID copied from hypersender dashboard                                                                                                                                | {{ instance_id }}                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.InstanceWithQRResponse](../../models/instance-with-qr-response.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.EnterpriseNotFoundError                        | 404                                                   | application/json                                      |
| errors.EnterpriseRequestNewQrCodeTooManyRequestsError | 429                                                   | application/json                                      |
| errors.HypersenderDefaultError                        | 4XX, 5XX                                              | \*/\*                                                 |

## restartInstance

Restarts a WhatsApp instance. Useful when the instance is stuck or not working properly. This endpoint is limited to 5 requests per minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enterprise-restartInstance" method="post" path="/whatsapp/v2/{instance}/restart" -->
```typescript
import { HypersenderClient } from "hypersender-node";

const hypersenderClient = new HypersenderClient({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersenderClient.enterprise.restartInstance("{{ instance_id }}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderClientCore } from "hypersender-node/core.js";
import { enterpriseRestartInstance } from "hypersender-node/funcs/enterprise-restart-instance.js";

// Use `HypersenderClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersenderClient = new HypersenderClientCore({
  security: {
    enterpriseApiKey: process.env["HYPERSENDER_ENTERPRISE_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await enterpriseRestartInstance(hypersenderClient, "{{ instance_id }}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enterpriseRestartInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `instance`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Instance UUID copied from hypersender dashboard                                                                                                                                | {{ instance_id }}                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.EnterpriseRestartInstanceResponse](../../models/operations/enterprise-restart-instance-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.EnterpriseNotFoundError                       | 404                                                  | application/json                                     |
| errors.EnterpriseRestartInstanceTooManyRequestsError | 429                                                  | application/json                                     |
| errors.InternalServerError                           | 500                                                  | application/json                                     |
| errors.HypersenderDefaultError                       | 4XX, 5XX                                             | \*/\*                                                |