/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ignorar ESLint durante el build
        ignoreDuringBuilds: true,
      },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"sashahotel.s3.us-east-2.amazonaws.com"
            },
            {
                protocol:"https",
                hostname:"sashahotelhotelier.s3.us-east-2.amazonaws.com"
            },
            {
                protocol:"https",
                hostname:"placehold.co",
            }
        ]
    }
};

export default nextConfig;
