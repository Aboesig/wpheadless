const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.title === "forside" ? "/" : edge.node.slug,
      component: slash(pageTemplate),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
