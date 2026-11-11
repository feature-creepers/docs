import { DocsShell } from '@/components/docs-page';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <DocsShell lang="en">{children}</DocsShell>;
}
