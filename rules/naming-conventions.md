# Naming conventions

## Files

- `kebab-case` for all filenames: `sign-in.tsx`, `use-auth.ts`, `auth.types.ts`.
- Type files end in `.types.ts` (e.g. `auth.types.ts`).
- Barrel files are always `index.ts`.
- Next.js special files keep their required names as-is: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, `middleware.ts`.

## Exports

- Components: `PascalCase` (`SignIn`, `UserCard`), even though the file is kebab-case.
- Hooks: `camelCase`, prefixed with `use` (`useAuth`, `useUserCard`).
- Plain functions / services / utils: `camelCase` (`createUser`, `formatDate`).
- Types and interfaces: `PascalCase` (`CreateUserOptions`, `AuthState`).
- Constants: `SCREAMING_SNAKE_CASE` only for true global constants (`MAX_RETRIES`); otherwise `camelCase`.

## Directories

- Feature folders: `kebab-case`, singular or plural to match domain language (`auth/`, `user-settings/`).
- Standard subfolders inside a feature: `components/`, `hooks/`, `services/`, `types/` (see [folder-architecture.md](../folder-architecture.md)).

## Exception

- `route.ts` exports (`GET`, `POST`, `PUT`, ...) are `SCREAMING_CASE` because Next.js requires those exact names — not a violation of the camelCase function rule.
