import type { Messages } from '@/lib/messages';

export function Terminal({ t }: { t: Messages['home']['terminal'] }) {
  const total = t.lines.length + 2;

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-fc-lime/60 via-fc-green/20 to-fc-violet/60 opacity-70 blur-[2px]" />
      <figure
        aria-label={t.label}
        className="relative overflow-hidden rounded-2xl border bg-fd-card/95 shadow-2xl shadow-fc-violet/10 backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-fd-muted-foreground">{t.folder}</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
          {t.lines.map((line, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="fc-line whitespace-pre"
              style={{ animationDelay: `${0.25 + i * 0.32}s` }}
            >
              {line.kind === 'cmd' ? (
                <>
                  <span className="text-fc-lime">❯</span> <span className="text-fd-foreground">{line.text}</span>
                </>
              ) : (
                <span className="text-fd-muted-foreground">
                  <span className="text-fc-green">✔</span> {line.text}
                </span>
              )}
            </div>
          ))}
          <div className="fc-line whitespace-pre" style={{ animationDelay: `${0.25 + t.lines.length * 0.32}s` }}>
            <span className="text-fd-muted-foreground">
              {'  '}
              {t.features}: <span className="text-fc-violet">5 → ∞</span> · {t.scope}:{' '}
              <span className="text-fc-orange">{t.scopeValue}</span>
            </span>
          </div>
          <div className="fc-line whitespace-pre" style={{ animationDelay: `${0.25 + (t.lines.length + 1) * 0.32}s` }}>
            <span className="text-fd-muted-foreground">
              {'  '}
              {t.happiness}: <span className="text-fc-lime">██████████</span> 100%
            </span>
          </div>
          <div className="fc-line" style={{ animationDelay: `${0.25 + total * 0.32}s` }}>
            <span className="text-fc-lime">❯</span>{' '}
            <span className="fc-cursor inline-block h-4 w-2 translate-y-0.5 bg-fd-foreground" />
          </div>
        </pre>
      </figure>
    </div>
  );
}
