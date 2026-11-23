# hypersender

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *hypersender* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=hypersender&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/hypersender/hypersender). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [hypersender](#hypersender)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

### Lazy operation loading in Node.js

The `/node` entry point and its lazy SDK classes are generated for every SDK. No `gen.yaml` flag is needed; Node.js applications opt in to loading operation functions on first use by changing their import:

```typescript
import { Hypersender } from "hypersender/node";

const sdk = new Hypersender();
```

The `/node` entry point keeps the same method signatures, pagination behaviour, and response helpers. Operation modules load through dynamic imports when a method is called. Models and error classes are shared with the standard entry points, rather than bundled into separate copies.

The standard package entry point and SDK subpaths retain their static imports. Keep using those entry points in browser bundles, including IIFE and UMD builds, to avoid dynamic-import chunks. Custom root exports may still load additional modules.

The Node SDK classes live in `src/sdk/*.lazy.ts`. Custom code regions in the standard SDK classes are not copied to these classes; apply any required customisations to their separate regions. Accept-header enums have the same values, but their enum objects are specific to each entry point.

Generated model schemas are constructed synchronously and cached on first use with either entry point. Importing a model does not construct its schema; parsing or inspecting a schema does. This does not require changing the configured Zod version.

`Object.freeze`, `Object.seal`, and `Object.preventExtensions` construct the schema and apply to the cached Zod object. Zod's own restrictions on frozen schemas still apply, including methods that install properties on first access.
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name               | Type | Scheme      | Environment Variable             |
| ------------------ | ---- | ----------- | -------------------------------- |
| `whatsappApiKey`   | http | HTTP Bearer | `HYPERSENDER_WHATSAPP_API_KEY`   |
| `smsApiKey`        | http | HTTP Bearer | `HYPERSENDER_SMS_API_KEY`        |
| `otpApiKey`        | http | HTTP Bearer | `HYPERSENDER_OTP_API_KEY`        |
| `enterpriseApiKey` | http | HTTP Bearer | `HYPERSENDER_ENTERPRISE_API_KEY` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
  whatsappInstance: "{{ instance_id }}",
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  );

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Enterprise](docs/sdks/enterprise/README.md)

