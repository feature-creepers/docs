import { siteUrl } from '@/lib/shared';
import { docsLlms } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const index = await docsLlms.index();
  // Absolute links, so the file is useful outside of this website
  const content = index.replace(/^# .*$/m, '# Feature Creepers Docs').replaceAll('](/', `](${siteUrl}/`);

  return new Response(content);
}
