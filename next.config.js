const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  staticImage: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'placehold.co',
    ],
  },
}); 