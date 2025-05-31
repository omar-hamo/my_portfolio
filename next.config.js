/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my_portfolio", // استبدل بـ اسم المستودع الخاص بك
  assetPrefix: "/my_portfolio/", // استبدل بـ اسم المستودع الخاص بك
  trailingSlash: true, // يضيف شرطة مائلة في النهاية
  output: "export", // تفعيل التصدير الثابت

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  // Remove or comment out the experimental block
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
