<div align="center">

<img src="app/icon.svg" alt="Feature Creepers logo" width="88" height="88" />

# Feature Creepers Docs

**Build awesome apps. And dumb ones. With way too many features.** 🚀🚀🌙

The home of [Feature Creepers](https://github.com/feature-creepers), a developer association for
happy builders: who we are, how to join, and beginner-friendly tutorials on the terminal, Git,
GitHub and AI coding agents.

**[feature-creepers.github.io/docs](https://feature-creepers.github.io/docs/)**

</div>

---

## What's inside

| Section                                                                 | What you will find                                                                                                                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Association](https://feature-creepers.github.io/docs/association/)** | Who we are, mission & values, activities, projects, how to join, code of conduct, FAQ                                                                               |
| **[Learn](https://feature-creepers.github.io/docs/learn/)**             | The learning path: terminal & CLI, machine setup, Git, GitHub, your first pull request, Claude Code, Codex, T3 Code, prompting, best practices, AGENTS.md, glossary |
| **[Handbook](https://feature-creepers.github.io/docs/handbook/)**       | For when a project gets serious: tests, CI, and our CI infrastructure prompt                                                                                        |

## Run it locally

You need [Node.js](https://nodejs.org) 22+ and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/feature-creepers/docs.git
cd docs
pnpm install
pnpm dev
```

Then open http://localhost:3000.

| Command                     | What it does                                |
| --------------------------- | ------------------------------------------- |
| `pnpm dev`                  | Start the dev server with hot reload        |
| `pnpm build`                | Build the static site into `out/`           |
| `pnpm start`                | Serve the built `out/` folder               |
| `pnpm lint` / `pnpm format` | Check / format the code with Biome          |
| `pnpm types:check`          | Type check                                  |
| `pnpm check`                | Everything the CI runs (lint, types, build) |

## Project structure

```text
app/                 Next.js routes: landing page, docs pages, OG images, search index, llms.txt
components/          React components (landing page, MDX components, logo, footer)
content/docs/        The pages, in MDX
  association/       About the association
  learn/             Tutorials
  handbook/          Advanced guides
data/creepers.json   The Wall of Creepers
public/prompts/      Prompts for AI agents, downloadable as is (e.g. the CI infrastructure brief)
lib/                 Content source, shared constants and layout options
.github/workflows/   CI (pull requests) and deployment (GitHub Pages)
```

## Contributing

Typos, fixes, new tutorials and useless features are all welcome. Read
[Contribute to the docs](https://feature-creepers.github.io/docs/association/contributing/), and if
you have never opened a pull request, start with
[Your first pull request](https://feature-creepers.github.io/docs/learn/first-pull-request/): it
adds you to the Wall of Creepers.

AI agents working on this repository: see [AGENTS.md](AGENTS.md).

## Deployment

Every push to `main` builds the site as a static export and deploys it to GitHub Pages with
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The base path (`/docs`) is set
automatically by the workflow. Pull requests run [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

Built with [Fumadocs](https://fumadocs.dev) and [Next.js](https://nextjs.org).
