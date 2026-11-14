# Deployment runbook (not yet activated)

1. Validate local app, tests, migrations, OAuth and LaTeX feasibility.
2. Create separate production Supabase project; configure private buckets, auth owner and backups/export.
3. Deploy API to Render Free with secrets configured; account for cold start, 512 MB RAM and ephemeral disk.
4. Deploy static web app to Cloudflare Pages; set API base URL.
5. Configure HTTPS origins, OAuth redirect URI, CORS and Supabase auth URLs.
6. Verify login, authorization, storage privacy, health, backup and restore from a second device.
7. Do not deploy until auth is implemented and security checks pass.

Free-tier availability and limits can change. Never store durable user data on Render filesystem.
