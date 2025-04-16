/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.calculalaboral.com'],
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
