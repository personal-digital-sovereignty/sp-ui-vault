# sp-ui-vault

**Sovereign OS — Knowledge Vault Micro-Frontend**

The document management and knowledge base interface for the Sovereign OS platform. Provides a file system explorer, rich-text document editor, and media viewer backed by the local Markdown vault.

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)]()
[![Svelte](https://img.shields.io/badge/Svelte-5.x-red.svg)](https://svelte.dev/)

---

## Overview

`sp-ui-vault` is the interface for the Sovereign OS knowledge vault — a local file system of Markdown documents, images, PDFs, and other assets stored on the user's machine. The backend (`sp-service`) manages all file I/O and exposes the vault through a REST API with JWT-authenticated media delivery.

### Features

- File explorer: browse the workspace directory tree with real-time updates
- Document editor: dual-mode editing via the shared `BlockEditor` component (WYSIWYG and raw Markdown)
- Debounced autosave: documents are persisted automatically 1.5 seconds after the user stops typing
- Media viewer: authenticated image and PDF rendering without exposing credentials in the DOM
- Workspace management: create and switch between named workspaces
- Context injection: the active document's content is automatically offered as chat context

---

## Media Authentication

Vault media files require authentication. The backend accepts credentials through three channels (in priority order):

1. `Authorization: Bearer <token>` request header
2. `?token=<jwt>` query parameter (used for `<img src>` tags)
3. `sovereign_token` HTTP cookie

The frontend injects the token as a query parameter when constructing `src` attributes for images and embedded files, allowing native browser rendering without JavaScript proxying.

---

## Document API

All vault operations route through `sp-service`:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /v1/vault/fs | List workspace files |
| GET | /v1/vault/fs/:path | Read a document |
| PUT | /v1/vault/fs/:path | Write a document |
| DELETE | /v1/vault/fs/:path | Delete a document |
| GET | /v1/vault/media/:path | Serve authenticated media |

---

## Development

```bash
# Type-check
npm run check -w sp-ui-vault

# Run in isolation (requires sp-service on port 38001)
npm run dev -w sp-ui-vault
```

---

## Project Structure

```
sp-ui-vault/
├── src/
│   ├── routes/
│   │   └── vault/
│   │       └── +page.svelte         # Vault root route
│   └── lib/
│       └── components/
│           ├── FileExplorer.svelte   # Workspace tree navigator
│           ├── MediaViewer.svelte    # Authenticated image/PDF viewer
│           └── VaultToolbar.svelte   # Actions: new, rename, delete
```

The document editor is provided by `@sp/ui-core/components/BlockEditor.svelte` and shared with other modules.

---

## License

PolyForm Noncommercial 1.0.0. See [LICENSE](../LICENSE).

---

**Package:** `sp-ui-vault`  
**Version:** 0.1.0  
**Last updated:** 2026-05-24
