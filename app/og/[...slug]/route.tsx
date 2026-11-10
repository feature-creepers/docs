import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { OgImage } from '@/components/og-image';
import { loadOgFonts, ogSize } from '@/lib/og';
import { getPageImageUrl } from '@/lib/shared';
import { source } from '@/lib/source';

export const revalidate = false;

const sections: Record<string, string> = {
  association: 'Association',
  learn: 'Learn',
  handbook: 'Handbook',
};

export async function GET(_req: Request, { params }: RouteContext<'/og/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <OgImage title={page.data.title} description={page.data.description} section={sections[page.slugs[0] ?? '']} />,
    { ...ogSize, fonts: await loadOgFonts() },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImageUrl(page).segments,
  }));
}
