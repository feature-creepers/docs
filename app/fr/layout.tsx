import { RootDocument, rootMetadata, rootViewport } from '@/components/root-document';

export const metadata = rootMetadata('fr');
export const viewport = rootViewport;

export default function Layout({ children }: LayoutProps<'/fr'>) {
  return <RootDocument lang="fr">{children}</RootDocument>;
}
