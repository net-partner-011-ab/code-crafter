/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        domains: ['images.ctfassets.net'],
        unoptimized: true,
    }
}

module.exports = nextConfig
