import type { Metadata } from 'next';
import { LogoMark } from '@/components/logo';
import { fontVariables } from '@/lib/fonts';
import { defaultLang, type Lang, langStorageKey, languages, localePath } from '@/lib/i18n';
import { getMessages } from '@/lib/messages';
import { basePath, withBasePath } from '@/lib/shared';
import './global.css';

export const metadata: Metadata = {
  title: '404 · Feature Creepers',
};

/**
 * Before the first paint: theme (this page has no theme provider) and language. A missing page under
 * /fr is in French; elsewhere, the visitor's chosen or browser language decides. The page holds both
 * languages and shows one.
 */
const setupScript = `(function(){try{
var d=document.documentElement;
var theme=localStorage.getItem('theme');
if(theme==='light'||(theme==='system'&&matchMedia('(prefers-color-scheme: light)').matches))d.classList.remove('dark');
var langs=${JSON.stringify(languages)};
var path=location.pathname.slice(${JSON.stringify(basePath)}.length);
var lang=null;
for(var i=0;i<langs.length;i++){if(langs[i]!==${JSON.stringify(defaultLang)}&&(path==='/'+langs[i]||path.indexOf('/'+langs[i]+'/')===0))lang=langs[i];}
if(!lang){lang=localStorage.getItem(${JSON.stringify(langStorageKey)});
if(langs.indexOf(lang)<0){lang=${JSON.stringify(defaultLang)};
var list=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||''];
for(var j=0;j<list.length;j++){var c=String(list[j]).toLowerCase().split('-')[0];if(langs.indexOf(c)>=0){lang=c;break;}}}}
d.lang=lang;d.setAttribute('data-fc-lang',lang);
}catch(e){}})();`;

function Content({ lang }: { lang: Lang }) {
  const t = getMessages(lang).notFound;

  return (
    <div data-fc-only={lang} className="relative">
      <LogoMark className="fc-spin fc-float mx-auto mb-6 size-24 shadow-xl shadow-fc-violet/20" />
      <p className="font-display text-8xl font-extrabold text-gradient md:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight">{t.title}</h1>
      <p className="mx-auto mt-3 max-w-md text-fd-muted-foreground">{t.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
        <a
          href={withBasePath(localePath(lang, '/'))}
          className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-fd-primary-foreground"
        >
          {t.backHome} →
        </a>
        <a
          href={withBasePath(localePath(lang, '/learn'))}
          className="rounded-full border px-5 py-2.5 hover:border-fd-primary hover:text-fd-primary"
        >
          {t.startLearning}
        </a>
      </div>
    </div>
  );
}

// GitHub Pages serves this page (out/404.html) for every missing URL, in both languages.
export default function GlobalNotFound() {
  return (
    <html lang={defaultLang} className={`dark ${fontVariables}`} data-fc-lang={defaultLang} suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static script, must run before the first paint */}
        <script dangerouslySetInnerHTML={{ __html: setupScript }} />
        <style>
          {languages
            .map((lang) => `html:not([data-fc-lang="${lang}"]) [data-fc-only="${lang}"]{display:none}`)
            .join('')}
        </style>
      </head>
      <body className="flex min-h-screen flex-col bg-fd-background font-sans text-fd-foreground antialiased">
        <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
          {languages.map((lang) => (
            <Content key={lang} lang={lang} />
          ))}
        </main>
      </body>
    </html>
  );
}
