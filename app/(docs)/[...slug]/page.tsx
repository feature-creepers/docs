import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  PageLastUpdate,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { SquarePen } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { PageMeta } from '@/components/page-meta';
import { getPageImageUrl, getPageMarkdownUrl, gitConfig, withBasePath } from '@/lib/shared';
import { source } from '@/lib/source';

export default async function Page(props: PageProps<'/[...slug]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  // fetched from the browser, so the base path must be added by hand
  const markdownUrl = withBasePath(getPageMarkdownUrl(page).url);
  const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${encodeURI(page.path)}`;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <PageMeta level={page.data.level} duration={page.data.duration} />
      <div className="flex flex-row items-center gap-2 border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-sm text-fd-muted-foreground">
        <a
          href={githubUrl.replace('/blob/', '/edit/')}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-fd-primary"
        >
          <SquarePen className="size-4" aria-hidden="true" />
          Edit this page on GitHub
        </a>
        {page.data.lastModified && <PageLastUpdate date={page.data.lastModified} />}
      </div>
    </DocsPage>
  );
}

// Only the pages that exist: anything else is a 404 (also in `next dev`).
export const dynamicParams = false;

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/[...slug]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const image = getPageImageUrl(page).url;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      images: image,
    },
    twitter: {
      card: 'summary_large_image',
      images: image,
    },
  };
}
