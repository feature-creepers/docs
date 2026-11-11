import { RootDocument, rootMetadata, rootViewport } from '@/components/root-document';

export const metadata = rootMetadata('en');
export const viewport = rootViewport;

export default function Layout({ children }: LayoutProps<'/'>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
