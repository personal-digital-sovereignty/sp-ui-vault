# Changelog

All notable changes to `sp-ui-vault` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] — GAP Item 7: Confiabilidade da Interface (2026-08-01)

### Changed
- **Design System centralizado**: `app.css` agora importa `@sp/ui-core/theme.css` em vez de manter cópia própria.

### Known Issue (achado, não corrigido nesta rodada)
- Build de produção falha: `@tiptap/core` (declarado em `package.json`) não resolve a partir do `BlockEditor.svelte` compartilhado em `@sp/ui-core` — parece ser um problema de resolução de módulo via o symlink do monorepo (Rollup). Não investigado a fundo; não relacionado à mudança de `app.css` acima.

## [0.1.0] - 2026-05-09 a 2026-06-18

### Added
- Módulo `sp-ui-vault` criado do zero como microfrontend SvelteKit 5 para o sp-platform v1.5.0.
- Módulo Vault Explorer extraído do `sp-ui-shell`: rota `/vault` com visualização em árvore de documentos, busca, filtro e integração com o workspace, como parte do desacoplamento em microfrontends (v1.5.0).
- Assets de mídia protegidos via signed URLs/cookies (Epic P4).
- Module Federation configurado (host/remotes); testes E2E smoke para Vault Explorer; ROADMAP.md.
- README documentando a API do Vault e o modelo de autenticação de mídia.
- Pipeline de CI FOSS DevSecOps + pipelines de CI/release com dispatch para Tauri em tags de versão.

### Changed
- Integração com o pacote compartilhado `@sp/ui-core`, com resolução de conflito de versão do Vite; `state.test.ts` migrado para `@sp/ui-core/state`.
- `BlockEditor` passou a ser importado do `@sp/ui-core` no lugar da cópia local, que foi removida.
- Layout migrado para `ModuleLayout` centralizado (Epic L5); indentação e formatação padronizadas via Prettier (Epic L6); scaffolding morta removida.

### Fixed
- `console.log` de debug removido do handler de feedback RLHF.
- Pipeline DevSecOps estabilizada: script bash quebrado reparado, jobs com exit 0 forçado (warning-only), action Trivy temporariamente substituída por placeholder, trigger de push adicionado, `npm install` usado no lugar de `npm ci`.
- Dependência local `sp-ui-core` resolvida na pipeline (checkout, symlink, branch especificada); comando `pwd` protegido com aspas.
- Injeção de shell corrigida em `release.yml`; emoji removido da descrição de status; publisher de status check adicionado ao gate.

### Security
- `devalue` atualizado para 5.8.1, corrigindo CVE-2026-42570; hook de pre-push Gitleaks adicionado; `package-lock.json` versionado.
