/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',  // هذا مهم جداً
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
