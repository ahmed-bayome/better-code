src/
├── app/            # Next.js App Router pages and layouts
├── shared/
├──| components/
├──| hooks/
|--| utils
├── features/       # Feature modules
│   ├── [feature-name]/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
└── types/          # Global types
└── services/       # Services providers ex: Supabase etc..

Authentication Feature
features/auth/
├── components/
│   ├── sign-in.tsx
│   ├── sign-up.tsx
├──-|.  loading.tsx // and all NextJS route stuff like error etc
│   └── index.ts
├── hooks/
│   ├── use-auth.ts
│   └── index.ts
├── services/
│   ├── auth.ts
│   └── index.ts
├── types/
│   ├── auth.types.ts
│   └── index.ts
└── index.ts // the main import place for app/[routes]

Each subdirectory has an index.ts file that exports only what should be publicly available:

// features/auth/components/index.ts
export * from '~/sign-in';
export * from '~/sign-up';
// Internal components are not exported
The main feature index.ts then re-exports from these subdirectories:

// features/[fearure-name]/index.ts
export * from '~/components';
export * from '~/hooks';
export * from '~/services';
export * from '~/types';
Shared Code

There are ONE place for shared code:
/shared/[whatever]: Truly universal UI components like buttons, inputs, and cards

Practical Example: Authentication Flow
Let's see how components, hooks, and services work together within a feature: