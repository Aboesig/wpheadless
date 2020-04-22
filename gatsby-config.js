/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// In your gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Peytz & Co.",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `https://headlesswp.wp.prod.ng.peytz.dk`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: ["**/categories", "**/posts", "**/pages"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
