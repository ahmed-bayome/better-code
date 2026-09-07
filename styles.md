The entire idea of Tailwind is that class naming falls apart past 2 divs, so abstracting a class into a utility just makes it worse.

Tailwind has a lot of pre-defined presets, especially for sizing. Using bare pixels like [20px] or weird expressions like [clamp(2342,23,234,2)] defeats the purpose - use normal text-2xl, rounded-2xl, and so on.

Use normal inline Tailwind CSS. Abstraction classes or plain CSS are banned unless:

1. Base global defaults like font or background only.

2. Some animations that require CSS.
