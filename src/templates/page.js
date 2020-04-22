
import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <Layout>
        <div className="post-template">
          <div dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`