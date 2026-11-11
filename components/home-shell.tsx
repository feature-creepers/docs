import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/site-footer';
import type { Lang } from '@/lib/i18n';
import { baseOptions } from '@/lib/layout.shared';

export function HomeShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions(lang)}>
      {children}
      <SiteFooter lang={lang} />
    </HomeLayout>
  );
}
