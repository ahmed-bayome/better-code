# No default exports (unless the framework requires them)

Use named exports everywhere by default. Named exports are easier to grep, refactor, and auto-import correctly.

## Framework-required exceptions (Next.js App Router)

- `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `template.tsx` — Next.js requires a default export.
- `middleware.ts` — requires a default export.
- `next.config.js`, `tailwind.config.ts`, and other tool config files — requires a default (or `module.exports`) per that tool's convention.

## Explicitly NOT an exception

- `route.ts` (Route Handlers) — these use **named** exports only (`GET`, `POST`, `PUT`, etc.), never a default export. Don't reach for `export default` here.
- Everything in `components/`, `hooks/`, `services/`, `utils/`, `types/` — always named exports.
