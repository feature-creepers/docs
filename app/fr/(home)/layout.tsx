import { HomeShell } from '@/components/home-shell';

export default function Layout({ children }: LayoutProps<'/fr'>) {
  return <HomeShell lang="fr">{children}</HomeShell>;
}
