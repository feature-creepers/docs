'use client';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import SearchDialog from '@/components/search';
import { isLang, type Lang, langStorageKey, languageNames, languages, localePath, splitLocalePath } from '@/lib/i18n';
import { fumadocsTranslations } from '@/lib/messages';
import { withBasePath } from '@/lib/shared';

const locales = languages.map((locale) => ({ locale, name: languageNames[locale] }));

export function Provider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const pathname = usePathname();

  // The language switcher: remember the choice (so English pages stop redirecting to French, or the
  // other way round), then open the same page in the other language. Each language has its own root
  // layout, so this is a full page load anyway.
  function onLocaleChange(next: string) {
    if (!isLang(next) || next === lang) return;
    try {
      localStorage.setItem(langStorageKey, next);
    } catch {
      // private browsing: the choice is just not remembered
    }
    const { path } = splitLocalePath(pathname);
    window.location.assign(withBasePath(localePath(next, path)) + window.location.hash);
  }

  return (
    <RootProvider
      search={{ SearchDialog }}
      theme={{ defaultTheme: 'dark' }}
      i18n={{ locale: lang, locales, translations: fumadocsTranslations[lang], onLocaleChange }}
    >
      {children}
    </RootProvider>
  );
}
