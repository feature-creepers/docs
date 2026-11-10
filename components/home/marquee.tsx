const rowA = [
  '🌗 Dark mode for the dark mode',
  '🎉 Confetti on every git push',
  '⚙️ A settings page for the settings page',
  '🧀 Variables named after cheeses',
  '↩️ Undo for the undo button',
  '⏳ A loading bar for the loading bar',
  '🏆 Achievements for closing browser tabs',
  '🔘 A button that does nothing, beautifully',
];

const rowB = [
  '📜 README written as a sonnet',
  '🥚 An easter egg inside the easter egg',
  '⌨️ A shortcut that opens more shortcuts',
  '🌦️ Weather widget for the server room',
  '🎵 Playlists generated from commit messages',
  '🤖 An AI that apologizes for the other AI',
  '📳 Haptic feedback for the terms of service',
  '🗂️ A to-do list for your to-do lists',
];

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

export function FeatureMarquee() {
  return (
    <section aria-labelledby="useless-features" className="fc-marquee-paused border-y bg-fd-muted/40 py-8">
      <h2
        id="useless-features"
        className="mb-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-fd-muted-foreground"
      >
        Feature requests we would happily accept
      </h2>
      <div className="flex flex-col gap-3">
        <Row items={rowA} duration="70s" />
        <Row items={rowB} duration="80s" reverse />
      </div>
    </section>
  );
}
