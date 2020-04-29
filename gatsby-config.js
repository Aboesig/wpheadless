/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// In your gatsby-config.js
module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "WPGraphQL",
                fieldName: "wpgraphql",
                url: "http://localhost/wpheadless/graphql",
            },
        },
    ],
}
