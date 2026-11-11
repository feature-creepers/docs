import { ImageResponse } from 'next/og';
import { OgImage } from '@/components/og-image';
import type { Lang } from './i18n';
import { getMessages } from './messages';
import { loadOgFonts, loadOgLogo, ogSize } from './og';

/** The Open Graph image of the home page, in one language. */
export async function homeOgImage(lang: Lang) {
  const t = getMessages(lang).site;

  return new ImageResponse(
    <OgImage logo={await loadOgLogo()} title={t.ogTitle} description={t.ogDescription} footer={t.ogFooter} />,
    { ...ogSize, fonts: await loadOgFonts() },
  );
}
