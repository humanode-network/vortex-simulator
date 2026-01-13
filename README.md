# Vortex Experimental Mockups

This repo ships:

1. A React UI mockup of Vortex (Humanode governance hub)
2. An off-chain “simulation backend” served from `/api/*` (API handlers)

Humanode mainnet is used only as a read-only eligibility gate; all simulated governance state lives off-chain.

## Stack

- React with React Router
- Rsbuild
- Tailwind v4 (via PostCSS) + token-driven CSS (`src/styles/base.css`)
- Yarn (Node version: `.node-version`)
- API handlers in `api/` + Postgres via Drizzle
- `db/` – Drizzle schema + migrations + seed builders
- `scripts/` – DB seed/clear + local API runner
- `prolog/vortexopedia.pl` – Prolog glossary mirror
- `public/landing/` – landing page assets (see `public/landing/README.md`)

## Shared Patterns

- **Hints**: `HintLabel` for inline glossary popups; `PageHint` for page-level help overlays.
- **Search**: `SearchBar` component standardizes the search row across pages.
- **Status/Stage bars**: proposal pages share a stage bar for Draft → Pool → Chamber vote → Formation.

## Notes

- `dist/` is generated build output.
- Keep glossary entries in sync between `src/data/vortexopedia.ts` and `prolog/vortexopedia.pl` if you edit definitions.
- DB-backed dev requires `DATABASE_URL` + `yarn db:migrate && yarn db:seed` (see `docs/simulation/vortex-simulation-local-dev.md`).
