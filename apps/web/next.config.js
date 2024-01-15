/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  transpilePackages: ['@repo/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.theimageapi.com',
        pathname: '**',
      },
    ],
  },
};
