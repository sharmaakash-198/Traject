---
name: gmail-email-safety
description: Use when implementing Gmail OAuth, sync, email drafts, approval or sending.
---

# Gmail and email safety
Use Gmail API through server-side adapter. Validate OAuth state; encrypt refresh tokens; keep secrets out of frontend and logs. Start with narrow scopes and validate Google verification/testing-token rules early. Sync only app-sent messages and relevant replies by default. Store Gmail message/thread IDs and sync cursor. Email generation returns structured draft data; fixed signature is application-owned. Require explicit approval bound to exact recipient, subject, body and attachment IDs/checksums. Any edit invalidates approval. Handle uncertain send outcomes by reconciliation; never blindly retry. No automatic follow-up or autonomous send.
