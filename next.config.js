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
    }
};


