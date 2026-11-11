import { notFound } from 'next/navigation';
import { isLang } from '@/lib/i18n';
import { getPageMarkdownUrl } from '@/lib/shared';
import { docsLlms, source } from '@/lib/source';

export const revalidate = false;

// /llms.mdx/<lang>/<slugs>/content.md
export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/[...slug]'>) {
  const { slug } = await params;
  const [lang, ...rest] = slug;
  if (!isLang(lang)) notFound();
  // remove the appended "content.md"
  const page = source.getPage(rest.slice(0, -1), lang);
  if (!page) notFound();

  return new Response(await docsLlms.page(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageMarkdownUrl(page).segments,
  }));
}
