import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/'>) {
  const { links, ...options } = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...options}
      // The section tabs already cover Association / Learn / Handbook in the sidebar.
      links={links?.filter((link) => link.type === 'button' || link.type === 'icon')}
    >
      {children}
    </DocsLayout>
  );
}
