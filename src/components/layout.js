import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

const Layout = ({ children }) => {
  const menu = useStaticQuery(graphql`
    query {
      wpgraphql {
        menus {
          nodes {
            menuItems {
              nodes {
                url
                label
              }
            }
          }
        }
        generalSettings {
          url
        }
      }
    }
  `)

  return (
    <>
      <header>
        <Link to="/">My Jamstack WordPress Site</Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout