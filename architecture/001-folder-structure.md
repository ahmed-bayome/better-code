````md
# Feature-Based File System

Organize the application by **features**, not by technical layers.

The goal is to keep everything belonging to a feature close together and prevent the codebase from becoming scattered across global `components`, `utils`, `services`, and `hooks` directories.

```text
app/
  home/
    page.tsx
    loading.tsx

core/
  app-layout/
  global.css

shared/
  components/
  utils/
  services/

features/
  home/
    index.tsx
    api.ts
    components/
      ...
    utils/
      ...
````

## Rules

### 1. `app/` is the Next.js routing layer

`app/` contains Next.js route files and should remain thin.

Use it for framework conventions such as:

```text
page.tsx
loading.tsx
error.tsx
layout.tsx
```

`page.tsx` is responsible for route-level concerns such as:

* Data fetching
* Passing data to the feature
* SEO metadata
* Route configuration

The actual feature implementation belongs in `features/`.

```tsx
import { Home } from "@/features/home"

const HomePage = async ()=> {
  const homeData = await getHomeData()
  return <Home homeData={homeData} />
};

export default HomePage;
```

### 2. `features/` owns product functionality

Each feature owns its implementation.

```text
features/
  home/
    index.tsx 
    api.ts
    components/
    utils/
```

Do not spread a feature across global directories.

Bad:

```text
components/
  home-hero.tsx

utils/
  home-utils.ts

services/
  home-service.ts
```

Good:

```text
features/
  home/
    components/
      home-hero.tsx
    utils/
      ...
    api.ts
```

### 3. Feature folders are not templates

Do not create `utils/`, `types.ts`, `hooks/`, `services/`, etc. just because a feature might need them later.

Create files and folders only when they are actually needed.

```text
features/
  home/
    index.tsx
    api.ts
    components/
```

is preferable to:

```text
features/
  home/
    index.tsx
    api.ts
    types.ts
    hooks/
    utils/
    services/
    constants/
```

when most of those folders are empty or unnecessary.

### 4. `index.tsx` is the feature's main entry point

The feature should expose its intended public API through `index.tsx`.

```tsx
export {  Home } from "./components/home"
export { HomeSkeleton } from "./components/home-skeleton"
```

Consumers should generally import from the feature:

```tsx
import { Home } from "@/features/home"
```

rather than reaching into its internal implementation:

```tsx
import Home from "@/features/home/components/home"
```

### 5. Loading UI follows Next.js boundaries

`loading.tsx` belongs in `app/` because it is a Next.js route convention.

Feature-specific loading UI belongs in the feature.

```text
app/
  home/
    loading.tsx

features/
  home/
    components/
      home-skeleton.tsx
```

The route loading file can consume the feature's loading component:

```tsx
import { HomeSkeleton } from "@/features/home"

export default function Loading() {
  return <HomeSkeleton />
}
```

### 6. `shared/` is only for genuinely shared code

Code belongs in `shared/` only when it is actually shared across multiple features.

Do not put something in `shared/` because it *might* be reused later.

```text
shared/
  components/
  utils/
  services/
```

YAGNI applies here: **no premature sharing.**

### 7. `core/` contains application infrastructure

`core/` contains code that belongs to the application itself rather than to a specific feature.

Examples:

```text
core/
  app-layout/
  global.css
```

Do not use `core/` as another dumping ground for generic utilities or feature code.

## Principle

> **Organize code around what the application does, not what type of code it is.**

A feature should be understandable and maintainable by looking primarily inside its own directory.

The filesystem should describe what actually exists, not what might exist in the future.
