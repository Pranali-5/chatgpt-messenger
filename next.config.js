/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['links.papareact.com', 'lh3.googleusercontent.com']
    }
}

module.exports = nextConfig
