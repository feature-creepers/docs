import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Feature Creepers';
export const appTagline = 'Build awesome apps. And dumb ones. With way too many features.';
export const appDescription =
  'The home of Feature Creepers, a developer association for happy builders: who we are, how to join, and beginner-friendly tutorials on the terminal, Git, GitHub and AI coding agents.';

/** Path prefix the site is served under (`/docs` on GitHub Pages, empty locally). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Public URL of the deployed site, used for absolute links (Open Graph, sitemap). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feature-creepers.github.io/docs').replace(
  /\/$/,
  '',
);

/** Prefix a public asset path with the base path (Next.js does not do it for raw URLs). */
export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

export const docsRoute = '/';
export const docsImageRoute = '/og';
export const docsContentRoute = '/llms.mdx';

export const gitConfig = {
  user: 'feature-creepers',
  repo: 'docs',
  branch: 'main',
};

/** Our two community places: Discord to talk, GitHub for the code. There are no others. */
export const links = {
  discord: 'https://discord.gg/eXqmagTNrr',
  org: 'https://github.com/feature-creepers',
  repo: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  joinIssue: `https://github.com/${gitConfig.user}/${gitConfig.repo}/issues/new?template=join.yml`,
  docsIssue: `https://github.com/${gitConfig.user}/${gitConfig.repo}/issues/new/choose`,
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
