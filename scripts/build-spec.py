"""Merge the per-product Hypersender specs (openapi/src/*.json, copied from docs-v2) into openapi/hypersender.json.

- Paths get their product's base path (/whatsapp/v2, /sms/v1, ...) so they don't clash and share one server.
- Each product gets its own API key, and its own client-level instance option (except enterprise, which
  manages many instances and takes `instance` per call).
- Component names that clash with a different definition get the product as a prefix.

Usage: python3 scripts/build-spec.py
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SERVER = "https://app.hypersender.com/api"

# product: (sdk group, instance param name or None for per-call)
PRODUCTS = {
    "whatsapp": ("whatsapp", "whatsappInstanceId"),
    "sms": ("sms", "smsInstanceId"),
    "otp": ("otp", "otpInstanceId"),
    "enterprise": ("enterprise", None),
}
SUBGROUPS = {("whatsapp", "Contacts"): "whatsapp.contacts"}
NAME_OVERRIDES = {
    "heartbeats": "getHeartbeats",
    "index-messages": "listMessages",
    "message-threads": "listMessageThreads",
}
METHODS = {"get", "post", "put", "patch", "delete"}


def rename_refs(node, section, renames):
    """Point $refs at renamed components."""
    if isinstance(node, dict):
        ref = node.get("$ref")
        prefix = f"#/components/{section}/"
        if isinstance(ref, str) and ref.startswith(prefix) and ref[len(prefix):] in renames:
            node["$ref"] = prefix + renames[ref[len(prefix):]]
        for v in node.values():
            rename_refs(v, section, renames)
    elif isinstance(node, list):
        for v in node:
            rename_refs(v, section, renames)


def camel(op_id):
    first, *rest = op_id.split("-")
    return first + "".join(w[:1].upper() + w[1:] for w in rest)


def main():
    merged = {
        "openapi": "3.1.0",
        "info": {"title": "Hypersender API", "version": "2.0.0"},
        "servers": [{"url": SERVER}],
        "security": [],
        "paths": {},
        "components": {"securitySchemes": {}},
    }

    for product, (group, instance_name) in PRODUCTS.items():
        spec = json.loads((ROOT / "openapi" / "src" / f"{product}.json").read_text())
        base = spec["servers"][0]["url"]
        assert base.startswith(SERVER), base
        prefix = base[len(SERVER):]

        # Components: keep identical duplicates, prefix differing ones.
        for section, items in spec.get("components", {}).items():
            if section == "securitySchemes":
                continue
            target = merged["components"].setdefault(section, {})
            renames = {}
            for name, value in items.items():
                if name in target and target[name] != value:
                    renames[name] = product.capitalize() + name
            rename_refs(spec, section, renames)
            for name, value in items.items():
                target[renames.get(name, name)] = value

        scheme = f"{product}ApiKey"
        merged["components"]["securitySchemes"][scheme] = {"type": "http", "scheme": "bearer"}
        merged["security"].append({scheme: []})

        for path, item in spec["paths"].items():
            new_path = prefix + path
            if instance_name:
                new_path = new_path.replace("{instance}", "{" + instance_name + "}")
            assert new_path not in merged["paths"], new_path
            for method, op in item.items():
                if method not in METHODS:
                    continue
                op["security"] = [{scheme: []}]
                op["x-speakeasy-group"] = SUBGROUPS.get((product, (op.get("tags") or [""])[0]), group)

                # Unique operationIds across products (sms deleteMessage vs whatsapp deleteMessage),
                # while the SDK method keeps the plain name.
                op_id = op["operationId"]
                op["x-speakeasy-name-override"] = NAME_OVERRIDES.get(op_id) or camel(op_id)
                op["operationId"] = f"{product}-{op_id}"

                # Some GETs carry an empty body from the Postman export; real bodies are all required.
                body = op.get("requestBody")
                if body is not None:
                    if not any(c.get("schema") for c in body.get("content", {}).values()):
                        del op["requestBody"]
                    else:
                        body["required"] = True

            if instance_name:
                for op in [item] + [item[m] for m in item if m in METHODS]:
                    params = op.get("parameters", [])
                    for i, p in enumerate(params):
                        if p.get("$ref", "").startswith("#/components/parameters/"):
                            p = merged["components"]["parameters"][p["$ref"].rsplit("/", 1)[1]]
                        if p.get("name") == "instance" and p.get("in") == "path":
                            params[i] = {**p, "name": instance_name}
            merged["paths"][new_path] = item

    out = ROOT / "openapi" / "hypersender.json"
    out.write_text(json.dumps(merged, indent=2, ensure_ascii=False) + "\n")

    ops = sum(1 for item in merged["paths"].values() for m in item if m in METHODS)
    leftover = [p for p in merged["paths"] if re.search(r"\{instance\}", p) and not p.startswith("/whatsapp/v2/{instance}/")]
    print(f"wrote {out.relative_to(ROOT)}: {ops} operations, {len(merged['paths'])} paths")
    assert not leftover, leftover


if __name__ == "__main__":
    main()
