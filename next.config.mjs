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
           },
           {
            protocol : "https",
           hostname : "images.unsplash.com"
           },
           {protocol: "https",
            hostname : "encrypted-tbn0.gstatic.com"
           }
        ],
      },
};

export default nextConfig;
