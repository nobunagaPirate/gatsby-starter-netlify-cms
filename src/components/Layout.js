import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"English Web"} />
      <div className="container">
        <main className="container-main">{children}</main>
        <Footer siteTitle={"title"} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
