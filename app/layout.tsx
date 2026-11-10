import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google';
import { Provider } from '@/components/provider';
import { appDescription, appName, appTagline, siteUrl } from '@/lib/shared';
import './global.css';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
});

const code = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} · ${appTagline}`,
    template: `%s · ${appName}`,
  },
  description: appDescription,
  applicationName: appName,
  keywords: [
    'Feature Creepers',
    'developer association',
    'tutorials',
    'beginners',
    'git',
    'github',
    'cli',
    'claude code',
    'codex',
    't3 code',
    'AGENTS.md',
    'prompting',
  ],
  openGraph: {
    type: 'website',
    siteName: appName,
    title: appName,
    description: appDescription,
    locale: 'en_US',
    images: { url: '/og-image.png', width: 1200, height: 630, alt: `${appName}: ${appTagline}` },
  },
  twitter: {
    card: 'summary_large_image',
    title: appName,
    description: appDescription,
    images: '/og-image.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fbf5' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0b15' },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable} ${code.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
