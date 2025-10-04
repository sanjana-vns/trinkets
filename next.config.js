/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'trinketsinstitute.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
  },
}

module.exports = nextConfig