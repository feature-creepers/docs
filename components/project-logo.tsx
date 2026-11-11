import { cn } from '@/lib/cn';
import { withBasePath } from '@/lib/shared';

/** A project's own logo, from `public/projects/`. The files keep each project's real branding. */
export function ProjectLogo({ src, name, className }: { src: string; name: string; className?: string }) {
  return (
    // biome-ignore lint/performance/noImgElement: static export, small logo files
    <img
      src={withBasePath(src)}
      alt={`${name} logo`}
      width={48}
      height={48}
      loading="lazy"
      className={cn('not-prose size-12 shrink-0', className)}
    />
  );
}
