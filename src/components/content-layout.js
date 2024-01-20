import * as React from "react"
import PropTypes from "prop-types"
import ContentHeader from "./header-content"
import HeaderContentMobile from "./header-content-mobile"
import Footer from "./footer"
import "./../less/main.scss";


import { useStaticQuery, graphql } from "gatsby"




const ContentLayout = ({ children }) => {
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
    <HeaderContentMobile siteTitle={data.site.siteMetadata?.title || `Title`} />
       <ContentHeader siteTitle={data.site.siteMetadata?.title || `Title`} />
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

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentLayout
