Feature-based file structure

Still developing this for the Next.js system.

Overall it's dead simple: each feature gets a folder, and inside that folder it gets whatever it needs.

For example:
home/
  index.ts -> the one and only place to call the <Home/> component, exports (NOT default) a component named after the feature
  utils.ts
  hooks.ts
  components/
    some-component.tsx
