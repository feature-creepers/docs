import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { BookOpenText, Download, FileText } from 'lucide-react';
import Link from 'next/link';
import { CopyFileButton } from '@/components/copy-file-button';
import { siteUrl, withBasePath } from '@/lib/shared';

/**
 * A card for a prompt file stored in `public/` (for example `/prompts/ci-infrastructure-brief.md`):
 * copy it, download it, or read it on the site. Sizes are read at build time.
 */
export function PromptFile({ file, title, readHref }: { file: string; title: string; readHref?: string }) {
  const content = readFileSync(join(process.cwd(), 'public', file), 'utf8');
  const lines = content.trimEnd().split('\n').length;
  const kb = Math.round(Buffer.byteLength(content) / 1024);
  const name = file.split('/').pop() ?? file;

  const button =
    'inline-flex items-center gap-2 rounded-full border bg-fd-background px-4 py-2 text-sm font-medium transition-colors hover:border-fd-primary/60 hover:text-fd-primary';

  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border bg-fd-card">
      <div className="flex flex-wrap items-center gap-4 p-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
          <FileText className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display font-semibold">{title}</p>
          <p className="truncate font-mono text-xs text-fd-muted-foreground">
            {name} · {lines.toLocaleString('en-US')} lines · {kb} KB
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t bg-fd-muted/40 px-5 py-4">
        <CopyFileButton url={withBasePath(file)} className={button} />
        <a href={withBasePath(file)} download={name} className={button}>
          <Download className="size-4" aria-hidden="true" />
          Download
        </a>
        {readHref && (
          <Link href={readHref} className={button}>
            <BookOpenText className="size-4" aria-hidden="true" />
            Read it here
          </Link>
        )}
      </div>
      <p className="border-t px-5 py-3 font-mono text-[11px] break-all text-fd-muted-foreground">
        {siteUrl}
        {file}
      </p>
    </div>
  );
}
