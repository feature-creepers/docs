import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

/**
 * The Feature Creepers mark: a sprout that will not stop growing.
 * The gradient is a CSS background (not an SVG <linearGradient>), so several copies
 * of the logo on one page never fight over the same element id.
 */
export function LogoMark({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-7 shrink-0 items-center justify-center rounded-[28%] bg-linear-135 from-[#bef264] via-[#22c55e] to-[#7c3aed]',
        className,
      )}
      {...props}
    >
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-full">
        <path
          d="M16 25.5c0-3.6 0-6.9.2-10.5M10.5 25.5h11"
          stroke="#0c0b15"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 18.6c-4.6.2-7.6-2.4-8-7.3 4.7-.3 7.7 2.3 8 7.3Z" fill="#0c0b15" />
        <path d="M16.2 15.2c-.1-5 2.6-8.2 7.8-8.6.2 5.1-2.6 8.2-7.8 8.6Z" fill="#0c0b15" />
        <path d="M24.6 18.2l.55 1.45 1.45.55-1.45.55-.55 1.45-.55-1.45-1.45-.55 1.45-.55.55-1.45Z" fill="#0c0b15" />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark />
      <span className="font-display text-[15px] font-bold tracking-tight">
        Feature<span className="text-fd-primary">Creepers</span>
      </span>
    </span>
  );
}
