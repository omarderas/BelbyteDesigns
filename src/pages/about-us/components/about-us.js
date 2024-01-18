   
import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const headerImg = "../../../images/belbyte-about-new.png"


function About({data}) {

    return ( 
            <div className="about">
              <div className="about-overlay"></div>
                <div className="header">
                
                <div className="header-image">
                <div className="header-overlay"></div>
                  <StaticImage src={headerImg}/>
                    <div className="header-text">
                        <h1>About <span>Belbyte Designs</span></h1>
                    </div>
                
                </div> 
             

                </div>
                <div className="info-main">
                  
                   <p>
                    
Belbyte Designs emerged in early 2017 out of a realization that many businesses were lagging behind in the digital age due to a lack of technological adaptation and inadequate digital marketing tools. Recognizing the challenges of competing with established businesses in the web services industry, we took a unique approach. Rather than following the traditional business model, we formed a dynamic team of freelancers - all with a vast knowledge and expertise in the industry. This unconventional strategy not only sets us apart but also enables us to offer unbeatable prices. We pride ourselves on operating differently and approaching projects with a fresh perspective. In Belize, we stand out as the best in the industry, not only for our affordability but also for the unparalleled quality of our work and services. <br /><br />

At Belbyte Designs, we are dedicated to bringing innovation and excellence to every project we undertake.
We understand that this might be a big step in emerging businesses, and it might appear as a risk to take
- reason we compiled our packages at the lowest prices possible, and even offer FREE consultation to discuss 
your project. Once you have booked a project with us, one of our experienced freelancers is assigned to you, and his responsibility is
to tend to all your needs from the start to finish. Making the process as transparent as possible and
keeping you in the loop of everything. After your project has been launched, the assigned freelancer 
conducts monthly meetings in accordance to your schedule to ensure all is good and all your expectations are
being met, this also includes Free support, meaning any small changes you may need will totally be free of cost.

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

export default About;