* [getInstanceHealth](docs/sdks/enterprise/README.md#getinstancehealth) - Check Instance Health
* [listInstances](docs/sdks/enterprise/README.md#listinstances) - List Instances
* [createInstance](docs/sdks/enterprise/README.md#createinstance) - Create Instance
* [requestNewQrCode](docs/sdks/enterprise/README.md#requestnewqrcode) - Request New QR Code
* [restartInstance](docs/sdks/enterprise/README.md#restartinstance) - Restart Instance

### [Otp](docs/sdks/otp/README.md)

* [requestCode](docs/sdks/otp/README.md#requestcode) - Request OTP code
* [validateCode](docs/sdks/otp/README.md#validatecode) - Validate OTP code
* [generateLink](docs/sdks/otp/README.md#generatelink) - Generate OTP link

### [Sms](docs/sdks/sms/README.md)

* [sendMessage](docs/sdks/sms/README.md#sendmessage) - Send Message
* [getHeartbeats](docs/sdks/sms/README.md#getheartbeats) - Heartbeats
* [listMessages](docs/sdks/sms/README.md#listmessages) - Index Messages
* [deleteMessage](docs/sdks/sms/README.md#deletemessage) - Delete Message
* [listMessageThreads](docs/sdks/sms/README.md#listmessagethreads) - Message threads
* [editMessageThread](docs/sdks/sms/README.md#editmessagethread) - Edit Message Thread
* [deleteMessageThread](docs/sdks/sms/README.md#deletemessagethread) - Delete Message threads

### [Whatsapp](docs/sdks/whatsapp/README.md)

* [getQueuedRequest](docs/sdks/whatsapp/README.md#getqueuedrequest)
* [sendTextSafe](docs/sdks/whatsapp/README.md#sendtextsafe)
* [sendText](docs/sdks/whatsapp/README.md#sendtext)
* [sendLinkCustomPreview](docs/sdks/whatsapp/README.md#sendlinkcustompreview)
* [sendFile](docs/sdks/whatsapp/README.md#sendfile)
* [sendImage](docs/sdks/whatsapp/README.md#sendimage)
* [sendVideo](docs/sdks/whatsapp/README.md#sendvideo)
* [sendVoice](docs/sdks/whatsapp/README.md#sendvoice)
* [forwardMessage](docs/sdks/whatsapp/README.md#forwardmessage)
* [sendSeen](docs/sdks/whatsapp/README.md#sendseen)
* [readChat](docs/sdks/whatsapp/README.md#readchat)
* [startTyping](docs/sdks/whatsapp/README.md#starttyping)
* [stopTyping](docs/sdks/whatsapp/README.md#stoptyping)
* [sendPoll](docs/sdks/whatsapp/README.md#sendpoll)
* [sendContactCard](docs/sdks/whatsapp/README.md#sendcontactcard)
* [sendLocation](docs/sdks/whatsapp/README.md#sendlocation)
* [reactToMessage](docs/sdks/whatsapp/README.md#reacttomessage)
* [starMessage](docs/sdks/whatsapp/README.md#starmessage)
* [deleteMessage](docs/sdks/whatsapp/README.md#deletemessage)

#### [Whatsapp.Contacts](docs/sdks/contacts/README.md)

* [checkContactExists](docs/sdks/contacts/README.md#checkcontactexists) - Check if contact exists on WhatsApp
* [getAllKnownLids](docs/sdks/contacts/README.md#getallknownlids) - Get all known LID mappings
* [getAllContacts](docs/sdks/contacts/README.md#getallcontacts) - Get all contacts
* [getLidsCount](docs/sdks/contacts/README.md#getlidscount) - Get count of known LID mappings
* [getPhoneNumberByLid](docs/sdks/contacts/README.md#getphonenumberbylid) - Get phone number by LID
* [getContact](docs/sdks/contacts/README.md#getcontact) - Get contact
* [getLidByPhoneNumber](docs/sdks/contacts/README.md#getlidbyphonenumber) - Get LID by phone number
* [getProfilePicture](docs/sdks/contacts/README.md#getprofilepicture) - Get profile picture
* [upsertContact](docs/sdks/contacts/README.md#upsertcontact) - Upsert contact

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`enterpriseCreateInstance`](docs/sdks/enterprise/README.md#createinstance) - Create Instance
- [`enterpriseGetInstanceHealth`](docs/sdks/enterprise/README.md#getinstancehealth) - Check Instance Health
- [`enterpriseListInstances`](docs/sdks/enterprise/README.md#listinstances) - List Instances
- [`enterpriseRequestNewQrCode`](docs/sdks/enterprise/README.md#requestnewqrcode) - Request New QR Code
- [`enterpriseRestartInstance`](docs/sdks/enterprise/README.md#restartinstance) - Restart Instance
- [`otpGenerateLink`](docs/sdks/otp/README.md#generatelink) - Generate OTP link
- [`otpRequestCode`](docs/sdks/otp/README.md#requestcode) - Request OTP code
- [`otpValidateCode`](docs/sdks/otp/README.md#validatecode) - Validate OTP code
- [`smsDeleteMessage`](docs/sdks/sms/README.md#deletemessage) - Delete Message
- [`smsDeleteMessageThread`](docs/sdks/sms/README.md#deletemessagethread) - Delete Message threads
- [`smsEditMessageThread`](docs/sdks/sms/README.md#editmessagethread) - Edit Message Thread
- [`smsGetHeartbeats`](docs/sdks/sms/README.md#getheartbeats) - Heartbeats
- [`smsListMessages`](docs/sdks/sms/README.md#listmessages) - Index Messages
- [`smsListMessageThreads`](docs/sdks/sms/README.md#listmessagethreads) - Message threads
- [`smsSendMessage`](docs/sdks/sms/README.md#sendmessage) - Send Message
- [`whatsappContactsCheckContactExists`](docs/sdks/contacts/README.md#checkcontactexists) - Check if contact exists on WhatsApp
- [`whatsappContactsGetAllContacts`](docs/sdks/contacts/README.md#getallcontacts) - Get all contacts
- [`whatsappContactsGetAllKnownLids`](docs/sdks/contacts/README.md#getallknownlids) - Get all known LID mappings
- [`whatsappContactsGetContact`](docs/sdks/contacts/README.md#getcontact) - Get contact
- [`whatsappContactsGetLidByPhoneNumber`](docs/sdks/contacts/README.md#getlidbyphonenumber) - Get LID by phone number
- [`whatsappContactsGetLidsCount`](docs/sdks/contacts/README.md#getlidscount) - Get count of known LID mappings
- [`whatsappContactsGetPhoneNumberByLid`](docs/sdks/contacts/README.md#getphonenumberbylid) - Get phone number by LID
- [`whatsappContactsGetProfilePicture`](docs/sdks/contacts/README.md#getprofilepicture) - Get profile picture
- [`whatsappContactsUpsertContact`](docs/sdks/contacts/README.md#upsertcontact) - Upsert contact
- [`whatsappDeleteMessage`](docs/sdks/whatsapp/README.md#deletemessage)
- [`whatsappForwardMessage`](docs/sdks/whatsapp/README.md#forwardmessage)
- [`whatsappGetQueuedRequest`](docs/sdks/whatsapp/README.md#getqueuedrequest)
- [`whatsappReactToMessage`](docs/sdks/whatsapp/README.md#reacttomessage)
- [`whatsappReadChat`](docs/sdks/whatsapp/README.md#readchat)
- [`whatsappSendContactCard`](docs/sdks/whatsapp/README.md#sendcontactcard)
- [`whatsappSendFile`](docs/sdks/whatsapp/README.md#sendfile)
- [`whatsappSendImage`](docs/sdks/whatsapp/README.md#sendimage)
- [`whatsappSendLinkCustomPreview`](docs/sdks/whatsapp/README.md#sendlinkcustompreview)
- [`whatsappSendLocation`](docs/sdks/whatsapp/README.md#sendlocation)
- [`whatsappSendPoll`](docs/sdks/whatsapp/README.md#sendpoll)
- [`whatsappSendSeen`](docs/sdks/whatsapp/README.md#sendseen)
- [`whatsappSendText`](docs/sdks/whatsapp/README.md#sendtext)
- [`whatsappSendTextSafe`](docs/sdks/whatsapp/README.md#sendtextsafe)
- [`whatsappSendVideo`](docs/sdks/whatsapp/README.md#sendvideo)
- [`whatsappSendVoice`](docs/sdks/whatsapp/README.md#sendvoice)
- [`whatsappStarMessage`](docs/sdks/whatsapp/README.md#starmessage)
- [`whatsappStartTyping`](docs/sdks/whatsapp/README.md#starttyping)
- [`whatsappStopTyping`](docs/sdks/whatsapp/README.md#stoptyping)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `whatsappInstance` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getQueuedRequest`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.
Global parameters can also be set via environment variable.

| Name             | Type   | Description                     | Environment                   |
| ---------------- | ------ | ------------------------------- | ----------------------------- |
| whatsappInstance | string | The whatsappInstance parameter. | HYPERSENDER_WHATSAPP_INSTANCE |
| smsInstance      | string | The smsInstance parameter.      | HYPERSENDER_SMS_INSTANCE      |
| otpInstance      | string | The otpInstance parameter.      | HYPERSENDER_OTP_INSTANCE      |

### Example

```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  smsInstance: "<value>",
  otpInstance: "<value>",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  );

  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  );

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`HypersenderError`](./src/models/errors/hypersender-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Hypersender } from "hypersender";
import * as errors from "hypersender/models/errors";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  try {
    const result = await hypersender.whatsapp.getQueuedRequest(
      "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
    );

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.HypersenderError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.NotFoundError) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`HypersenderError`](./src/models/errors/hypersender-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (17)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`HypersenderError`](./src/models/errors/hypersender-error.ts)**:
* [`ServerError`](./src/models/errors/server-error.ts): Internal Server Error. Status code `500`. Applicable to 27 of 43 methods.*
* [`ValidationError`](./src/models/errors/validation-error.ts): Validation Error. Status code `422`. Applicable to 25 of 43 methods.*
* [`NotFoundError`](./src/models/errors/not-found-error.ts): Status code `404`. Applicable to 21 of 43 methods.*
* [`ErrorT`](./src/models/errors/error-t.ts): Applicable to 7 of 43 methods.*
* [`EnterpriseNotFoundError`](./src/models/errors/enterprise-not-found-error.ts): Instance not found. Status code `404`. Applicable to 3 of 43 methods.*
* [`EnterpriseValidationError`](./src/models/errors/enterprise-validation-error.ts): Validation Error. Status code `422`. Applicable to 1 of 43 methods.*
* [`EnterpriseGetInstanceHealthTooManyRequestsError`](./src/models/errors/enterprise-get-instance-health-too-many-requests-error.ts): Rate limit exceeded. Status code `429`. Applicable to 1 of 43 methods.*
* [`EnterpriseCreateInstanceTooManyRequestsError`](./src/models/errors/enterprise-create-instance-too-many-requests-error.ts): Rate limit exceeded. Status code `429`. Applicable to 1 of 43 methods.*
* [`EnterpriseRequestNewQrCodeTooManyRequestsError`](./src/models/errors/enterprise-request-new-qr-code-too-many-requests-error.ts): Rate limit exceeded. Status code `429`. Applicable to 1 of 43 methods.*
* [`EnterpriseRestartInstanceTooManyRequestsError`](./src/models/errors/enterprise-restart-instance-too-many-requests-error.ts): Rate limit exceeded. Status code `429`. Applicable to 1 of 43 methods.*
* [`InternalServerError`](./src/models/errors/internal-server-error.ts): Failed to restart instance. Status code `500`. Applicable to 1 of 43 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  serverURL: "https://app.hypersender.com/api",
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.getQueuedRequest(
    "a0816120-7e37-4e8b-8cf3-92deb2cdc133",
  );

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Hypersender } from "hypersender";
import { ProxyAgent } from "undici";
import { HTTPClient } from "hypersender/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Hypersender({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Hypersender } from "hypersender";

const sdk = new Hypersender({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `HYPERSENDER_DEBUG` to `true`, `1`, `yes` or `on` (case-insensitive). Any other value leaves it off.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=hypersender&utm_campaign=typescript)
