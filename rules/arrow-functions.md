# Always arrow functions

Use `const fn = () => {}`, not `function fn() {}` — including components, hooks, services, and route handlers.

```ts
// good
export const useAuth = () => { ... };
export const GET = async (request: Request) => { ... };

// avoid
export function useAuth() { ... }
export async function GET(request: Request) { ... }
```

Default-export files (`page.tsx`, `layout.tsx`, `middleware.ts`, etc.) still work fine as arrows:

```ts
const Page = () => { ... };
export default Page;
```

## Exception

- TypeScript overload signatures need `function` declarations — arrow functions can't express multiple call signatures. Rare; only applies to shared utility types.
