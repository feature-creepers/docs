import type { Metadata } from 'next';
import { DocsPageView, docsMetadata, docsStaticParams } from '@/components/docs-page';

export default async function Page(props: PageProps<'/[...slug]'>) {
  const { slug } = await props.params;
  return <DocsPageView lang="en" slug={slug} />;
}

// Only the pages that exist: anything else is a 404 (also in `next dev`).
export const dynamicParams = false;

export function generateStaticParams() {
  return docsStaticParams('en');
}

export async function generateMetadata(props: PageProps<'/[...slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return docsMetadata('en', slug);
}
