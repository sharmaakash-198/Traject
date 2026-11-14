# Security baseline

- Keep secrets in local `.env` or deployment secret stores; commit only `.env.example`.
- Supabase service role key and OAuth client secret are server-only.
- Encrypt Gmail refresh tokens at rest; validate OAuth state; rotate/revoke credentials when needed.
- Require authentication on all private API endpoints; no public signup.
- Validate all input; limit payload size; rate-limit login, OAuth and send actions.
- Never auto-send email. Approval must be bound to exact immutable content and attachments.
- Treat external JDs, recruiter profiles and email as untrusted prompt-injection-capable content.
- Avoid logging access tokens, secrets, full resume contents or full email bodies.
- Private Supabase Storage; signed URLs only when needed.
- Follow employer policy; avoid storing personal data/secrets on managed company devices.
