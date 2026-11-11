import {
  ArrowRight,
  BookOpenText,
  Bot,
  FileCode2,
  FlaskConical,
  GitBranch,
  GitPullRequest,
  GraduationCap,
  Laptop,
  MessageSquareText,
  SquareTerminal,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { DiscordIcon, GithubIcon } from '@/components/icons';
import { LogoMark } from '@/components/logo';
import { ProjectLogo } from '@/components/project-logo';
import { cn } from '@/lib/cn';
import { type Lang, localePath } from '@/lib/i18n';
import { getMessages, type Messages } from '@/lib/messages';
import { links } from '@/lib/shared';
import { FeatureMarquee } from './marquee';
import { Terminal } from './terminal';

type HomeText = Messages['home'];

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring';
const buttonPrimary = cn(
  buttonBase,
  'bg-fd-primary text-fd-primary-foreground shadow-lg shadow-fc-lime/20 hover:-translate-y-0.5 hover:shadow-fc-lime/40',
);
const buttonSecondary = cn(buttonBase, 'border bg-fd-card hover:border-fd-primary/60 hover:text-fd-primary');
const buttonDiscord = cn(
  buttonBase,
  'bg-fc-discord text-white shadow-lg shadow-fc-discord/25 hover:-translate-y-0.5 hover:shadow-fc-discord/40',
);

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fd-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-fd-muted-foreground">{children}</p>}
    </div>
  );
}

function Hero({ lang, t }: { lang: Lang; t: HomeText }) {
  const hero = t.hero;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden="true"
        className="fc-twinkle pointer-events-none absolute inset-0 hidden bg-stars text-white/40 dark:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-fc-violet/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-48 -left-40 size-[420px] rounded-full bg-fc-lime/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:pt-24 lg:pb-28">
        <div className="min-w-0">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border bg-fd-card/70 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur">
            <span aria-hidden="true">🚀🚀🌙</span>
            {hero.badge}
          </p>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-5xl xl:text-[3.9rem]">
            {hero.titleLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-fd-muted-foreground">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={localePath(lang, '/learn')} className={buttonPrimary}>
              {hero.startLearning} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={links.discord} target="_blank" rel="noreferrer noopener" className={buttonDiscord}>
              <DiscordIcon className="size-4" /> {hero.joinDiscord}
            </a>
          </div>
          <p className="mt-6 text-sm text-fd-muted-foreground">{hero.footnote}</p>
        </div>

        <div className="relative min-w-0">
          {/* the Derpcopter, delivering features nobody asked for */}
          <LogoMark className="fc-spin fc-float absolute -top-9 -right-3 z-10 size-14 shadow-lg shadow-fc-violet/30" />
          <span
            aria-hidden="true"
            className="fc-float absolute -bottom-6 -left-4 z-10 text-3xl select-none [animation-delay:-3s]"
          >
            🌙
          </span>
          <Terminal t={t.terminal} />
        </div>
      </div>
    </section>
  );
}

