import React from "react";
import { Link } from "gatsby";
import "./layout.css"
import '@wordpress/block-library/build-style/style.css';

const Layout = ({ children }) => (
  <>
    <header className="header-wrapper">
      <div className="header-wrapper-inner">
        <Link to="/">Peytz & Co</Link>
      </div>
    </header>
    <main className="container">
      {children}
    </main>
  </>
)

export default Layout;
