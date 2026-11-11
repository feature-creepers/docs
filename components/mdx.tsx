import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Card, type CardProps } from 'fumadocs-ui/components/card';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';
import { ProjectLogo } from '@/components/project-logo';
import { PromptFile } from '@/components/prompt-file';
import { WallOfCreepers } from '@/components/wall-of-creepers';
import { defaultLang, type Lang, localizeHref } from '@/lib/i18n';

/**
 * Components available in every MDX page. Content uses the same absolute links in every language
 * (`/learn/git`); on French pages, links and cards get the `/fr` prefix here.
 */
export function getMDXComponents(components?: MDXComponents, lang: Lang = defaultLang) {
  const DefaultLink = defaultMdxComponents.a;

  return {
    ...defaultMdxComponents,
    a: (props: ComponentProps<'a'>) => <DefaultLink {...props} href={localizeHref(props.href, lang)} />,
    // biome-ignore lint/correctness/noComponentHookFactories: binds the page language; built on the server once per page
    Card: (props: CardProps) => <Card {...props} href={localizeHref(props.href, lang)} />,
    Accordion,
    Accordions,
    File,
    Files,
    Folder,
    ProjectLogo,
    // biome-ignore lint/correctness/noComponentHookFactories: binds the page language; built on the server once per page
    PromptFile: (props: ComponentProps<typeof PromptFile>) => <PromptFile lang={lang} {...props} />,
    Step,
    Steps,
    Tab,
    Tabs,
    // biome-ignore lint/correctness/noComponentHookFactories: binds the page language; built on the server once per page
    WallOfCreepers: () => <WallOfCreepers lang={lang} />,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
