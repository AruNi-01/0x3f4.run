# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 14 App Router site. Route entrypoints live in `app/`, including page files such as `app/about/page.tsx`, dynamic routes like `app/project/[slug]/page.tsx`, and the mail endpoint at `app/api/email/send/route.ts`. Reusable UI lives in `components/`, grouped by page area (`home-page`, `about-page`, `project-page`, `website-page`, `ui`). Static content and site metadata are stored in `config/` and `types/`. Global styles are in `styles/globals.css`; component-scoped styles use `*.module.scss`. Static assets belong in `public/`.

## Build, Test, and Development Commands
Use `npm`, since `package-lock.json` is committed.

- `npm install`: install dependencies.
- `npm run dev`: start the local dev server on Next.js defaults.
- `npm run build`: create the production build and catch build-time issues.
- `npm run start`: serve the production build locally.
- `npm run lint`: run `next lint` with the repo ESLint rules.

## Coding Style & Naming Conventions
TypeScript is `strict`; prefer typed props and shared interfaces in `types/`. Prettier defines 2-space indentation, semicolons, double quotes, and a `printWidth` of 120. ESLint extends `next/core-web-vitals`; clear all lint warnings before opening a PR. Use PascalCase for React components (`ProjectCard.tsx`), camelCase for variables/functions, and kebab-case for feature folders under `components/`. Import from the `@/*` alias instead of deep relative paths when possible.

## Testing Guidelines
There is no automated test suite configured yet. For every change, run `npm run lint` and verify the affected routes manually in `npm run dev`. When adding tests, place them near the feature as `*.test.ts` or `*.test.tsx`, and prioritize route behavior, form handling, and rendering logic.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commits with an emoji prefix, for example `feat: ✨ add life timeline` and `fix: 🐛 page title`. Keep commits focused and descriptive. PRs should include a short summary, linked issue when applicable, screenshots or recordings for UI changes, and notes about any config or environment updates.

## Security & Configuration Tips
The email API depends on `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_FROM`, `EMAIL_TO`, and `EMAIL_AUTH_CODE`. Keep secrets in local/Vercel environment settings only; never commit credentials or test mail accounts.
