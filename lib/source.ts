import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/plugins/lucide-icons';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { applyMdxPreset } from 'fumadocs-mdx/config';
import { defineDocs } from 'fumadocs-mdx/macro';
import { z } from 'zod';
import { i18n } from './i18n';
import { remarkCodeLanguageAliases, remarkDemoteHeadings } from './remark-plugins';
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
    // the default Fumadocs plugins, plus ours (see lib/remark-plugins.ts)
    mdxOptions: applyMdxPreset({ remarkPlugins: [remarkDemoteHeadings, remarkCodeLanguageAliases] }),
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
  i18n,
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${siteUrl}${page.url})

${await page.data.getText('processed')}`,
});

export { docsContentRoute, docsImageRoute };
