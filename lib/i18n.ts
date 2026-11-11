import { defineI18n } from 'fumadocs-core/i18n';

/**
 * English is the default language and lives at the site root (`/learn/git`); French lives under
 * `/fr` (`/fr/learn/git`). Content: `page.mdx` is English, `page.fr.mdx` is French.
 */
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'fr'],
  hideLocale: 'default-locale',
  parser: 'dot',
});

export type Lang = (typeof i18n.languages)[number];

export const languages: readonly Lang[] = i18n.languages;
export const defaultLang: Lang = 'en';

export const languageNames: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
};

/** Open Graph locale codes */
export const ogLocales: Record<Lang, string> = {
  en: 'en_US',
  fr: 'fr_FR',
};

/** localStorage key of the language the visitor chose with the language switcher */
export const langStorageKey = 'fc-lang';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}

/** The URL prefix of a language: empty for English, `/fr` for French. */
export function langPrefix(lang: Lang) {
  return lang === defaultLang ? '' : `/${lang}`;
}

/** Turn a site path (`/learn/git`) into the path of that page in `lang` (`/fr/learn/git`). */
export function localePath(lang: Lang, path: string) {
  const prefix = langPrefix(lang);
  if (!prefix) return path;
  return path === '/' ? prefix : `${prefix}${path}`;
}

/** Split a site path into its language and the path without the language prefix. */
export function splitLocalePath(path: string): { lang: Lang; path: string } {
  for (const lang of languages) {
    const prefix = langPrefix(lang);
    if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) {
      return { lang, path: path.slice(prefix.length) || '/' };
    }
  }
  return { lang: defaultLang, path };
}

/** Sections of the docs: internal links to them get the language prefix. */
const localizedRoots = ['/association', '/learn', '/handbook'];

/**
 * Add the language prefix to an internal page link (`/learn/git#install-git`), so content can use the
 * same absolute links in every language. Other links (external, files, anchors) are left as they are.
 */
export function localizeHref(href: string | undefined, lang: Lang) {
  if (!href || lang === defaultLang || !href.startsWith('/')) return href;
  const isPage =
    href === '/' ||
    localizedRoots.some((root) => href === root || ['/', '#', '?'].some((next) => href.startsWith(`${root}${next}`)));
  return isPage ? localePath(lang, href) : href;
}
