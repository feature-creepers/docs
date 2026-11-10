import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { baseOptions } from '@/lib/layout.shared';

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="relative">
          <p className="font-display text-8xl font-extrabold text-gradient md:text-9xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight">This page got cut from the scope.</h1>
          <p className="mx-auto mt-3 max-w-md text-fd-muted-foreground">
            Which is weird, because we never cut scope. Maybe it is still on a feature branch somewhere. In the
            meantime, here are some pages that actually shipped.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-fd-primary-foreground"
            >
              Back home <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/learn"
              className="rounded-full border px-5 py-2.5 hover:border-fd-primary hover:text-fd-primary"
            >
              Start learning
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </HomeLayout>
  );
}
