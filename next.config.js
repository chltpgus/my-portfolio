/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['drive.google.com'],
        deviceSizes: [480, 768, 1024],
    },
};

module.exports = nextConfig;
