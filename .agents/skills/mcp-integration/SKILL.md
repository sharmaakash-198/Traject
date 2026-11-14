---
name: mcp-integration
description: Use when implementing MCP tools/resources or connecting AI agents to workspace operations.
---

# MCP integration
MCP is an adapter, not a second business-logic layer. Reuse application services or authenticated API. Expose narrow typed tools/resources with schema validation, owner authorization, rate limits and audit events. No arbitrary SQL, unrestricted filesystem, secret retrieval or direct provider credentials. Read tools may be broad within the user's own records; writes must be explicit and scoped. Email approval/send are sensitive and cannot be bypassed by MCP. Consider local stdio transport if free hosting cannot support long-lived transport reliably.
