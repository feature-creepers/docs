import type { ReactNode } from 'react';

type Line = { kind: 'cmd' | 'ok' | 'info'; content: ReactNode };

const lines: Line[] = [
  { kind: 'cmd', content: 'creep new todo-app' },
  { kind: 'ok', content: 'Created todo-app (1 feature, how boring)' },
  { kind: 'cmd', content: 'creep add "dark mode"' },
  { kind: 'ok', content: 'Feature #2 added' },
  { kind: 'cmd', content: 'creep add "dark mode for the dark mode"' },
  { kind: 'ok', content: 'Feature #3 added' },
  { kind: 'cmd', content: 'creep add "confetti on every keystroke"' },
  { kind: 'ok', content: 'Feature #4 added 🎉' },
  { kind: 'cmd', content: 'creep add "AI that names variables after cheeses"' },
  { kind: 'ok', content: 'Feature #5 added 🧀' },
  { kind: 'cmd', content: 'creep status' },
  {
    kind: 'info',
    content: (
      <>
        features: <span className="text-fc-violet">5 → ∞</span> · scope:{' '}
        <span className="text-fc-orange">what scope?</span>
      </>
    ),
  },
  {
    kind: 'info',
    content: (
      <>
        happiness: <span className="text-fc-lime">██████████</span> 100%
      </>
    ),
  },
];

export function Terminal() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-fc-lime/60 via-fc-green/20 to-fc-violet/60 opacity-70 blur-[2px]" />
      <figure
        aria-label="A fake terminal session adding more and more features to a todo app"
        className="relative overflow-hidden rounded-2xl border bg-fd-card/95 shadow-2xl shadow-fc-violet/10 backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-fd-muted-foreground">~/side-projects/todo-app</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
          {lines.map((line, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list
              key={i}
              className="fc-line whitespace-pre"
              style={{ animationDelay: `${0.25 + i * 0.32}s` }}
            >
              {line.kind === 'cmd' && (
                <>
                  <span className="text-fc-lime">❯</span> <span className="text-fd-foreground">{line.content}</span>
                </>
              )}
              {line.kind === 'ok' && (
                <span className="text-fd-muted-foreground">
                  <span className="text-fc-green">✔</span> {line.content}
                </span>
              )}
              {line.kind === 'info' && <span className="text-fd-muted-foreground"> {line.content}</span>}
            </div>
          ))}
          <div className="fc-line" style={{ animationDelay: `${0.25 + lines.length * 0.32}s` }}>
            <span className="text-fc-lime">❯</span>{' '}
            <span className="fc-cursor inline-block h-4 w-2 translate-y-0.5 bg-fd-foreground" />
          </div>
        </pre>
      </figure>
    </div>
  );
}
