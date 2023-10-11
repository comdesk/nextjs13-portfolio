/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.notion.so',
            'images.unsplash.com',
            'src.hidoc.co.kr',
            'prod-files-secure.s3.us-west-2.amazonaws.com',
            'species.nibr.go.kr'
        ]
    }
}

module.exports = nextConfig
