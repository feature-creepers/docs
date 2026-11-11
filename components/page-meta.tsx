import { Clock, Gauge } from 'lucide-react';
import { defaultLang, type Lang } from '@/lib/i18n';
import { getMessages } from '@/lib/messages';

const levels = {
  beginner: { emoji: '🌱', className: 'text-fc-green bg-fc-green/10 ring-fc-green/25' },
  intermediate: {
    emoji: '🌿',
    className: 'text-fc-orange bg-fc-orange/10 ring-fc-orange/25',
  },
  advanced: { emoji: '🌳', className: 'text-fc-violet bg-fc-violet/10 ring-fc-violet/25' },
} as const;

export function PageMeta({
  level,
  duration,
  lang = defaultLang,
}: {
  level?: keyof typeof levels;
  duration?: string;
  lang?: Lang;
}) {
  if (!level && !duration) return null;
  const labels = getMessages(lang).docs.levels;

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
      {level && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 ring-inset ${levels[level].className}`}
        >
          <Gauge className="size-3.5" aria-hidden="true" />
          <span aria-hidden="true">{levels[level].emoji}</span> {labels[level]}
        </span>
      )}
      {duration && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-fd-muted px-2.5 py-1 text-fd-muted-foreground ring-1 ring-fd-border ring-inset">
          <Clock className="size-3.5" aria-hidden="true" />
          {duration}
        </span>
      )}
    </div>
  );
}
