/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trinketsinstitute.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 1 minute
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Enhanced experimental features for faster builds
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Remove turbo config to fix deployment issues
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  // Build performance optimizations
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during build for faster deployment
  },
  // Performance optimizations
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: process.env.NODE_ENV === 'production' 
            ? 'public, max-age=0, must-revalidate' 
            : 'no-cache, no-store, must-revalidate',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          value: "frame-src 'self' https://*.google.com https://*.gstatic.com https://*.googleapis.com https://maps.google.com https://www.google.com; default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://*.google.com https://*.gstatic.com; img-src 'self' data: https: https://*.google.com https://*.gstatic.com https://*.googleapis.com; font-src 'self' data: https://*.gstatic.com; connect-src 'self' https: https://*.google.com https://*.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self';",
        },
      ],
    },
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
  // Redirect configuration for SEO
  redirects: async () => [
    {
      source: '/course/:path*',
      destination: '/courses/:path*',
      permanent: true,
    },
    {
      source: '/service/:path*', 
      destination: '/services/:path*',
      permanent: true,
    },
    // Fix 404 errors - redirects for common URL variations
    {
      source: '/courses/pdms-e3d-training',
      destination: '/courses/e3d-piping',
      permanent: true,
    },
    {
      source: '/services/hvac-system-design-mumbai',
      destination: '/services/hvac-system-design-services-mumbai',
      permanent: true,
    },
    {
      source: '/sitemap',
      destination: '/sitemap.xml',
      permanent: false,
    },
  ],
  // Simplified webpack optimizations for faster deployment
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Simple vendor chunk splitting
      config.optimization.splitChunks.cacheGroups.vendor = {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      }
    }
    return config
  },
}

module.exports = nextConfig