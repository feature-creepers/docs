import { Sprout } from 'lucide-react';
import Link from 'next/link';
import creepers from '@/data/creepers.json';
import { defaultLang, type Lang, localePath } from '@/lib/i18n';
import { getMessages } from '@/lib/messages';

export interface Creeper {
  /** GitHub username, without the @ */
  github: string;
  /** How you want to be called */
  name: string;
  /** One line about you */
  bio?: string;
  /** The most useless feature you dream of building */
  uselessFeature?: string;
}

const list = (creepers as Creeper[]).toSorted((a, b) => a.name.localeCompare(b.name));

export function WallOfCreepers({ lang = defaultLang }: { lang?: Lang }) {
  const t = getMessages(lang).wall;

  return (
    <div className="not-prose grid gap-3 sm:grid-cols-2">
      {list.map((creeper) => (
        <a
          key={creeper.github}
          href={`https://github.com/${creeper.github}`}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex gap-3 rounded-xl border bg-fd-card p-4 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent/40"
        >
          {/* biome-ignore lint/performance/noImgElement: static export, external avatar */}
          <img
            src={`https://github.com/${creeper.github}.png?size=96`}
            alt=""
            width={48}
            height={48}
            loading="lazy"
            className="size-12 shrink-0 rounded-full border bg-fd-muted"
          />
          <div className="min-w-0 text-sm">
            <p className="font-display font-semibold text-fd-foreground group-hover:text-fd-primary">
              {creeper.name} <span className="font-normal text-fd-muted-foreground">@{creeper.github}</span>
            </p>
            {creeper.bio && <p className="mt-0.5 text-fd-muted-foreground">{creeper.bio}</p>}
            {creeper.uselessFeature && (
              <p className="mt-2 text-xs text-fd-muted-foreground">
                <span className="font-medium text-fd-foreground">{t.dreamFeature}</span> {creeper.uselessFeature}
              </p>
            )}
          </div>
        </a>
      ))}
      <Link
        href={localePath(lang, '/learn/first-pull-request')}
        className="flex items-center gap-3 rounded-xl border border-dashed p-4 text-sm text-fd-muted-foreground transition-colors hover:border-fd-primary hover:text-fd-primary"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-dashed">
          <Sprout className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-display font-semibold text-fd-foreground">
            {list.length === 0 ? t.empty : t.more}
          </span>
          {t.cta}
        </span>
      </Link>
    </div>
  );
}
