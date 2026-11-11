import type { MetadataRoute } from 'next';
import { languages, localePath } from '@/lib/i18n';
import { siteUrl } from '@/lib/shared';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

const absolute = (path: string) => `${siteUrl}${path.endsWith('/') ? path : `${path}/`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const homes = languages.map((lang) => ({
    url: absolute(localePath(lang, '/')),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: { languages: Object.fromEntries(languages.map((l) => [l, absolute(localePath(l, '/'))])) },
  }));

  const pages = source.getPages().map((page) => ({
    url: absolute(page.url),
    lastModified: page.data.lastModified,
    changeFrequency: 'monthly' as const,
    priority: page.slugs.length === 1 ? 0.8 : 0.6,
    alternates: {
      languages: Object.fromEntries(
        languages.flatMap((l) => {
          const version = source.getPage(page.slugs, l);
          return version ? [[l, absolute(version.url)]] : [];
        }),
      ),
    },
  }));

  return [...homes, ...pages];
}
