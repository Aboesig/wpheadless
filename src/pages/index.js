import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div className="listed-post" key={node.slug}>
              <Link to={node.slug}>
                <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div className="listed-post" key={node.slug}>
            <Link to={node.slug}>
              <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`