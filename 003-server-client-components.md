# Server and Client Components

Everything is a Server Component. `"use client"` is the exception, and it must be justified.

## Rules

### 1. Server by default

Do not add `"use client"` to a file unless the component actually needs one of:

* An event handler (`onClick`, `onChange`, `onSubmit`)
* State or lifecycle (`useState`, `useEffect`, `useReducer`, `useRef`)
* A browser API (`window`, `localStorage`, `IntersectionObserver`)
* A client-only library (most animation, charting, and map libraries)

If the component only renders data, it stays a Server Component.

### 2. Push `"use client"` to the leaves

`"use client"` marks a boundary, not a file. Everything imported below it also ships to the browser.

Bad — one button turns the whole page into client code:

```tsx
"use client"

export const Home = ({ projects }: { projects: Project[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <section>
      <ProjectList projects={projects} />
      <button onClick={() => setOpen(true)}>Filter</button>
    </section>
  )
}
```

Good — only the interactive part is a Client Component:

```tsx
// features/home/components/home.tsx  (Server Component)
import { FilterButton } from "./filter-button"

export const Home = ({ projects }: { projects: Project[] }) => (
  <section>
    <ProjectList projects={projects} />
    <FilterButton />
  </section>
)
```

```tsx
// features/home/components/filter-button.tsx
"use client"

export const FilterButton = () => {
  const [open, setOpen] = useState(false)
  return <button onClick={() => setOpen(true)}>Filter</button>
}
```

### 3. Never make a component client just to use a hook

Extract the hook and the markup it drives into its own component. Do not promote the parent.

### 4. Data fetching stays on the server

Fetch in `page.tsx` (see `001-folder-structure.md`) or in a Server Component. Pass the result down as props.

```tsx
// Good
const HomePage = async () => {
  const projects = await getProjects()
  return <Home projects={projects} />
}
```

```tsx
// Bad
"use client"

export const Home = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects().then(setProjects)
  }, [])
  // ...
}
```

`useEffect` is not a data fetching tool. Use it only for real browser side effects.

### 5. Props crossing the boundary must be serializable

A Server Component can pass strings, numbers, plain objects, arrays, and Server Actions to a Client Component. It cannot pass functions, class instances, `Date`-heavy graphs from an ORM, or anything else that does not serialize.

If a prop will not cross, the boundary is in the wrong place.

### 6. Compose, do not import, across the boundary

A Client Component cannot import a Server Component. It can accept one as `children` or as a prop.

```tsx
// Good — client shell, server content
<ClientAccordion>
  <ServerProjectList projects={projects} />
</ClientAccordion>
```

```tsx
// Bad
"use client"
import { ServerProjectList } from "./server-project-list"
```

### 7. Anything imported into a Client Component ships to the browser

Never import server-only code — database clients, secret keys, private API wrappers — from a file that is reachable from `"use client"`.

Mark server-only modules so a mistake fails at build time instead of leaking:

```ts
// features/home/api.ts
import "server-only"

export const getProjects = async () => {
  // ...
}
```

Only `NEXT_PUBLIC_*` environment variables may be read in client code.

### 8. Server state is server state

Do not mirror fetched data into client state to "have it available". Read it from props. Client state is for things the server does not know: open/closed, focus, drafts, optimistic updates.

### 9. Mutations use Server Actions

Mutate through a Server Action rather than a client `fetch` to a route handler, unless an external caller needs the endpoint.

```ts
// features/home/api.ts
"use server"

export const createProject = async (formData: FormData) => {
  // validate, then write
}
```

Validate the input inside the action. A Server Action is a public endpoint; its argument types are a compile-time claim, not a runtime guarantee.

## Core rule

> **`"use client"` is a cost, not a default. Pay it at the smallest component that needs it.**
