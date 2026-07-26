# Haydeen Portal - Frontend Sandbox

A frontend-only copy of the Haydeen Technologies Portal (our public website),
for design and frontend development work.

This repository contains **no backend code, no infrastructure configuration, and
no credentials**. It is deliberately self-contained so that frontend and design
work can happen without access to production systems, customer data, or secrets.

## Stack

React 18 + TypeScript, built with Vite. Styled with Tailwind CSS and shadcn/ui
(Radix primitives). Routing via Wouter. Forms via react-hook-form + Zod.
Animation via Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build into `dist/public` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | TypeScript check - **must pass before you submit work** |

## Layout

```
client/
  index.html          entry HTML
  vite.config.ts      Vite config (path aliases, build settings)
  src/
    App.tsx           routes
    main.tsx          app entry
    index.css         global styles + CSS custom properties (brand palette)
    pages/            one file (or folder) per route
    components/       ui/, layout/, home/, forms/, accessibility/, mobile/, ...
    lib/, hooks/, assets/
shared/schema.ts      shared Zod form schemas used by contact + apply pages
attached_assets/      images imported directly by components
public/               static files served as-is (favicon, robots.txt, images)
tailwind.config.ts    Tailwind theme + plugins
```

### Path aliases

| Alias | Points to |
|---|---|
| `@/...` | `client/src/...` |
| `@shared/...` | `shared/...` |
| `@assets/...` | `attached_assets/...` |

## Notes on styling

Brand colours are defined as CSS custom properties in `client/src/index.css`
under "Brand Colors - Unified Palette" (`--brand-primary`, `--brand-tertiary`,
`--deep-blue`, and others).

Be aware that much of the existing code does **not** use them - hex values are
frequently hardcoded inline instead. That inconsistency is known, and improving
it is a legitimate thing to work on.

## Contributing

1. Fork this repository, or create a branch - please don't commit to `main`.
2. Make your change, keeping commits small and clearly described.
3. Run `npm run check` and `npm run build` - both must pass.
4. Open a pull request describing **what** you changed and **why**.

If you were given a written task brief, follow the submission instructions in
it; they take precedence over the above.

## Working here

- Please make sure `npm run check` passes before submitting anything.
- Work on a branch or a fork, not directly on `main`.
- This repo has no server. Pages that would normally fetch data from the API
  (such as the blog) will not load content here. Static pages - including
  Careers, About, Solutions, Contact, and Terms - work fully.
- Do not add `.env` files, credentials, or any customer or applicant documents
  to this repository. It is frontend-only by design and should stay that way.

## Relationship to production

This is a **copy**, not the live site. Changes here do not deploy anywhere.
Accepted work gets merged into the main Portal repository separately by Haydeen
Technologies.
