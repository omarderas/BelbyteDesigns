import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const UDT = "../../../images/UDT-Main-Logo.avif"
const golden = "../../../images/golden.png"
const inland = "../../../images/inland.png"
const patrick = "../../../images/patrick-tours-new -logo-transparent.png"
const spring = "../../../images/SpringWay-Pools-llc-logo.png"
const yesbelize = "../../../images/cbtga-new.png"

function About() {
	return (
        <div class="about-us">
            <div class="about-overlay"></div>
           <div className="main-about">
            <div className="row">
                <div className="col-sm-6 first">
                    <div className="about-cont">
                        <h2>Get to Know Us</h2>
                        <h1>Welcome to <br /> <span>Belbyte Designs</span></h1>
                        <p>At Belbyte Designs, we're not just a tech company; we're the driving force behind businesses unlocking their full digital potential. Our journey in Belize began with a realization – witnessing promising businesses with immense potential lagging behind in the fast-paced world of technology. We are a dynamic team of skilled freelancers dedicated to providing top-notch website development services. Unlike traditional companies, our approach is personal and tailored to your needs. Our unbeatable prices reflect the advantage of having an individual freelancer assigned to your project, ensuring a focused and customized approach. With us, you're not just getting a website; you're benefiting from the expertise and commitment of a dedicated freelancer devoted to bringing your vision to life. </p>
                        <a href="/about-us/" className="link">Read More</a>
                    </div>
                </div>
                <div className="col-sm-6 first">
                    <div className="about-cont">
                      <div className="row secondary">
                        <div className="col-sm-6">
                            <h1 id="our-work"><span>10+</span></h1>
                            <h2>Years on the Industry</h2>
                        </div>
                        <div className="col-sm-6">
                            <h1><span>100%</span></h1>
                            <h2>Customer Satisfaction</h2>
                            
                        </div>
                      </div>
                      <h2 className="row">Our Most Recent Work:</h2>
                      <div className="row">
                                <div className="col-sm-3">
                                    <a href="https://patricktourbelize.com/" target="_blank" >
                                      <StaticImage src={patrick} />
                                    </a>
                                </div>
                                <div className="col-sm-3">
                                    <a href="https://springwaypoolsllc.com/" target="_blank">
                                      <StaticImage src={spring} />
                                    </a>
                                </div>
                                <div className="col-sm-3">
                                    <a href="https://cavebranchtours.com/" target="_blank">
                                      <StaticImage src={yesbelize} />
                                    </a>
                                </div>
                                <div className="col-sm-3">
                                    <a href="https://dgoldentours.com/" target="_blank">
                                      <StaticImage src={golden} />
                                    </a>
                                </div>
                                
                                <div className="col-sm-3">
                                    <a href="https://www.belizeinlandtours.com/" target="_blank">
                                      <StaticImage src={inland} />
                                    </a>
                                </div>
                              
                                <div className="col-sm-3">
                                    <a href="https://upsidedowntours.com/" target="_blank">
                                      <StaticImage src={UDT} />
                                    </a>
                                </div>
                               
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </div>

    );
}

export default About;