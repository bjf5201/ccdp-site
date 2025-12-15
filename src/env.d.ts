/// <reference types="astro/client" />

declare module '*.md' {
  export const frontmatter: {
    title: string;
    slug: string;
    date: string;
    summary: string;
    tags?: string[];
  };
  const Content: any;
  export default Content;
}

/*declare module '*.astro' {
  const Component: any;
  export default Component;
}*/

export type MarkdownPost = {
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    summary: string;
    tags?: string[];
  };
}