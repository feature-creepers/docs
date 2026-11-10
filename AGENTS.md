# AGENTS.md

## Project

The Feature Creepers documentation site: who the association is, how to join, and beginner-friendly
tutorials. Built with Fumadocs 16 on Next.js 16 (App Router), React 19, Tailwind CSS 4 and
TypeScript. Exported as a static site and deployed to GitHub Pages
(https://feature-creepers.github.io/docs/). Package manager: pnpm. Node.js 22+ (CI uses `.nvmrc`).

## Commands

- Install: `pnpm install`
- Dev server: `pnpm dev` (http://localhost:3000)
- Lint: `pnpm lint` (Biome) · auto-format: `pnpm format`
- Type check: `pnpm types:check`
- Production build (static export to `out/`): `pnpm build`
- Everything CI runs: `pnpm check`

Run `pnpm check` before saying a task is done.

## Structure

- `content/docs/<section>/*.mdx`: the pages. Sections are `association`, `learn` and `handbook`.
  Each folder's `meta.json` sets the sidebar order: **add every new page there**.
- `app/(home)/`: landing page. `app/(docs)/[...slug]/`: docs pages, served at the site root
  (`/learn/git`, not `/docs/learn/git`).
- `app/og/`, `app/llms.mdx/`, `app/llms.txt/`, `app/api/search/`: static OG images, Markdown
  exports and the static search index.
- `components/`: React components. `components/mdx.tsx` registers the components available in MDX.
- `lib/source.ts`: content loader and frontmatter schema. `lib/shared.ts`: site constants and links.
- `data/creepers.json`: the Wall of Creepers (people add themselves via pull requests).
- `public/prompts/*.md`: prompts for AI agents (e.g. the CI brief), served raw for download and
  rendered on a page with `<include>` plus `<PromptFile>`. Edit only the `.md` file: it is the single
  source, so keep it plain Markdown (no MDX).
- `lib/remark-plugins.ts`: our remark plugins (demote headings of included documents, code-language
  aliases for languages Shiki does not ship). If a change to `lib/source.ts` options does not apply,
  delete `.next/` and `.source/` (stale build cache).
- `app/global.css`: the theme (colors for light and dark mode, fonts, landing page animations).

## Writing content

- Audience: beginners. Second person, short sentences, explain jargon or link to `/learn/glossary`.
- Tone: friendly and playful (feature creep jokes welcome), but instructions must stay precise.
- Frontmatter: `title` and `description` are required; `icon` is a Lucide icon name (check it exists
  in `lucide-react`'s `icons` export); tutorials can set `level` (beginner, intermediate, advanced)
  and `duration`.
- Internal links are absolute site paths without the base path: `/learn/git`, never `/docs/learn/git`.
- Per-OS commands: consecutive code blocks with `tab="..."`, or `<Tabs groupId="os" persist items={['Windows', 'macOS', 'Linux']}>`.
- Install commands, prices and plans change: verify them against the official docs and link to them.
- MDX gotcha: a bare `<` or `{` in prose is parsed as JSX. Put code in backticks.
- Do not mention private repositories of the organization on this public site.

## Code conventions

- Static export only: no server-only features (no API routes with runtime logic, no `cookies()`),
  route handlers must be static (`export const revalidate = false`).
- Raw URLs fetched or linked outside `next/link` must go through `withBasePath()` from `lib/shared.ts`
  (the site is served under `/docs` on GitHub Pages).
- Tailwind classes only; theme colors are `fd-*` (Fumadocs) and `fc-*` (brand: lime, green, violet,
  pink, orange).
- Respect `prefers-reduced-motion` for any new animation.

## Git

- Branch from `main`, open a pull request; CI (`.github/workflows/ci.yml`) must pass.
- Merges to `main` deploy automatically (`.github/workflows/deploy.yml`).
- Never commit secrets, `.env*` files, `out/` or `.next/`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
