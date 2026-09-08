## Functions

* Always use arrow functions. Never use traditional `function` declarations.
* Avoid default exports unless required by the framework.
* Functions should have no more than 2 positional parameters.
* If more than 2 parameters are needed, use a single options object.

```ts
// Good
export const getUser = (id: string, includePosts: boolean) => {
  // ...
};

// Good — use an options object for 3+ parameters
export const createUser = ({
  name,
  email,
  role,
}: {
  name: string;
  email: string;
  role: string;
}) => {
  // ...
};

// Bad
export function createUser(
  name: string,
  email: string,
  role: string
) {
  // ...
}

// Bad
export default createUser;
```
