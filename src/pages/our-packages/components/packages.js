   import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const headerImg = "../../../images/packages-header.png"


function Packages() {

    return ( 
            <div className="package">
              <div className="package-overlay"></div>
                <div className="header">
                
                <div className="header-image">
                <div className="header-overlay"></div>
                  <StaticImage src={headerImg}/>
                    <div className="header-text">
                        <h1>Our <span>Packages</span></h1>
                    </div>
                
                </div> 
             

                </div>
                <div className="package-main">
                <div class="plans-main">
                <div className="plans-overlay"></div>
                <div className="plans-cont">
                  
                   
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="featured-cont">
                            <div className="pack-overlay"></div>
                                <div className="package-cont">
                                    <h2>Basic</h2>
                                    <h1>$500 BZD</h1>
                                    <p>One Page Website Design & Development</p>
                                    <p>Domain Purchase</p>
                                    <p>Site & Domain Hosting</p>
                                    <p>Live Chat Feature</p>
                                    <p>Free Support</p>
                                </div>
                                <a href="/contact-us/">Choose Plan</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="featured-cont">
                            <div className="pack-overlay"></div>
                                <div className="package-cont">
                                    <h2>Premium</h2>
                                    <h1>$850 BZD</h1>
                                    <p>Multi Page Website Design & Development</p>
                                    <p>Domain Purchase</p>
                                    <p>One Professional Email</p>
                                    <p>Site & Domain Hosting</p>
                                    <p>Embedded Lead Forms</p>
                                    <p>Live Chat Feature</p>
                                    <p>Free Support</p>
                                    <p>SEO & Analytics</p>
                                </div>
                                <a href="/contact-us/">Choose Plan</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="featured-cont">
                            <div className="pack-overlay"></div>
                                <div className="package-cont">
                                    <h2>Custom</h2>
                                    <h1>Hourly Rate</h1>
                                    <p>Mantain your existing Website</p>
                                    <p>Third Party API Integrations</p>
                                    <p>Website Diagnose</p>
                                    <p>Database Maintanance</p>
                                    <p>Internal Systems Maintanance</p>
                                    <p>Digital Marketing Assistance</p>
                                </div>
                                <a href="/contact-us/">Choose Plan</a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="featured-cont">
                            <div className="pack-overlay"></div>
                                <div className="package-cont">
                                    <h2>Hosting</h2>
                                    <h1>$60 BzD Monthly</h1>
                                    <p>One Domain</p>
                                    <p>One Website</p>
                                    <p>Email Server</p>
                                    <p>SSL Certificates</p>
                                </div>
                                <a href="/contact-us/">Choose Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
                     <a href="/contact-us">
					             Contact Us
				            </a>
                  </div>
            </div>
       
  );
}

export default Packages;



