import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/shared';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

const withSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    ...source.getPages().map((page) => ({
      url: `${siteUrl}${withSlash(page.url)}`,
      lastModified: page.data.lastModified,
      changeFrequency: 'monthly' as const,
      priority: page.slugs.length === 1 ? 0.8 : 0.6,
    })),
  ];
}
