/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
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
