# Options object over positional params

A function taking more than 2 positional params takes a single options object instead.

```ts
// avoid
const createUser = (name: string, email: string, role: string, isActive: boolean) => { ... };

// good
type CreateUserOptions = {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
};
const createUser = ({ name, email, role, isActive }: CreateUserOptions) => { ... };
```

2 or fewer params stay positional — don't wrap `(id: string, value: number)` in an object just to satisfy the letter of the rule.

## Scope note

React components already take a single `props` object by convention, so this rule doesn't add anything new there — it mainly targets plain functions, hooks, and service methods.

## Exception

- Route Handler signatures (`(request: Request, context: { params }) => ...`) are fixed by Next.js — not under your control, leave as-is.
