require('dotenv').config();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  env: {
    HEALTHCARE_PROVIDERS_API_KEY: process.env.NEXT_PUBLIC_HC_PROVIDERS_API_KEY,
    HEALTHCARE_PROVIDERS_BIN_ID: process.env.NEXT_PUBLIC_HC_PROVIDERS_BIN_ID,
  },
};

module.exports = nextConfig;
