/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                basePath: false,
                permanent: true
            }
        ]
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            pathname: '/storage/**',
          },
        ],
    }
};


