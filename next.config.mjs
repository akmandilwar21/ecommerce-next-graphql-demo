/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.dummyjson.com", "store-vi5ykv9t.saleor.cloud"],
    },
    experimental: {
        appDir: true,
    },
};

export default nextConfig;
