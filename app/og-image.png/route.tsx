import { ImageResponse } from 'next/og';
import { OgImage } from '@/components/og-image';
import { loadOgFonts, ogSize } from '@/lib/og';

export const revalidate = false;

// Served as /og-image.png: the .png extension lets GitHub Pages send the right content type.
export async function GET() {
  return new ImageResponse(
    <OgImage
      title="Build awesome apps. And dumb ones."
      description="A developer association for happy builders who never say no to one more feature."
    />,
    { ...ogSize, fonts: await loadOgFonts() },
  );
}
