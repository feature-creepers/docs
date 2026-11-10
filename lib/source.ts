import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/plugins/lucide-icons';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { defineDocs } from 'fumadocs-mdx/macro';
import { z } from 'zod';
import { docsContentRoute, docsImageRoute, docsRoute, siteUrl } from './shared';

/** Extra frontmatter for tutorials: shown as a small badge row under the title. */
const docSchema = pageSchema.extend({
  level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  duration: z.string().optional(),
});

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: docSchema,
    lastModified: true,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${siteUrl}${page.url})

${await page.data.getText('processed')}`,
});

export { docsContentRoute, docsImageRoute };
