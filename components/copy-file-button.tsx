'use client';
import { Check, Copy, X } from 'lucide-react';
import { useState } from 'react';

/** Fetches a text file from the site and copies its content to the clipboard. */
export function CopyFileButton({
  url,
  className,
  labels,
}: {
  url: string;
  className?: string;
  labels: { copy: string; copied: string; failed: string };
}) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  async function copy() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      await navigator.clipboard.writeText(await response.text());
      setState('copied');
    } catch {
      setState('failed');
    }
    setTimeout(() => setState('idle'), 2500);
  }

  const Icon = state === 'copied' ? Check : state === 'failed' ? X : Copy;

  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      <Icon className="size-4" aria-hidden="true" />
      {state === 'copied' ? labels.copied : state === 'failed' ? labels.failed : labels.copy}
    </button>
  );
}
