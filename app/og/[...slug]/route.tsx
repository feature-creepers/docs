import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { OgImage } from '@/components/og-image';
import { isLang } from '@/lib/i18n';
import { getMessages } from '@/lib/messages';
import { loadOgFonts, loadOgLogo, ogSize } from '@/lib/og';
import { getPageImageUrl } from '@/lib/shared';
import { source } from '@/lib/source';

export const revalidate = false;

// /og/<lang>/<slugs>/image.png
export async function GET(_req: Request, { params }: RouteContext<'/og/[...slug]'>) {
  const { slug } = await params;
  const [lang, ...rest] = slug;
  if (!isLang(lang)) notFound();
  const page = source.getPage(rest.slice(0, -1), lang);
  if (!page) notFound();

  const t = getMessages(lang).site;
  const section = t.sections[page.slugs[0] as keyof typeof t.sections];

  return new ImageResponse(
    <OgImage
      logo={await loadOgLogo()}
      title={page.data.title}
      description={page.data.description}
      section={section}
      footer={t.ogFooter}
    />,
    { ...ogSize, fonts: await loadOgFonts() },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImageUrl(page).segments,
  }));
}
