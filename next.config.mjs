/** @type {import('next').NextConfig} */
const nextConfig = {
 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "www.zillowstatic.com",
           },
           {protocol : "https",
            hostname : "img.staticmb.com"
           }
        ],
      },
};

export default nextConfig;
