import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const headerImg = "../../../images/outsourcing-header.png"


function Out() {

    return ( 
            <div className="outsourcing">
              <div className="outsourcing-overlay"></div>
                <div className="header">
                
                <div className="header-image">
                <div className="header-overlay"></div>
                  <StaticImage src={headerImg}/>
                    <div className="header-text">
                        <h1>Our <span>Outsourcing Services</span></h1>
                    </div>
                
                </div> 
             

                </div>
                <div className="outsourcing-main">
                  
                   <p>
                    

                   Belbyte Designs is your dedicated partner for IT outsourcing services, offering a comprehensive suite of solutions to maintain, optimize, and troubleshoot your existing websites and internal systems. If you find yourself without an in-house IT team, we step in to fill the gap, ensuring the seamless functionality and security of your digital infrastructure. Our experienced professionals specialize in regular updates, troubleshooting, and enhancements, providing a cost-effective and efficient solution for businesses of all sizes. Trust us to handle the technical intricacies, allowing you to focus on your core operations with confidence. Whether it's website maintenance or internal system support, Belbyte Designs is here to ensure your digital assets operate at peak performance, contributing to the overall success of your business.
<br /><br />Feel free to give us a shout if you need any additional info so we can schedule a call and provide you with all 
the details of our services.
                   </p>
               
                     <a href="/contact-us">
					             Contact Us
				            </a>
                  </div>
            </div>
       
  );
}

export default Out;



