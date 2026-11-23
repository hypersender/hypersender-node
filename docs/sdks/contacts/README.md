# Whatsapp.Contacts

## Overview

### Available Operations

* [checkContactExists](#checkcontactexists) - Check if contact exists on WhatsApp
* [getAllKnownLids](#getallknownlids) - Get all known LID mappings
* [getAllContacts](#getallcontacts) - Get all contacts
* [getLidsCount](#getlidscount) - Get count of known LID mappings
* [getPhoneNumberByLid](#getphonenumberbylid) - Get phone number by LID
* [getContact](#getcontact) - Get contact
* [getLidByPhoneNumber](#getlidbyphonenumber) - Get LID by phone number
* [getProfilePicture](#getprofilepicture) - Get profile picture
* [upsertContact](#upsertcontact) - Upsert contact

## checkContactExists

Verify if a phone number is registered on WhatsApp and get its chatId

### Example Usage: Existing Contact

<!-- UsageSnippet language="typescript" operationID="whatsapp-checkContactExists" method="post" path="/whatsapp/v2/{whatsappInstance}/contacts/check-exists" example="Existing Contact" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.checkContactExists({
    phone: "20123456789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsCheckContactExists } from "hypersender/funcs/whatsapp-contacts-check-contact-exists.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsCheckContactExists(hypersender, {
    phone: "20123456789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsCheckContactExists failed:", res.error);
  }
}

run();
```
### Example Usage: Non-existing Contact

<!-- UsageSnippet language="typescript" operationID="whatsapp-checkContactExists" method="post" path="/whatsapp/v2/{whatsappInstance}/contacts/check-exists" example="Non-existing Contact" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.checkContactExists({
    phone: "20123456789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsCheckContactExists } from "hypersender/funcs/whatsapp-contacts-check-contact-exists.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsCheckContactExists(hypersender, {
    phone: "20123456789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsCheckContactExists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `phone`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Phone number to check (with country code, without + or spaces)                                                                                                                 | 20123456789                                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WhatsappCheckContactExistsResponse](../../models/operations/whatsapp-check-contact-exists-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getAllKnownLids

List the @lid to @c.us mappings already known by the instance.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getAllKnownLids" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/get-all-known-lids" example="Default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getAllKnownLids({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetAllKnownLids } from "hypersender/funcs/whatsapp-contacts-get-all-known-lids.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetAllKnownLids(hypersender, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetAllKnownLids failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WhatsappGetAllKnownLidsRequest](../../models/operations/whatsapp-get-all-known-lids-request.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LidMapping[]](../../models/.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getAllContacts

Retrieve a list of all contacts in the WhatsApp instance with pagination and sorting options.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getAllContacts" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/get-all" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getAllContacts({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetAllContacts } from "hypersender/funcs/whatsapp-contacts-get-all-contacts.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetAllContacts(hypersender, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetAllContacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WhatsappGetAllContactsRequest](../../models/operations/whatsapp-get-all-contacts-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappGetAllContactsResponse](../../models/operations/whatsapp-get-all-contacts-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getLidsCount

Return the number of @lid to @c.us mappings already known by the instance.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getLidsCount" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/get-lids-count" example="Default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getLidsCount();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetLidsCount } from "hypersender/funcs/whatsapp-contacts-get-lids-count.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetLidsCount(hypersender);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetLidsCount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LidCountResponse](../../models/lid-count-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getPhoneNumberByLid

Resolve a linked identifier to its phone-number-based chat ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getPhoneNumberByLid" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/get-phone-number-by-lid" example="Default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getPhoneNumberByLid("1111111@lid");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetPhoneNumberByLid } from "hypersender/funcs/whatsapp-contacts-get-phone-number-by-lid.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetPhoneNumberByLid(hypersender, "1111111@lid");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetPhoneNumberByLid failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `lid`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The linked identifier to resolve. You can send either the full value like 1111111@lid or just the numeric part.                                                                | 1111111@lid                                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.LidMapping](../../models/lid-mapping.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getContact

Retrieve a specific contact by phone number or chat ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getContact" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/get" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getContact("100875997589545@lid");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetContact } from "hypersender/funcs/whatsapp-contacts-get-contact.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetContact(hypersender, "100875997589545@lid");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Phone number (123123123) or chat ID (123123@c.us or 123123@lid)                                                                                                                | 100875997589545@lid                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WhatsappGetContactResponse](../../models/operations/whatsapp-get-contact-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getLidByPhoneNumber

Resolve a phone-number-based chat ID to its linked identifier.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getLidByPhoneNumber" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/get-lid-by-phone-number" example="Default" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getLidByPhoneNumber("3333333@c.us");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetLidByPhoneNumber } from "hypersender/funcs/whatsapp-contacts-get-lid-by-phone-number.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetLidByPhoneNumber(hypersender, "3333333@c.us");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetLidByPhoneNumber failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `phoneNumber`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The phone-number-based identifier to resolve. You can send either the full value like 3333333@c.us or just the numeric part.                                                   | 3333333@c.us                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[models.LidMapping](../../models/lid-mapping.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## getProfilePicture

Retrieve the profile picture URL for a specific contact.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-getProfilePicture" method="get" path="/whatsapp/v2/{whatsappInstance}/contacts/profile-picture" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.getProfilePicture("100875997589545@lid");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsGetProfilePicture } from "hypersender/funcs/whatsapp-contacts-get-profile-picture.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsGetProfilePicture(hypersender, "100875997589545@lid");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsGetProfilePicture failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Phone number (123123123) or chat ID (123123@c.us or 123123@lid)                                                                                                                | 100875997589545@lid                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WhatsappGetProfilePictureResponse](../../models/operations/whatsapp-get-profile-picture-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |

## upsertContact

Update or create a contact in your phone address book and WhatsApp

### Example Usage

<!-- UsageSnippet language="typescript" operationID="whatsapp-upsertContact" method="post" path="/whatsapp/v2/{whatsappInstance}/contacts/upsert" -->
```typescript
import { Hypersender } from "hypersender";

const hypersender = new Hypersender({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await hypersender.whatsapp.contacts.upsertContact({
    chatId: "1234567890@c.us",
    firstName: "John",
    lastName: "Doe",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HypersenderCore } from "hypersender/core.js";
import { whatsappContactsUpsertContact } from "hypersender/funcs/whatsapp-contacts-upsert-contact.js";

// Use `HypersenderCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hypersender = new HypersenderCore({
  whatsappInstance: "{{ instance_id }}",
  security: {
    whatsappApiKey: process.env["HYPERSENDER_WHATSAPP_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await whatsappContactsUpsertContact(hypersender, {
    chatId: "1234567890@c.us",
    firstName: "John",
    lastName: "Doe",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("whatsappContactsUpsertContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpsertContactRequest](../../models/upsert-contact-request.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.WhatsappUpsertContactResponse](../../models/operations/whatsapp-upsert-contact-response.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.NotFoundError           | 404                            | application/json               |
| errors.ValidationError         | 422                            | application/json               |
| errors.ServerError             | 500                            | application/json               |
| errors.HypersenderDefaultError | 4XX, 5XX                       | \*/\*                          |