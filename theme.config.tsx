import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 'bold' }}>DasVerb</span>,
  project: {
    link: 'https://github.com/yourusername/dasVerb',
  },
  docsRepositoryBase: 'https://github.com/yourusername/dasVerb/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – DasVerb'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="DasVerb Documentation" />
      <meta property="og:description" content="Modern German Language Learning Platform" />
    </>
  ),
  footer: {
    text: 'DasVerb - Modern German Language Learning',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => (
      <span style={{ fontWeight: 'bold' }}>{title}</span>
    ),
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
}

export default config 