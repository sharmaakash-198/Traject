# API conventions

- Base path `/api/v1`; JSON request/response.
- Success returns resource data; errors use `{ "error": { "code": "...", "message": "..." } }`.
- Validate request params, query and body with Zod.
- Pagination uses `limit` and opaque `cursor` (document per endpoint).
- Use ISO-8601 UTC timestamps.
- Use idempotency keys for side-effecting operations such as email send.
- Document all endpoints in OpenAPI; shared schemas live in packages/validation and packages/api-contracts.
