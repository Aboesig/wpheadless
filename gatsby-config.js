/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "https://headlesswp.wp.prod.ng.peytz.dk",
        protocol: "https",
        useACF: false,
        hostingWPCOM: false,
        includedRoutes: ["**/categories", "**/posts", "**/pages"],
      },
    },
  ],
}
