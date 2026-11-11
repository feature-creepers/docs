import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Provider } from '@/components/provider';
import { fontVariables } from '@/lib/fonts';
import { defaultLang, type Lang, langStorageKey, languages, localePath, ogLocales } from '@/lib/i18n';
import { getMessages } from '@/lib/messages';
import { appName, basePath, siteUrl } from '@/lib/shared';
import '@/app/global.css';

/**
 * Runs before anything is painted on English pages: a visitor whose chosen language (language
 * switcher) or browser language is French goes to the French version of the same page. Browsers in
 * any other language stay in English.
 */
const languageRedirectScript = `(function(){try{
var base=${JSON.stringify(basePath)};
var lang=localStorage.getItem(${JSON.stringify(langStorageKey)});
if(${JSON.stringify(languages)}.indexOf(lang)<0){lang=${JSON.stringify(defaultLang)};
var list=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''];
for(var i=0;i<list.length;i++){var code=String(list[i]).toLowerCase().split('-')[0];
if(${JSON.stringify(languages)}.indexOf(code)>=0){lang=code;break;}}}
if(lang===${JSON.stringify(defaultLang)})return;
var path=location.pathname;if(base&&path.indexOf(base)===0)path=path.slice(base.length);
location.replace(base+'/'+lang+(path&&path!=='/'?path:'/')+location.search+location.hash);
}catch(e){}})();`;

export function RootDocument({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={fontVariables} suppressHydrationWarning>
      {/* biome-ignore lint/style/noHeadElement: App Router root layout, not a Pages Router page */}
      <head>
        {lang === defaultLang && (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static script, must run before the first paint
          <script dangerouslySetInnerHTML={{ __html: languageRedirectScript }} />
        )}
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Provider lang={lang}>{children}</Provider>
      </body>
    </html>
  );
}

/** The home page of each language, for `<link rel="alternate" hreflang>`. */
export function homeAlternates(lang: Lang): Metadata['alternates'] {
  return {
    canonical: localePath(lang, '/'),
    languages: {
      ...Object.fromEntries(languages.map((l) => [l, localePath(l, '/')])),
      'x-default': '/',
    },
  };
}

export function rootMetadata(lang: Lang): Metadata {
  const t = getMessages(lang).site;
  const image = { url: localePath(lang, '/og-image.png'), width: 1200, height: 630, alt: `${appName}: ${t.tagline}` };

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${appName} · ${t.tagline}`,
      template: `%s · ${appName}`,
    },
    description: t.description,
    applicationName: appName,
    openGraph: {
      type: 'website',
      siteName: appName,
      title: appName,
      description: t.description,
      locale: ogLocales[lang],
      alternateLocale: languages.filter((l) => l !== lang).map((l) => ogLocales[l]),
      images: image,
    },
    twitter: {
      card: 'summary_large_image',
      title: appName,
      description: t.description,
      images: image.url,
    },
  };
}

export const rootViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fbf5' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0b15' },
  ],
};
