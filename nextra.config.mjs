import { defineConfig } from 'nextra'

export default defineConfig({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: true,
  defaultShowCopyCode: true,
  staticImage: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
}) 