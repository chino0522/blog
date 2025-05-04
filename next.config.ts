import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  turbopack: {
    // Add any necessary Turbopack configurations, e.g., for loaders:
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    // Or for resolve aliases:
    resolveAlias: {
      underscore: 'lodash',
    },
  },
  // Add other configurations here
};

export default withContentlayer(nextConfig);