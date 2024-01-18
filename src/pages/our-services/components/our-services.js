   
import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const headerImg = "../../../images/belbyte-services-new.png"
const webImg = "../../../images/web-icon.png"
const hostingImg = "../../../images/hosting-icon.png"
const seoImg = "../../../images/seo-icon.png"
const emailImg = "../../../images/email-icon.png"
const dmImg = "../../../images/dm-icon.png"
const itImg = "../../../images/out-icon.png"


function Services() {

    return ( 
            <div className="service">
              <div className="service-overlay"></div>
                <div className="header">
                
                <div className="header-image">
                <div className="header-overlay"></div>
                  <StaticImage src={headerImg}/>
                    <div className="header-text">
                        <h1>Our <span>Services</span></h1>
                    </div>
                
                </div> 
             

                </div>
                <div className="service-main">
                    <div className="row">
                       <div className="col-sm-4">
                        <div className="service-cont">
                            <div className="head-icon">
                              <StaticImage src={webImg} />
                            </div>
                            <div className="featured">
                               <h1>Web Development</h1>
                               <span>
                                <p>
                                     Our specialty is designing and developing stunning websites according to your business needs. We develop everything from scratch and don't rely on any purchased templates - since we like to have full control over the entire design to 
                                     mold it to your exact likings. However, if you have a template you wish to use as your website, our extraordinary team is well versed on any technology and they will have no problem working with your template to get the ball rolling. One of the greatest advantages of developing everything from scratch, is the SEO portion of things, making your site fully crawled by google and boosting your
                                     search results so you are always first choice on any search engines - thus incresing your sales. Our standard prices on our packages include all tools and features to have your website designed and developed with no hassle at all!
                                     


                                </p>
                               </span>
                               <div className="footer-icon">
                                <a href="">
                                  <i aria-hidden="true" class="fa fa-arrow-right"></i>
                                </a>
                               </div>
                            </div>
                        </div>

                       </div>
                       <div className="col-sm-4">
                        <div className="service-cont">
                            <div className="head-icon">
                              <StaticImage src={hostingImg} />
                            </div>
                            <div className="featured">
                               <h1>Hosting</h1>
                               <span>
                                <p>
                                At Belbyte Designs, our hosting services are designed to provide a seamless and reliable online presence for your business. We specialize in hosting websites, domains, and emails, ensuring that your digital assets are secure and accessible at all times. Our robust hosting infrastructure is equipped to handle the diverse needs of our clients, offering a combination of speed, security, and scalability. Whether you're launching a new website, managing domains, or organizing your email communications, our hosting solutions are tailored to optimize your online experience. Trust us to provide a stable and efficient hosting environment, allowing you to focus on what matters most – growing your business. With Belbyte Designs, your digital presence is in capable hands. Feel free to check out our hosting packages and contact us today!
                                </p>
                               </span>
                               <div className="footer-icon">
                                <a href="">
                                  <i aria-hidden="true" class="fa fa-arrow-right"></i>
                                </a>
                               </div>
                            </div>
                        </div>

                       </div>
                       <div className="col-sm-4">
                        <div className="service-cont">
                            <div className="head-icon">
                              <StaticImage src={seoImg} />
                            </div>
                            <div className="featured">
                               <h1>SEO & Analytics</h1>
                               <span>
                                <p>
                                At Belbyte Designs, we go beyond just creating visually stunning websites; we elevate your online visibility through our comprehensive SEO (Search Engine Optimization) and analytics services. Our team is dedicated to enhancing your website's performance, ensuring it ranks prominently in search engine results. With a strategic approach to SEO, we optimize content, keywords, and metadata, making your site more discoverable to your target audience. Additionally, our analytics services provide valuable insights into user behavior and website performance, allowing you to make informed decisions to further refine and grow your online presence. With Belbyte Designs, not only do we craft captivating websites, but we also empower your business with the tools it needs to thrive in the digital landscape. Please refer to our packages and contact us today!
                                </p>
                               </span>
                               <div className="footer-icon">
                                <a href="">
                                  <i aria-hidden="true" class="fa fa-arrow-right"></i>
                                </a>
                               </div>
                            </div>
                        </div>

                       </div>
                      </div>  
                      <div className="row">
                       <div className="col-sm-4">
                        <div className="service-cont">
                            <div className="head-icon">
                              <StaticImage src={emailImg} />
                            </div>
                            <div className="featured">
                               <h1>Email Providers</h1>
                               <span>
                                <p>
                          
As your comprehensive digital solutions partner, Belbyte Designs extends its services to email provision, ensuring seamless communication for your business. We understand the critical role that effective email communication plays in today's interconnected world. Our email hosting services guarantee reliability, security, and scalability, offering you a professional and efficient means of correspondence. Whether you need personalized email addresses that reflect your brand identity or a robust email infrastructure for your entire team, Belbyte Designs is your go-to provider. Elevate your communication strategy with our tailored email services, and experience a streamlined, professional approach to managing your business correspondence.
                                </p>
                               </span>
                               <div className="footer-icon">
                                <a href="">
                                  <i aria-hidden="true" class="fa fa-arrow-right"></i>
                                </a>
                               </div>
                            </div>
                        </div>

                       </div>
                       <div className="col-sm-4">
                        <div className="service-cont">
                            <div className="head-icon">
                              <StaticImage src={dmImg} />
                            </div>
                            <div className="featured">
                               <h1>Digital Marketing</h1>
                               <span>
                                <p>
                               
At Belbyte Designs, we harness the power of digital marketing to propel your business to new heights. Our dedicated team specializes in creating targeted and results-driven digital marketing campaigns tailored to your unique goals. From social media management to pay-per-click advertising, we craft strategies that maximize your online visibility, engage your audience, and drive conversions. With a focus on data-driven insights and staying ahead of industry trends, we ensure that your brand remains at the forefront of your market. Partner with us for a comprehensive digital marketing solution that amplifies your online presence, connects with your audience, and ultimately accelerates your business growth.</p>
                               </span>
                               <div className="footer-icon">
                                <a href="">
                                  <i aria-hidden="true" class="fa fa-arrow-right"></i>
                                </a>
                               </div>
                            </div>
                        </div>

                       </div>
                       <div className="col-sm-4">
                        <div className="service-cont">
                            <div className="head-icon">
                              <StaticImage src={itImg} />
                            </div>
                            <div className="featured">
                               <h1>IT Outsourcing</h1>
                               <span>
                                <p>
                               
Belbyte Designs extends its expertise beyond just initial development – we are your trusted partner for IT outsourcing, dedicated to maintaining and optimizing your existing websites and internal systems. Our seasoned team of IT professionals is equipped to handle the intricate details of system maintenance, ensuring that your digital assets function seamlessly and remain up-to-date with the latest technologies. Whether it's regular updates, troubleshooting, or enhancements, our outsourcing services provide a cost-effective solution, allowing you to focus on your core business functions while we take care of the technical aspects. We deliver excellence in maintenance and support to keep your digital infrastructure running smoothly.</p>
                               </span>
                               <div className="footer-icon">
                                <a href="">
                                  <i aria-hidden="true" class="fa fa-arrow-right"></i>
                                </a>
                               </div>
                            </div>
                        </div>

                       </div>
                      </div> 
               
                    <a className="link" href="/contact-us">
					             Contact Us
				            </a>
                  </div>
            </div>
       
  );
}

export default Services;



