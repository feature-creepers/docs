import type { Messages } from '@/lib/messages';

function Row({ items, reverse, duration }: { items: string[]; reverse?: boolean; duration: string }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`fc-marquee flex w-max shrink-0 gap-3 pr-3 ${reverse ? 'fc-marquee-reverse' : ''}`}
        style={{ ['--fc-marquee-duration' as string]: duration }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: duplicated static list
            key={i}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full border bg-fd-card px-4 py-2 text-sm text-fd-muted-foreground shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function FeatureMarquee({ t }: { t: Messages['home']['marquee'] }) {
  return (
    <section aria-labelledby="useless-features" className="fc-marquee-paused border-y bg-fd-muted/40 py-8">
      <h2
        id="useless-features"
        className="mb-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-fd-muted-foreground"
      >
        {t.title}
      </h2>
      <div className="flex flex-col gap-3">
        <Row items={t.rowA} duration="70s" />
        <Row items={t.rowB} duration="80s" reverse />
      </div>
    </section>
  );
}
