import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";


const MainLogo = "../images/BelByte-Logo---color-.png";
const Insta = "../images/insta.png";
const FB = "../images/fb-new.png";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-3">
                <div className="footer-content">
                <a class="footer-brand" href="#">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
                <p>Your dedicated partner in navigating the ever-evolving digital landscape. Elevate your business with our comprehensive suite of services and step into a future of digital success.</p>
                  
                </div>
            </div>
            <div className="col-sm-3">
               <div className="footer-content">
                <h1>Our Services</h1>
                <ul class="services">
                    <li>
                        <a href="">Web Design & Development</a>
                    </li>
                    <li>
                        <a href="">Domain Purchase and Transfers</a>
                    </li>
                    <li>
                        <a href="">Hosting Services</a>
                    </li>
                    <li>
                        <a href="">Email Providers</a>
                    </li>
                    <li>
                        <a href="">SEO & Analytics</a>
                    </li>
                </ul>
               </div>
            </div>
            <div className="col-sm-3 second">
                <div className="footer-content">
                    <h1>Contact Us</h1>
                    <a href="tel:5016253869">
                        <i class="fa fa-phone"></i> 
                        <span>+(501) 625-3869</span>
                    </a><br />
                    <a href="mailto:support@belbytedesigns.com">
                     <i class="fa fa-envelope"></i> 
                       <span>support@belbytedesigns.com</span> 
                       </a><br />
                    
                       <a href="">
                       <i class="fa fa-clock-o"></i>
                         <span>Mon - Sun, 8:00am to 5:00pm CST</span> 
                        </a>
                        
                        <ul className="social">
                            <li>
                                <a href="">
                                    <StaticImage src={Insta} />
                                </a>
                            </li>
                            <li class="facebook">
                                <a href="">
                                <StaticImage src={FB} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            
            <div className="col-sm-3">
               <div className="footer-content">
                 <h1>Get an Estimate</h1>
                 <div id="fomr-contact">
                 <div class="elfsight-app-31b10732-fc3e-4203-a466-45966adbf3f7" data-elfsight-app-lazy></div>
                 </div>
               </div>
            </div>
        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Belbyte Designs. All Rights Reserved. Belize.</p>
        </div>
     
	</div>
                              
                               
    );
}

export default Footer;

