import Link from 'next/link';
import { DiscordIcon, GithubIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { links, withBasePath } from '@/lib/shared';

const columns = [
  {
    title: 'Association',
    items: [
      { label: 'Who we are', href: '/association' },
      { label: 'Mission & values', href: '/association/mission' },
      { label: 'Activities', href: '/association/activities' },
      { label: 'Projects', href: '/association/projects' },
      { label: 'Join us', href: '/association/join' },
      { label: 'Code of conduct', href: '/association/code-of-conduct' },
      { label: 'FAQ', href: '/association/faq' },
    ],
  },
  {
    title: 'Learn',
    items: [
      { label: 'Start here', href: '/learn' },
      { label: 'The terminal', href: '/learn/terminal' },
      { label: 'Git', href: '/learn/git' },
      { label: 'GitHub', href: '/learn/github' },
      { label: 'AI coding agents', href: '/learn/ai-agents' },
      { label: 'Prompting', href: '/learn/prompting' },
      { label: 'AGENTS.md', href: '/learn/agents-md' },
    ],
  },
  {
    title: 'Handbook',
    items: [
      { label: 'Overview', href: '/handbook' },
      { label: 'Tests & CI', href: '/handbook/testing-and-ci' },
      { label: 'CI infrastructure prompt', href: '/handbook/ci-infrastructure' },
      { label: 'Contribute to the docs', href: '/association/contributing' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-fd-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-fd-muted-foreground">
            A developer association for happy builders. Awesome apps, dumb apps, and way too many features.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={links.discord}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-fc-discord px-4 py-2 font-semibold text-white transition-colors hover:bg-fc-discord/85"
            >
              <DiscordIcon className="size-4" />
              Join our Discord
            </a>
            <a
              href={links.org}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Feature Creepers on GitHub"
              className="inline-flex size-9 items-center justify-center rounded-full border transition-colors hover:border-fd-primary hover:text-fd-primary"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={withBasePath('/llms.txt')}
              className="rounded-full border px-3 py-1.5 font-mono text-xs text-fd-muted-foreground transition-colors hover:border-fd-primary hover:text-fd-primary"
              title="These docs as plain text, for your AI agents"
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
                  <Link href={item.href} className="text-fd-muted-foreground transition-colors hover:text-fd-primary">
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
            © {new Date().getFullYear()} Feature Creepers · Made with way too many features in France{' '}
            <span aria-hidden="true">🥖</span>
          </p>
          <p>
            Built with{' '}
            <a href="https://fumadocs.dev" target="_blank" rel="noreferrer noopener" className="hover:text-fd-primary">
              Fumadocs
            </a>{' '}
            · Hosted on GitHub Pages ·{' '}
            <a href={links.repo} target="_blank" rel="noreferrer noopener" className="hover:text-fd-primary">
              Edit on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
