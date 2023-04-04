import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Header/Header";

const Layout = ({ children,navbar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Navbar navbar={navbar}/>
        <main className="">{children}</main>
      </div>
    </>
  )
}

export default Layout
