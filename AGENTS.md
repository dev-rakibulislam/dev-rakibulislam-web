# agent.md

## Project

A premium developer portfolio built as a frontend-only Next.js application.

Visual direction: dark black and deep green, restrained, technical, and polished.

Current phase: architectural foundation, application shell, design tokens, typed content
contracts, and a minimal homepage. Do not implement the full portfolio or a backend unless
the task explicitly asks for it.

## Non-negotiable boundaries

- Frontend only.
- Do not add API routes, route handlers, middleware-based APIs, server actions, a database,
  authentication, or backend services.
- Do not add or require environment variables or secrets.
- Do not add fake API endpoints. The contact layer must remain a frontend interface with a
  clearly labelled mock implementation.
- Use the existing package manager (`npm`) and installed dependency versions.
  `package-lock.json` is authoritative. Do not upgrade packages without a concrete reason.
- Do not add a dependency when a small local implementation is sufficient.
- Do not invent personal details, production URLs, email addresses, or project content.
  Keep placeholders clearly marked until the owner provides real content.
- Do not delete unfamiliar assets or in-progress work without checking first.

## Stack

- Next.js 16.3.3 with the App Router
- React 19.2.8
- TypeScript 5 with `strict: true`
- Tailwind CSS 4.3.3 via `@tailwindcss/postcss`
- Geist Sans and Geist Mono via `next/font`
- Biome 2.4.2 for linting and formatting
- Import alias: `@/*` maps to `src/*`

## Commands

```bash
npm run dev          # local development
npm run lint         # biome check, no writes
npm run format       # biome format --write
npx tsc --noEmit     # explicit type check
npm run build        # production build
```

Before reporting work as complete:

1. `npm run lint` must pass.
2. `npx tsc --noEmit` must pass when types or routes change.
3. `npm run build` must pass.
4. Check `/`, a project detail route, and the 404 route.
5. Check keyboard navigation and responsive layouts at 375px, 768px, and desktop widths.

## Source organization

```text
src/app/                  Route files, layouts, metadata, global CSS
src/components/layout/    Header, footer, mobile nav, container
src/components/ui/        Reusable presentational primitives
src/components/sections/  Homepage sections
src/components/projects/  Project-specific UI
src/config/               Site identity, navigation, and other site-level config
src/data/                 Typed static content collections
src/types/                Shared domain contracts
src/lib/                  Small pure helpers
src/hooks/                Client-only reusable hooks
src/providers/            Only add when a real provider exists
src/services/             Frontend-facing service interfaces and mocks
public/images/projects/   Local project imagery
public/icons/             Local icons and marks
```

## React and Next.js rules

- Use Server Components by default.
- Add `"use client"` only to the smallest component that needs event handlers, state,
  effects, browser APIs, or a client-only library.
- Never mark `layout.tsx`, `page.tsx`, or an entire homepage section as a Client Component
  merely for convenience.
- Keep the homepage page file thin: it should compose sections, not contain section markup.
- Use named exports for reusable components. Use default exports only where Next.js requires
  them, such as `page.tsx`, `layout.tsx`, `loading.tsx`, and `not-found.tsx`.
- Use kebab-case file names.
- Use `next/link` for internal navigation and `<a>` for external links.
- In Next.js 16, dynamic route `params` are asynchronous:
  `params: Promise<{ slug: string }>` must be awaited.
- Project pages should use `generateStaticParams` from `src/data/projects.ts`, validate the
  slug, and call `notFound()` for unknown projects.
- Add per-page `metadata` or `generateMetadata`; do not duplicate the root title template.
- Do not instantiate `next/font` outside the root layout.
- Keep `src/providers/app-providers.tsx` deferred until a real client provider is needed.
  A pass-through provider wrapper is unnecessary abstraction.
- Do not create empty placeholder files or directories just to match a proposed tree.
  Add them when they contain real code or assets.

## Components

- Keep components small, cohesive, and focused on one responsibility.
- Put reusable primitives in `src/components/ui`.
- Put page-level compositions in `src/components/sections`.
- Put domain-specific project UI in `src/components/projects`.
- Accept native props where appropriate, for example
  `ComponentPropsWithoutRef<"button">`, and forward `className`.
- Use a small typed class-name helper from `src/lib/utils.ts` for conditional classes.
  Do not add `clsx` or `tailwind-merge` unless there is a demonstrated need.
- Do not use `React.FC`.
- Prefer semantic elements over clickable `div` elements.
- One primary heading per page. Preserve heading order within sections.
- Avoid duplicating the same markup across sections; extract a primitive only when the
  abstraction is genuinely reused.

## Content, data, and types

- Static content collections belong in `src/data`:
  - `projects.ts`
  - `skills.ts`
  - `services.ts`
  - `social-links.ts`
