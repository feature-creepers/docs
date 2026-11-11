import { HomeShell } from '@/components/home-shell';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeShell lang="en">{children}</HomeShell>;
}
