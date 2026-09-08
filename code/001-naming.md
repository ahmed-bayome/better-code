## Naming Rules

### 1. Files use kebab-case

All filenames and folders use kebab-case.

`project-card.tsx`
`hero-section.tsx`
`language-selector.ts`
`format-date.ts`

Never use PascalCase, camelCase, snake_case, or arbitrary abbreviations for filenames.

### 2. Components use PascalCase

React component names remain PascalCase:

`ProjectCard`
`HeroSection`
`LanguageSelector`

### 3. Functions and variables use camelCase

`getProject`
`projectImages`
`handleUpload`
`isLoading`

### 4. Name things by what they are

Avoid generic names:

`utils`
`helpers`
`manager`
`processor`
`handler`

Prefer names describing the actual concept:

`project-gallery`
`image-uploader`
`language-selector`

### 5. Do not invent abbreviations

Prefer:

`projectImages`
`projectImage`
`language`
`authentication`

Avoid:

`projImgs`
`projImg`
`lang`
`auth`

Common, universally understood abbreviations are acceptable when genuinely standard.

### 6. Keep naming predictable

Similar things should follow the same pattern.

`project-card`
`product-card`
`brand-card`

Not:

`project-card`
`product-tile`
`brand-item`

### 7. Avoid redundant names

Do not repeat information already provided by the surrounding context.

`ProjectCard` is better than `ProjectCardComponent`.

`getProject()` is better than `getProjectData()` when the function already clearly returns a project.

### 8. Do not name things after implementation details

Avoid:

`supabase-project-fetcher`
`tailwind-project-card`
`cached-project-list`

Prefer:

`get-projects`
`project-card`
`project-list`

### 9. No "smart" naming systems

Do not introduce arbitrary prefixes, suffixes, numbering systems, or cryptic naming conventions.

The naming system should be understandable without documentation.

### Core rule

**Use the simplest accurate name. If the name requires a naming dictionary to understand, it is too complicated.**