- Site identity belongs in `src/config/site.ts`.
- Navigation belongs in `src/config/navigation.ts`.
- Shared contracts belong in `src/types`, one domain per file:
  - `site.ts`
  - `project.ts`
  - `contact.ts`
- Use typed data and `as const satisfies` where it improves safety without losing literals.
- Do not use `any`. Prefer `unknown` plus narrowing, discriminated unions, and generics.
- Do not hardcode project, skill, service, or social-link collections inside JSX.
- Small one-off presentational labels may live in their section component. Do not create a
  data module solely to wrap a single string.
- Keep personal placeholders centralized in `siteConfig`; do not scatter them across UI.

## Styling

Design tokens live in `src/app/globals.css`:

- Background: `#080D0A`
- Surface: `#111A14`
- Accent: `#22C55E`
- Primary text: `#E5EEE7`
- Secondary text: muted gray-green
- Muted text: darker gray-green
- Border: translucent green-gray

Rules:

- Use the CSS variables and Tailwind utilities. Do not repeat raw palette hex values in
  individual components.
- Use Geist Sans for body copy and Geist Mono for labels, metadata, and technical details.
- Use the shared `Container` component or the `.container-shell` width contract.
- Keep the grid background global through the site shell. Do not recreate it section by
  section.
- The grid must remain subtle and fade toward the edges through the existing mask.
- Avoid unnecessary gradients, glow effects, decorative noise, oversized radii, and visual
  clutter.
- Prefer small radii, thin borders, generous spacing, and restrained hover states.
- Use animations only when they communicate state; respect `prefers-reduced-motion`.
- Do not use inline styles for static design decisions.
- Keep global CSS limited to tokens, resets, shared shell/background behavior, and a few
  genuinely global primitives. Prefer Tailwind utilities inside components.
- The site is dark-only. Do not add a light/dark theme toggle.

## Accessibility

- Use `header`, `nav`, `main`, `section`, and `footer` semantics.
- Add a skip link to the main content and give `main` an `id`.
- Every page needs a meaningful `h1`; section headings should follow a logical hierarchy.
- Icon-only links need an accessible name.
- Use semantic buttons for actions and links for navigation.
- Preserve visible keyboard focus.
- Do not communicate state through color alone.
- External links should use appropriate `rel` values when opening a new tab.
- Mobile navigation must:
  - expose `aria-expanded` and `aria-controls`;
  - close on Escape and route change;
  - return focus to the trigger where appropriate;
  - avoid trapping or losing keyboard focus;
  - keep the underlying page usable when closed.
- Images need meaningful alt text, or empty alt text when purely decorative.

## Sections and navigation

- Section IDs should be stable and match navigation anchors:
  `hero`, `about`, `skills`, `projects`, `services`, `process`, `contact`.
- Only link to sections that currently exist. Do not ship navigation to dead anchors.
- Use `scroll-mt-*` or equivalent spacing when anchored sections need offset below a fixed
  header.
- Implement only the sections requested for the current phase. Do not create empty section
  files just to complete the directory tree.

## Projects

- `src/data/projects.ts` is the single source of truth for project content.
- Project cards should be reusable and render from typed data.
- Project detail pages should be statically generated where possible.
- Unknown slugs must render the 404 flow.
- Use `next/image` for local raster images. Provide dimensions or `fill` correctly, plus
  accessible alt text.
- Do not add stock project imagery that implies work the owner did not do.

## Contact service

`src/services/contact.service.ts` is a frontend-facing adapter, not a backend.

- Export a `ContactService` interface and a clearly labelled mock implementation.
- Model results explicitly, preferably with a discriminated union such as
  `{ ok: true; ... } | { ok: false; error: ... }`.
- Do not use `fetch`, API routes, server actions, environment variables, or secrets.
- Do not import browser-only APIs into Server Components.
- When a real submission provider is chosen later, replace only the adapter implementation;
  keep the UI-facing contract stable.
- The contact form UI is deferred until the contact section is implemented.

## Public assets

- `public/` belongs at the repository root.
- Create `public/images/projects` and `public/icons` only when they contain real assets.
- Do not commit `.gitkeep` files or empty placeholder assets.
- Preserve the existing user-provided media file unless explicitly asked to remove it.
- Prefer local assets and inline SVGs over an icon dependency.

## Definition of done

A task is complete only when:

- The requested scope is implemented without unrelated changes.
- No backend, auth, database, API routes, or server actions were introduced.
- No new environment variables or secrets were introduced.
- No `any` or unnecessary `"use client"` boundaries were added.
- Existing tokens and shared primitives are reused instead of duplicated.
- Lint, type checking, and production builds pass.
- Navigation has no dead links.
- Keyboard and mobile behavior were checked.
- Empty files, unused imports, and unused assets created during the work were removed.
