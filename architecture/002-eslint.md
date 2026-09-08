Add this under the filesystem rules:

## Aliases

Use path aliases to make architectural boundaries explicit.

- `@` is reserved for `core/`, `features/` and `shared/`.

Examples:

```tsx
import { AppLayout } from "@core/app-layout"
import { Button } from "@shared/components/button"
// in app/home/page.tsx
import { Home } from "@features/home"
```

- A feature can NOT import from another feature 
