   
import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const headerImg = "../../../images/contact-header.png"


function Contact() {

    return ( 
            <div className="contact">
              <div className="contact-overlay"></div>
                <div className="header">
                
                <div className="header-image">
                <div className="header-overlay"></div>
                  <StaticImage src={headerImg}/>
                    <div className="header-text">
                        <h1>Contact <span>Belbyte Designs</span></h1>
                    </div>
                
                </div> 
             

                </div>
                <div className="contact-main">
                  
                   <div className="row">
                    <div className="col-sm-6">
                        <h1>We are the perfect <span>solution for your business</span></h1>
                        <p>Belbyte Designs is your perfect solution for all your digital needs, offering a unique blend of creativity, technical expertise, and personalized service. As a team of skilled freelancers, we bring a dynamic and agile approach to every project. Our unbeatable prices, combined with a commitment to quality, set us apart in the industry. Whether you need a stunning website, reliable hosting services, effective SEO, analytics insights, professional email provision, or IT outsourcing, we've got you covered. With us, you're not just a client; you're a valued partner on a journey to digital success. Trust Belbyte Designs to transform your digital presence into a powerful asset that drives your business forward.</p>
                    </div>
                    <div className="col-sm-6">
                     <ul className="contact-details">
                        <li>
                            <a href="">
                                Tel: +(501) 625-3869
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Email: support@belbytedesigns.com
                            </a>
                        </li>
                     </ul>
                     <div className="form-contact">
                     <div class="elfsight-app-31b10732-fc3e-4203-a466-45966adbf3f7" data-elfsight-app-lazy></div>
                     </div>
                    </div>

                   </div>  
                  </div>
            </div>
       
  );
}

export default Contact;



