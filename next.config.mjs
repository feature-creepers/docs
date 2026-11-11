import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// On GitHub Pages the site lives under /<repo> (e.g. /docs).
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH; locally it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  // Emit `learn/git/index.html` instead of `learn/git.html` so GitHub Pages
  // never has to choose between a file and a folder with the same name.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // English and French each have their own root layout, so the 404 page needs its own document:
    // app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default withMDX(config);
