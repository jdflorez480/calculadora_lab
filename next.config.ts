/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.calculalaboral.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/calculadoralaboral.vercel.app/:path*',
        destination: 'https://www.calculalaboral.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
