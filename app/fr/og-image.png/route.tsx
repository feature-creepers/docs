import { homeOgImage } from '@/lib/og-home';

export const revalidate = false;

// Served as /fr/og-image.png
export function GET() {
  return homeOgImage('fr');
}
