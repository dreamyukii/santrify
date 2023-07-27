/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        basePath: false,
        permanent: true,
      },
    ];
  },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "santrify-api.domcloud.io",
//         port: "8000",
//         pathname: "/storage/**",
//       },
//     ],
//   },
};
