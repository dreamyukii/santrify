/** @type {import('next').NextConfig} */
const config={
    images: {
        domains: [
          'santrify-api.domcloud.io',
        ],
      },
}
module.exports = {
    eslint:{
         ignoreDuringBuilds: true,
    },
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


