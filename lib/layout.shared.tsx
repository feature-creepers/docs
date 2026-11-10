import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenText, GraduationCap, Rocket, Users } from 'lucide-react';
import { Logo } from '@/components/logo';
import { links } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
    },
    githubUrl: links.org,
    links: [
      {
        text: 'Association',
        url: '/association',
        active: 'nested-url',
        icon: <Users />,
      },
      {
        text: 'Learn',
        url: '/learn',
        active: 'nested-url',
        icon: <GraduationCap />,
      },
      {
        text: 'Handbook',
        url: '/handbook',
        active: 'nested-url',
        icon: <BookOpenText />,
      },
      {
        type: 'button',
        text: 'Join the crew',
        url: '/association/join',
        icon: <Rocket />,
        on: 'nav',
      },
    ],
  };
}
