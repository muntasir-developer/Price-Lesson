/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.pricelesson.in", // your domain
  generateRobotsTxt: true, // automatically generate robots.txt
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // { userAgent: '*', disallow: '/admin' }, // block pages if needed
    ],
  },
};
