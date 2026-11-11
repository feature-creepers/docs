import { homeOgImage } from '@/lib/og-home';

export const revalidate = false;

// Served as /og-image.png: the .png extension lets GitHub Pages send the right content type.
export function GET() {
  return homeOgImage('en');
}
