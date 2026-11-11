import { defaultLang } from './i18n';

export const appName = 'Feature Creepers';

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

/**
 * The Markdown export of a page: `/llms.mdx/<lang>/<slugs>/content.md`. The language is always in the
 * path, so both languages have their own file.
 */
export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [page.locale ?? defaultLang, ...page.slugs, 'content.md'];

  return { segments, url: `${docsContentRoute}/${segments.join('/')}` };
}

/** The Open Graph image of a page: `/og/<lang>/<slugs>/image.png`. */
export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [page.locale ?? defaultLang, ...page.slugs, 'image.png'];

  return { segments, url: `${docsImageRoute}/${segments.join('/')}` };
}
