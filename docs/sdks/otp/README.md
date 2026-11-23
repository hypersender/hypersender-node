# Otp

## Overview

### Available Operations

* [requestCode](#requestcode) - Request OTP code
* [validateCode](#validatecode) - Validate OTP code
* [generateLink](#generatelink) - Generate OTP link

## requestCode

Generate an OTP code and queue the message to the provided chatId.

### Example Usage: request

<!-- UsageSnippet language="typescript" operationID="otp-requestCode" method="post" path="/otp/v2/{otpInstance}/request-code" example="request" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.otp.requestCode({
    chatId: "20123456789@c.us",
    length: 6,
    useLetter: false,
    useNumber: true,
    allCapital: false,
    name: "hypersender",
    expires: 1800,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { otpRequestCode } from "hypersender/funcs/otp-request-code.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await otpRequestCode(hypersender, {
    chatId: "20123456789@c.us",
    length: 6,
    useLetter: false,
    useNumber: true,
    allCapital: false,
    name: "hypersender",
    expires: 1800,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("otpRequestCode failed:", res.error);
  }
}

run();
```
### Example Usage: response

<!-- UsageSnippet language="typescript" operationID="otp-requestCode" method="post" path="/otp/v2/{otpInstance}/request-code" example="response" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.otp.requestCode({
    chatId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { otpRequestCode } from "hypersender/funcs/otp-request-code.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await otpRequestCode(hypersender, {
    chatId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("otpRequestCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.RequestCodeRequest](../../models/request-code-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RequestCodeResponse](../../models/request-code-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## validateCode

Validate an OTP code previously generated for a chat.

### Example Usage: request

<!-- UsageSnippet language="typescript" operationID="otp-validateCode" method="post" path="/otp/v2/{otpInstance}/validate-code" example="request" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.otp.validateCode({
    chatId: "20123456789@c.us",
    code: "439713",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { otpValidateCode } from "hypersender/funcs/otp-validate-code.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await otpValidateCode(hypersender, {
    chatId: "20123456789@c.us",
    code: "439713",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("otpValidateCode failed:", res.error);
  }
}

run();
```
### Example Usage: response

<!-- UsageSnippet language="typescript" operationID="otp-validateCode" method="post" path="/otp/v2/{otpInstance}/validate-code" example="response" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.otp.validateCode({
    chatId: "<id>",
    code: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { otpValidateCode } from "hypersender/funcs/otp-validate-code.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await otpValidateCode(hypersender, {
    chatId: "<id>",
    code: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("otpValidateCode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ValidateCodeRequest](../../models/validate-code-request.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ValidateCodeResponse](../../models/validate-code-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## generateLink

Generate an OTP link for the chat; returns a short code and a whatsapp link template.

### Example Usage: request

<!-- UsageSnippet language="typescript" operationID="otp-generateLink" method="post" path="/otp/v2/{otpInstance}/generate-link" example="request" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.otp.generateLink({
    chatId: "20123456789@c.us",
    expires: 1800,
    name: "Hypersender",
    message: {
      prompt: "Send me my Hypersender link",
      success: "Here is your link: {link}",
      failed: "Login failed, please try again later.",
      expired: "The link has been expired, please try another one.",
    },
    callback: {
      success: "https://yourdomain.com/callback/success",
      failed: "https://yourdomain.com/callback/failed",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { otpGenerateLink } from "hypersender/funcs/otp-generate-link.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await otpGenerateLink(hypersender, {
    chatId: "20123456789@c.us",
    expires: 1800,
    name: "Hypersender",
    message: {
      prompt: "Send me my Hypersender link",
      success: "Here is your link: {link}",
      failed: "Login failed, please try again later.",
      expired: "The link has been expired, please try another one.",
    },
    callback: {
      success: "https://yourdomain.com/callback/success",
      failed: "https://yourdomain.com/callback/failed",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("otpGenerateLink failed:", res.error);
  }
}

run();
```
### Example Usage: response

<!-- UsageSnippet language="typescript" operationID="otp-generateLink" method="post" path="/otp/v2/{otpInstance}/generate-link" example="response" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.otp.generateLink({
    chatId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { otpGenerateLink } from "hypersender/funcs/otp-generate-link.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  otpInstance: "{{ instance_id }}",
  security: {
    otpApiKey: process.env["HYPERSENDER_OTP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await otpGenerateLink(hypersender, {
    chatId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("otpGenerateLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GenerateLinkRequest](../../models/generate-link-request.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GenerateLinkResponse](../../models/generate-link-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |