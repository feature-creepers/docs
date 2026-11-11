import type { Metadata } from 'next';
import { DocsPageView, docsMetadata, docsStaticParams } from '@/components/docs-page';

export default async function Page(props: PageProps<'/fr/[...slug]'>) {
  const { slug } = await props.params;
  return <DocsPageView lang="fr" slug={slug} />;
}

// Only the pages that exist: anything else is a 404 (also in `next dev`).
export const dynamicParams = false;

export function generateStaticParams() {
  return docsStaticParams('fr');
}

export async function generateMetadata(props: PageProps<'/fr/[...slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return docsMetadata('fr', slug);
}
