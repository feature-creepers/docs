import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const ogSize = { width: 1200, height: 630 };

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 800; style: 'normal' }[]> | undefined;

/** Brand font for OG images, vendored in assets/fonts so builds never depend on the network. */
export function loadOgFonts() {
  fonts ??= Promise.all(
    ([400, 800] as const).map(async (weight) => ({
      name: 'Bricolage Grotesque',
      data: await readFile(join(process.cwd(), 'assets/fonts', `bricolage-grotesque-latin-${weight}.woff`)),
      weight,
      style: 'normal' as const,
    })),
  );
  return fonts;
}
