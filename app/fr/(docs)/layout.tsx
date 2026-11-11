import { DocsShell } from '@/components/docs-page';

export default function Layout({ children }: LayoutProps<'/fr'>) {
  return <DocsShell lang="fr">{children}</DocsShell>;
}
