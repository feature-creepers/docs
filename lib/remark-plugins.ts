/** Small remark plugins for this site, added to the default Fumadocs ones in `lib/source.ts`. */

interface Node {
  type: string;
  depth?: number;
  lang?: string | null;
  children?: Node[];
}

function collect(node: Node, type: string, found: Node[] = []): Node[] {
  if (node.type === type) found.push(node);
  for (const child of node.children ?? []) collect(child, type, found);
  return found;
}

/**
 * The page title is the page's only `<h1>`. A page that embeds a whole Markdown document with
 * `<include>` (like the CI brief) brings its own `#` headings, so on such pages every heading moves
 * down one level: `#` becomes `<h2>`, `##` becomes `<h3>`, and so on. Pages without `#` headings
 * are left untouched.
 */
export function remarkDemoteHeadings() {
  return (tree: Node) => {
    const headings = collect(tree, 'heading');
    if (!headings.some((heading) => heading.depth === 1)) return;

    for (const heading of headings) {
      if (heading.depth !== undefined && heading.depth < 6) heading.depth += 1;
    }
  };
}

/** Code block languages the highlighter does not ship, mapped to a close one it does. */
const languageAliases: Record<string, string> = {
  gitattributes: 'ini',
};

export function remarkCodeLanguageAliases() {
  return (tree: Node) => {
    for (const code of collect(tree, 'code')) {
      if (code.lang && code.lang in languageAliases) code.lang = languageAliases[code.lang];
    }
  };
}
