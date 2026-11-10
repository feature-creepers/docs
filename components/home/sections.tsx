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
import { GithubIcon } from '@/components/icons';
import { cn } from '@/lib/cn';
import { links } from '@/lib/shared';
import { FeatureMarquee } from './marquee';
import { Terminal } from './terminal';

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring';
const buttonPrimary = cn(
  buttonBase,
  'bg-fd-primary text-fd-primary-foreground shadow-lg shadow-fc-lime/20 hover:-translate-y-0.5 hover:shadow-fc-lime/40',
);
const buttonSecondary = cn(buttonBase, 'border bg-fd-card hover:border-fd-primary/60 hover:text-fd-primary');

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fd-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-fd-muted-foreground">{children}</p>}
    </div>
  );
}

function Hero() {
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
            Developer association · France · since 2022
          </p>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-5xl xl:text-[3.9rem]">
            Build awesome apps.
            <br />
            And dumb ones.
            <br />
            <span className="text-gradient">With way too many features.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-fd-muted-foreground">
            Feature Creepers is a crew of developers who build for the fun of it. We ship side projects, games and
            gloriously useless features, and we help newcomers fall in love with code too.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learn" className={buttonPrimary}>
              Start learning <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/association" className={buttonSecondary}>
              Meet the crew
            </Link>
          </div>
          <p className="mt-6 text-sm text-fd-muted-foreground">
            No experience required. Bad ideas welcome. Scope creep encouraged.
          </p>
        </div>

        <div className="relative min-w-0">
          <span aria-hidden="true" className="fc-float absolute -top-8 -right-2 z-10 text-4xl select-none">
            🚀
          </span>
          <span
            aria-hidden="true"
            className="fc-float absolute -bottom-6 -left-4 z-10 text-3xl select-none [animation-delay:-3s]"
          >
            🌙
          </span>
          <Terminal />
        </div>
      </div>
    </section>
  );
}

const paths = [
  {
    href: '/association',
    icon: Users,
    title: 'The Association',
    text: 'Who we are, what we believe in, what we do together, and how to join. The "serious" part. It is short.',
    cta: 'Meet the crew',
    accent: 'from-fc-violet/25',
  },
  {
    href: '/learn',
    icon: GraduationCap,
    title: 'Learn',
    text: 'From "what is a terminal?" to shipping with AI coding agents. Beginner-friendly, no gatekeeping, no dumb questions.',
    cta: 'Start the path',
    accent: 'from-fc-lime/25',
  },
  {
    href: '/handbook',
    icon: BookOpenText,
    title: 'Handbook',
    text: 'For when your toy project becomes a real app: tests, continuous integration and infrastructure that keeps up.',
    cta: 'Open the handbook',
    accent: 'from-fc-orange/25',
  },
];

