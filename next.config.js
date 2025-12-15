const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    outputFileTracingRoot: path.join(__dirname),
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "/**",
        },
      ],
    },
    
  };

  module.exports = nextConfig;