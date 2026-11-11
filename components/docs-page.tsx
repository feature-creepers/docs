import { DocsLayout } from 'fumadocs-ui/layouts/docs';
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
import type { ComponentProps, ReactNode } from 'react';
import { getMDXComponents } from '@/components/mdx';
import { PageMeta } from '@/components/page-meta';
import { type Lang, languages, localizeHref } from '@/lib/i18n';
import { baseOptions } from '@/lib/layout.shared';
import { getMessages } from '@/lib/messages';
import { getPageImageUrl, getPageMarkdownUrl, gitConfig, withBasePath } from '@/lib/shared';
import { source } from '@/lib/source';

export function DocsShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const { links, ...options } = baseOptions(lang);

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      {...options}
      // The section tabs already cover Association / Learn / Handbook in the sidebar.
      links={links?.filter((link) => link.type === 'button' || link.type === 'icon')}
    >
      {children}
    </DocsLayout>
  );
}

export function DocsPageView({ lang, slug }: { lang: Lang; slug: string[] }) {
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const MDX = page.data.body;
  // fetched from the browser, so the base path must be added by hand
  const markdownUrl = withBasePath(getPageMarkdownUrl(page).url);
  const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${encodeURI(page.path)}`;
  const RelativeLink = createRelativeLink(source, page);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <PageMeta level={page.data.level} duration={page.data.duration} lang={lang} />
      <div className="flex flex-row items-center gap-2 border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents(
            {
              // relative file links (./other-page.mdx), and the language prefix on absolute ones
              a: (props: ComponentProps<'a'>) => <RelativeLink {...props} href={localizeHref(props.href, lang)} />,
            },
            lang,
          )}
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
          {getMessages(lang).docs.editOnGitHub}
        </a>
        {page.data.lastModified && <PageLastUpdate date={page.data.lastModified} />}
      </div>
    </DocsPage>
  );
}

export function docsStaticParams(lang: Lang) {
  return source.getPages(lang).map((page) => ({ slug: page.slugs }));
}

export function docsMetadata(lang: Lang, slug: string[]): Metadata {
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const image = getPageImageUrl(page).url;
  const versions = Object.fromEntries(
    languages.flatMap((l) => {
      const version = source.getPage(slug, l);
      return version ? [[l, version.url]] : [];
    }),
  );

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
      languages: { ...versions, 'x-default': versions.en ?? page.url },
    },
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
