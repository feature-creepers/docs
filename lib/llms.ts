import type { Lang } from './i18n';
import { siteUrl } from './shared';
import { docsLlms } from './source';

const titles: Record<Lang, string> = {
  en: '# Feature Creepers Docs',
  fr: '# Documentation Feature Creepers',
};

/** llms.txt of one language, with absolute links so the file is useful outside of this website. */
export async function llmsIndex(lang: Lang) {
  const index = await docsLlms.index(lang);
  return index.replace(/^# .*$/m, titles[lang]).replaceAll('](/', `](${siteUrl}/`);
}

export function llmsFull(lang: Lang) {
  return docsLlms.full(lang);
}
