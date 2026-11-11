import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

const INK = '#0c0b15';
const PINK = '#f472b6';
const LIME = '#bef264';

/**
 * The Derpcopter: a cross-eyed helicopter with a bent rotor, a leaf growing on its tail and speed
 * lines it did not earn. Its rotors spin when you hover the logo (see `.fc-logo` in global.css).
 *
 * The gradient is a CSS background (not an SVG <linearGradient>), so several copies of the logo on
 * one page never fight over the same element id.
 */
export function LogoMark({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-7 shrink-0 items-center justify-center rounded-[30%] bg-linear-135 from-[#bef264] via-[#22c55e] to-[#7c3aed]',
        className,
      )}
      {...props}
    >
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="size-full overflow-visible">
        {/* speed lines it did not earn */}
        <path d="M6 29h4.5M5 34.5h4.5" stroke="#fff" strokeOpacity=".75" strokeWidth="1.8" strokeLinecap="round" />
        <g transform="rotate(-7 32 34)">
          {/* tail boom, fin, tail rotor and the leaf growing on it */}
          <path d="M40 33 54 27" stroke={INK} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M52.5 27.8 55 20.5l3 1-1.5 7Z" fill={INK} />
          <ellipse className="fc-tail-rotor" cx="56" cy="27.5" rx="1.3" ry="4.6" fill={PINK} />
          <path d="M45.2 30.4c-.4-2.8 1-4.9 3.8-5.6.5 2.8-1 4.9-3.8 5.6Z" fill={LIME} />
          {/* skids */}
          <path d="m22 44-2 5.5M35 44l2 5.5" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
          <path d="M44 50H17c-3 0-4.5-1.4-4.5-3.5" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
          {/* body, mismatched googly eyes, smile and tongue */}
          <ellipse cx="28.5" cy="33" rx="15.5" ry="13" fill={INK} />
          <circle cx="21.5" cy="30" r="6.6" fill="#fff" />
          <circle cx="19.6" cy="32" r="2.9" fill={INK} />
          <circle cx="32.5" cy="28.6" r="4.8" fill="#fff" />
          <circle cx="34.2" cy="27" r="2.2" fill={INK} />
          <path d="M19.5 39q6 5.5 13 .5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M27.2 41.9c1.2-.8 3.4-.9 4.1-.3-.3 2.3-1.6 3.4-2.8 3.3-.8-.5-1.2-1.6-1.3-3Z" fill={PINK} />
          {/* mast, bent rotor and hub */}
          <path d="M29 20.3V13" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
          <path className="fc-rotor" d="M8.5 15Q29 9.5 50 15.8" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="29" cy="12.7" r="2.3" fill={PINK} />
        </g>
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('fc-logo inline-flex items-center gap-2', className)}>
      <LogoMark />
      <span className="font-display text-[15px] font-bold tracking-tight">
        Feature<span className="text-fd-primary">Creepers</span>
      </span>
    </span>
  );
}
