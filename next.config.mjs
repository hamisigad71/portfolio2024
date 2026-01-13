/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const useStaticExport = process.env.NEXT_STATIC_EXPORT === "true";

const nextConfig = {
  ...(useStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
        },
      }
    : {}),
  images: {
    unoptimized: true,
    domains: ["fonts.gstatic.com", "fonts.googleapis.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
  // Prevent chunk loading errors
  experimental: {
    esmExternals: false,
  },
  // Handle network timeouts gracefully
  env: {
    NEXT_FONT_GOOGLE_TIMEOUT: "5000",
  },
  // Configure webpack for chunk optimization
  webpack: (config, { isServer }) => {
    // Add fallback for font loading issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      dns: false,
      tls: false,
    };

    // Optimize chunk splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 20,
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }

    // Increase chunk timeout
    config.output = {
      ...config.output,
      chunkLoadTimeout: 30000, // 30 seconds
    };

    return config;
  },
  // Add retry logic for chunk loading
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
