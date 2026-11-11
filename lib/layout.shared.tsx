import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenText, GraduationCap, Rocket, Users } from 'lucide-react';
import { DiscordIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { type Lang, localePath } from './i18n';
import { getMessages } from './messages';
import { links } from './shared';

export function baseOptions(lang: Lang): BaseLayoutProps {
  const t = getMessages(lang).nav;

  return {
    nav: {
      title: <Logo />,
      url: localePath(lang, '/'),
    },
    githubUrl: links.org,
    links: [
      {
        text: t.association,
        url: localePath(lang, '/association'),
        active: 'nested-url',
        icon: <Users />,
      },
      {
        text: t.learn,
        url: localePath(lang, '/learn'),
        active: 'nested-url',
        icon: <GraduationCap />,
      },
      {
        text: t.handbook,
        url: localePath(lang, '/handbook'),
        active: 'nested-url',
        icon: <BookOpenText />,
      },
      {
        type: 'icon',
        label: t.discord,
        text: 'Discord',
        url: links.discord,
        external: true,
        icon: <DiscordIcon />,
      },
      {
        type: 'button',
        text: t.join,
        url: localePath(lang, '/association/join'),
        icon: <Rocket />,
        on: 'nav',
      },
    ],
  };
}
