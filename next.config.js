/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my_portfolio", // استبدل بـ اسم المستودع الخاص بك
  assetPrefix: "/my_portfolio/", // استبدل بـ اسم المستودع الخاص بك
  trailingSlash: true, // يضيف شرطة مائلة في النهاية
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  output: "export", // إضافة هذه السطر لتفعيل التصدير الثابت
};

module.exports = nextConfig;
