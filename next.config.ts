import withNextra from 'nextra'
import { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@genkit/react'],
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'placehold.co',
    ],
  },
}

export default withNextra({
  defaultShowCopyCode: true,
  staticImage: true,
})(config)
