import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import HeaderMobile from "./header-mobile"
import Footer from "./footer"

import "./../less/main.scss";

import { useStaticQuery, graphql } from "gatsby"




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryAll {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <HeaderMobile siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="App">
      
            <div className="content">
                <div>
                  
                    <main>{children}</main>
                </div>
            </div>
         
            
        </div>
        <Footer />
    </>
);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