function Paths() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Pick your door" title="Three ways in">
        Whether you want to join, learn, or level up a project that got out of hand.
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-3">
        {paths.map(({ href, icon: Icon, title, text, cta, accent }) => (
          <Link
            key={href}
            href={href}
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
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{text}</p>
              <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fd-primary">
                {cta}{' '}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const creed = [
  {
    title: 'Every idea deserves a branch.',
    text: 'Dumb ideas are how good ideas get prototyped. Nobody here will ask "but why?" Well, they will, but out of curiosity.',
  },
  {
    title: 'Ship it, then laugh at it.',
    text: 'Done and silly beats perfect and imaginary. A deployed joke teaches you more than a planned masterpiece.',
  },
  {
    title: 'Nobody learns alone.',
    text: 'Ask questions, pair up, review each other’s code. Kindly. Everybody was a beginner who broke production once.',
  },
  {
    title: 'Use the robots, keep the brain.',
    text: 'AI coding agents are power tools. We use them a lot, and we stay the ones who understand and own the code.',
  },
];

function Creed() {
  return (
    <section className="relative overflow-hidden border-y bg-fd-muted/30">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="The creed" title="What a Feature Creeper believes" />
        <ol className="grid gap-5 sm:grid-cols-2">
          {creed.map((item, i) => (
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
          <Link href="/association/mission" className={buttonSecondary}>
            Read the full manifesto
          </Link>
        </p>
      </div>
    </section>
  );
}

const steps = [
  { href: '/learn/terminal', icon: SquareTerminal, title: 'The terminal', text: 'Talk to your computer in text.' },
  { href: '/learn/setup', icon: Laptop, title: 'Set up your machine', text: 'Editor, Node.js, package managers.' },
  { href: '/learn/git', icon: GitBranch, title: 'Git', text: 'Save points for your code.' },
  { href: '/learn/github', icon: GithubIcon, title: 'GitHub', text: 'Where code lives and people meet.' },
  {
    href: '/learn/first-pull-request',
    icon: GitPullRequest,
    title: 'Your first pull request',
    text: 'Sign the Wall of Creepers.',
  },
  { href: '/learn/ai-agents', icon: Bot, title: 'AI coding agents', text: 'Claude Code, Codex, T3 Code.' },
  { href: '/learn/prompting', icon: MessageSquareText, title: 'Prompting', text: 'Ask well, get good code.' },
  { href: '/learn/agents-md', icon: FileCode2, title: 'AGENTS.md', text: 'A README for your robots.' },
  { href: '/handbook/testing-and-ci', icon: FlaskConical, title: 'Tests & CI', text: 'Ship without fear.' },
];

function LearningPath() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="The learning path" title="From zero to shipping, one step at a time">
        Never opened a terminal? Perfect, that is step one. Every tutorial is written for real beginners and takes less
        time than a coffee break (a long one).
      </SectionHeading>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ href, icon: Icon, title, text }, i) => (
          <li key={href}>
            <Link
              href={href}
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

const projects = [
  {
    name: 'Suntzu',
    emoji: '⚔️',
    text: 'A browser extension that enhances FACEIT with detailed matchmaking insights. Know your enemy, know yourself.',
    tags: ['TypeScript', 'React', 'Nx', 'Browser extension'],
    links: [
      { label: 'suntzu.gg', href: 'https://suntzu.gg' },
      { label: 'Source', href: 'https://github.com/feature-creepers/suntzu' },
    ],
  },
  {
    name: 'csbot',
    emoji: '🎯',
    text: 'A second-screen companion for Counter-Strike 2 squads: scouting, live calls and debriefs, powered by the host’s own Claude Code.',
    tags: ['TypeScript', 'Electron', 'Claude Code', 'Peer-to-peer'],
    links: [{ label: 'Source', href: 'https://github.com/feature-creepers/csbot' }],
  },
  {
    name: 'Top secret',
    emoji: '🤫',
    text: 'More projects are cooking in private repositories. They will show up here when they are ready to embarrass us in public.',
    tags: ['Soon™'],
    links: [],
  },
];

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHeading eyebrow="Made by creepers" title="Things we shipped (with extra features)">
        Real projects, used by real people, built by people who could not stop adding things.
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col rounded-2xl border bg-fd-card p-6">
            <span aria-hidden="true" className="text-3xl">
              {project.emoji}
            </span>
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
            {project.links.length > 0 && (
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
            )}
          </article>
        ))}
        <Link
          href="/association/join"
          className="group flex flex-col justify-center rounded-2xl border border-dashed p-6 text-center transition-colors hover:border-fd-primary hover:bg-fd-accent/30"
        >
          <span aria-hidden="true" className="text-3xl">
            💡
          </span>
          <h3 className="mt-3 font-display text-xl font-bold group-hover:text-fd-primary">Your dumb idea</h3>
          <p className="mt-2 text-sm text-fd-muted-foreground">It belongs here. Come build it with us.</p>
        </Link>
      </div>
    </section>
  );
}

function FinalCta() {
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
            Got a dumb idea? <span className="text-gradient">Perfect.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fd-muted-foreground">
            That is the only entry requirement. Bring your curiosity, your questions and your most useless feature
            request. We will bring the snacks and the code reviews.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/association/join" className={buttonPrimary}>
              Join the crew <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={links.org} target="_blank" rel="noreferrer noopener" className={buttonSecondary}>
              <GithubIcon className="size-4" /> Visit us on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <Hero />
      <FeatureMarquee />
      <Paths />
      <Creed />
      <LearningPath />
      <Projects />
      <FinalCta />
    </>
  );
}
