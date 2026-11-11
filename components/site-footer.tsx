import Link from 'next/link';
import { DiscordIcon, GithubIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { type Lang, localePath } from '@/lib/i18n';
import { getMessages } from '@/lib/messages';
import { links, withBasePath } from '@/lib/shared';

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = getMessages(lang).footer;
  const c = t.columns;
  const columns = [
    {
      title: c.association.title,
      items: [
        { label: c.association.items.who, href: '/association' },
        { label: c.association.items.mission, href: '/association/mission' },
        { label: c.association.items.activities, href: '/association/activities' },
        { label: c.association.items.projects, href: '/association/projects' },
        { label: c.association.items.join, href: '/association/join' },
        { label: c.association.items.conduct, href: '/association/code-of-conduct' },
        { label: c.association.items.faq, href: '/association/faq' },
      ],
    },
    {
      title: c.learn.title,
      items: [
        { label: c.learn.items.start, href: '/learn' },
        { label: c.learn.items.terminal, href: '/learn/terminal' },
        { label: c.learn.items.git, href: '/learn/git' },
        { label: c.learn.items.github, href: '/learn/github' },
        { label: c.learn.items.agents, href: '/learn/ai-agents' },
        { label: c.learn.items.prompting, href: '/learn/prompting' },
        { label: c.learn.items.agentsMd, href: '/learn/agents-md' },
      ],
    },
    {
      title: c.handbook.title,
      items: [
        { label: c.handbook.items.overview, href: '/handbook' },
        { label: c.handbook.items.testing, href: '/handbook/testing-and-ci' },
        { label: c.handbook.items.ci, href: '/handbook/ci-infrastructure' },
        { label: c.handbook.items.contributing, href: '/association/contributing' },
      ],
    },
  ];

  return (
    <footer className="border-t bg-fd-card/40">
      {/* phones: the logo block on its own row, then the link columns two by two */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-fd-muted-foreground">{t.tagline}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={links.discord}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-fc-discord px-4 py-2 font-semibold text-white transition-colors hover:bg-fc-discord/85"
            >
              <DiscordIcon className="size-4" />
              {t.joinDiscord}
            </a>
            <a
              href={links.org}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t.github}
              className="inline-flex size-9 items-center justify-center rounded-full border transition-colors hover:border-fd-primary hover:text-fd-primary"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={withBasePath(localePath(lang, '/llms.txt'))}
              className="rounded-full border px-3 py-1.5 font-mono text-xs text-fd-muted-foreground transition-colors hover:border-fd-primary hover:text-fd-primary"
              title={t.llms}
            >
              llms.txt
            </a>
          </div>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="mb-3 font-display text-sm font-semibold">{column.title}</p>
            <ul className="space-y-2 text-sm">
              {column.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localePath(lang, item.href)}
                    className="text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-fd-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Feature Creepers · {t.madeIn} <span aria-hidden="true">🥖</span>
          </p>
          <p>
            {t.builtWith}{' '}
            <a href="https://fumadocs.dev" target="_blank" rel="noreferrer noopener" className="hover:text-fd-primary">
              Fumadocs
            </a>{' '}
            · {t.hosted} ·{' '}
            <a href={links.repo} target="_blank" rel="noreferrer noopener" className="hover:text-fd-primary">
              {t.edit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
