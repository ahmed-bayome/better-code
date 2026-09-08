# Mindset

## Do Not Invent Abstractions

Prefer simple, direct code.

Do not create abstractions, utility layers, wrapper components, helper classes,
or design systems unless there is a clear, repeated need for them.

Do not abstract something merely because it can be abstracted.

If an abstraction makes the code harder to understand, locate, modify, or reuse,
do not create it.

## No Tailwind Abstraction

Do not create custom utility classes by combining Tailwind classes.

Do not create utility classes for individual elements or components.

Write Tailwind classes directly on the element.

Do not create a new class name when the same result can be expressed directly
with existing Tailwind utilities.

Avoid building large collections of custom Tailwind classes.

## No Cleverness

The simplest conventional solution is preferred over a clever or generalized
solution.

Code should be understandable by looking at the file where it is used.