function Paths({ lang, t }: { lang: Lang; t: HomeText }) {
  const paths = [
    { key: 'association', href: '/association', icon: Users, accent: 'from-fc-violet/25' },
    { key: 'learn', href: '/learn', icon: GraduationCap, accent: 'from-fc-lime/25' },
    { key: 'handbook', href: '/handbook', icon: BookOpenText, accent: 'from-fc-orange/25' },
  ] as const;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={t.paths.eyebrow} title={t.paths.title}>
        {t.paths.text}
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-3">
        {paths.map(({ key, href, icon: Icon, accent }) => {
          const path = t.paths[key];
          return (
            <Link
              key={href}
              href={localePath(lang, href)}
              className="group relative overflow-hidden rounded-2xl border bg-fd-card p-6 transition-all hover:-translate-y-1 hover:border-fd-primary/50 hover:shadow-xl hover:shadow-fc-violet/5"
            >
              <div
                aria-hidden="true"
                className={cn('absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent opacity-70', accent)}
              />
              <div className="relative">
                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border bg-fd-background">
                  <Icon className="size-5 text-fd-primary" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{path.text}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fd-primary">
                  {path.cta}{' '}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Community({ t }: { t: HomeText }) {
  const c = t.community;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border bg-fd-card">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--color-fc-discord),transparent_45%),radial-gradient(circle_at_100%_100%,var(--fc-lime),transparent_40%)] opacity-20"
        />
        <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fc-discord">{c.eyebrow}</p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {c.titleStart} <span className="text-fc-discord">Discord</span>
            </h2>
            <p className="mt-4 text-fd-muted-foreground">{c.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={links.discord} target="_blank" rel="noreferrer noopener" className={buttonDiscord}>
                <DiscordIcon className="size-4" /> {c.joinDiscord}
              </a>
              <a href={links.org} target="_blank" rel="noreferrer noopener" className={buttonSecondary}>
                <GithubIcon className="size-4" /> {c.github}
              </a>
            </div>
            <p className="mt-5 text-sm text-fd-muted-foreground">{c.note}</p>
          </div>

          <div className="rounded-2xl border bg-fd-background/80 p-5 shadow-2xl shadow-fc-discord/10 backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-wider text-fd-muted-foreground">{c.invite}</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="fc-logo">
                <LogoMark className="size-12" />
              </span>
              <div className="min-w-0">
                <p className="font-display font-bold">Feature Creepers</p>
                <p className="truncate text-xs text-fd-muted-foreground">
                  <span aria-hidden="true">🚀🚀🌙</span> {c.serverTagline}
                </p>
              </div>
              <a
                href={links.discord}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-auto shrink-0 rounded-md bg-fc-discord px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-fc-discord/85"
              >
                {c.join}
              </a>
            </div>
            <ul className="mt-5 grid gap-3 border-t pt-5 sm:grid-cols-2">
              {c.perks.map((perk) => (
                <li key={perk.title} className="flex gap-3">
                  <span aria-hidden="true" className="text-xl">
                    {perk.emoji}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{perk.title}</span>
                    <span className="block text-xs leading-relaxed text-fd-muted-foreground">{perk.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Creed({ lang, t }: { lang: Lang; t: HomeText }) {
  return (
    <section className="relative overflow-hidden border-y bg-fd-muted/30">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow={t.creed.eyebrow} title={t.creed.title} />
        <ol className="grid gap-5 sm:grid-cols-2">
          {t.creed.items.map((item, i) => (
            <li key={item.title} className="flex gap-4 rounded-2xl border bg-fd-card/80 p-6 backdrop-blur">
              <span className="font-display text-4xl font-extrabold text-gradient">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fd-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-center">
          <Link href={localePath(lang, '/association/mission')} className={buttonSecondary}>
            {t.creed.manifesto}
          </Link>
        </p>
      </div>
    </section>
  );
}

function LearningPath({ lang, t }: { lang: Lang; t: HomeText }) {
  const s = t.learningPath.steps;
  const steps = [
    { href: '/learn/terminal', icon: SquareTerminal, ...s.terminal },
    { href: '/learn/setup', icon: Laptop, ...s.setup },
    { href: '/learn/git', icon: GitBranch, ...s.git },
    { href: '/learn/github', icon: GithubIcon, ...s.github },
    { href: '/learn/first-pull-request', icon: GitPullRequest, ...s.firstPullRequest },
    { href: '/learn/ai-agents', icon: Bot, ...s.aiAgents },
    { href: '/learn/prompting', icon: MessageSquareText, ...s.prompting },
    { href: '/learn/agents-md', icon: FileCode2, ...s.agentsMd },
    { href: '/handbook/testing-and-ci', icon: FlaskConical, ...s.testing },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={t.learningPath.eyebrow} title={t.learningPath.title}>
        {t.learningPath.text}
      </SectionHeading>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ href, icon: Icon, title, text }, i) => (
          <li key={href}>
            <Link
              href={localePath(lang, href)}
              className="group flex h-full items-center gap-4 rounded-xl border bg-fd-card p-4 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent/40"
            >
              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-lg bg-fd-muted">
                <Icon className="size-5 text-fd-primary" aria-hidden="true" />
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-fd-primary font-mono text-[10px] font-bold text-fd-primary-foreground">
                  {i + 1}
                </span>
              </span>
              <span>
                <span className="block font-display font-semibold group-hover:text-fd-primary">{title}</span>
                <span className="block text-sm text-fd-muted-foreground">{text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects({ lang, t }: { lang: Lang; t: HomeText }) {
  const p = t.projects;
  const projects = [
    {
      name: 'Radio Creep Bot',
      logo: '/projects/radio-creep-bot.svg',
      text: p.radioCreepBot,
      tags: ['Python', 'discord.py', 'Apple Music', 'Windows'],
      links: [{ label: p.source, href: 'https://github.com/feature-creepers/radio-creep-bot' }],
    },
    {
      name: 'Marianne',
      logo: '/projects/marianne.png',
      text: p.marianne,
      tags: ['TypeScript', 'Electron', 'Local-first', 'Claude Code'],
      links: [
        { label: 'marianne.app', href: 'https://marianne.app/' },
        { label: p.source, href: 'https://github.com/feature-creepers/marianne' },
      ],
    },
    {
      name: 'Audio Enhancer',
      logo: '/projects/audio-enhancer.svg',
      text: p.audioEnhancer,
      tags: ['Python', 'FFmpeg', 'CLI', 'Audio'],
      links: [{ label: p.source, href: 'https://github.com/feature-creepers/audio-enhancer' }],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeading eyebrow={p.eyebrow} title={p.title}>
        {p.text}
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col rounded-2xl border bg-fd-card p-6">
            <ProjectLogo src={project.logo} name={project.name} />
            <h3 className="mt-3 font-display text-xl font-bold">{project.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-fd-muted-foreground">{project.text}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-fd-muted px-2 py-0.5 font-mono text-[11px] text-fd-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fd-primary hover:underline"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
        <Link
          href={localePath(lang, '/association/join')}
          className="group flex flex-col justify-center rounded-2xl border border-dashed p-6 text-center transition-colors hover:border-fd-primary hover:bg-fd-accent/30"
        >
          <span aria-hidden="true" className="text-3xl">
            💡
          </span>
          <h3 className="mt-3 font-display text-xl font-bold group-hover:text-fd-primary">{p.ideaTitle}</h3>
          <p className="mt-2 text-sm text-fd-muted-foreground">{p.ideaText}</p>
        </Link>
      </div>
      <p className="mt-8 text-center">
        <Link href={localePath(lang, '/association/projects')} className={buttonSecondary}>
          {p.all} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </p>
    </section>
  );
}

function FinalCta({ lang, t }: { lang: Lang; t: HomeText }) {
  const cta = t.finalCta;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border bg-fd-card px-6 py-16 text-center md:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,var(--fc-lime),transparent_45%),radial-gradient(circle_at_85%_-20%,var(--fc-violet),transparent_45%)] opacity-25"
        />
        <div
          aria-hidden="true"
          className="fc-twinkle pointer-events-none absolute inset-0 bg-stars text-fd-foreground/30"
        />
        <div className="relative">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {cta.titleStart} <span className="text-gradient">{cta.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fd-muted-foreground">{cta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={links.discord} target="_blank" rel="noreferrer noopener" className={buttonDiscord}>
              <DiscordIcon className="size-4" /> {cta.joinDiscord}
            </a>
            <Link href={localePath(lang, '/association/join')} className={buttonSecondary}>
              {cta.howToJoin} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSections({ lang }: { lang: Lang }) {
  const t = getMessages(lang).home;

  return (
    <>
      <Hero lang={lang} t={t} />
      <FeatureMarquee t={t.marquee} />
      <Paths lang={lang} t={t} />
      <Community t={t} />
      <Creed lang={lang} t={t} />
      <LearningPath lang={lang} t={t} />
      <Projects lang={lang} t={t} />
      <FinalCta lang={lang} t={t} />
    </>
  );
}
