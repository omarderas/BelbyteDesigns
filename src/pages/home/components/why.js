import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ParticlesMain from "./particles";
const ex = "../../../images/icon-1.png"
const i2 = "../../../images/app-design.png"
const i3 = "../../../images/icon-3.png"
const i4 = "../../../images/icon-4.png"
const i5 = "../../../images/icon-5.png"
const i6 = "../../../images/icon-6.png"




function WhyUs() {
	return (
        <div class="why-us">
            <div className="why-overlay"></div>
            <div className="why-main">
                <h1>Why Choose Us?</h1>
                <p>Belize's Unbeatable Professional Custom Websites providers in the Industry.</p>
                <div className="row why-cont">
                    <div className="col-sm-5 first">
                        <div className="row">
                            <div className="col-sm-10">
                                <h1>Expertise and <span>Experience</span></h1>
                                <p>We're not just building websites; we're crafting digital experiences. With a blend of passion and expertise, our team brings years of hands-on experience in website design and development to the table.</p>
                            </div>
                            <div className="col-sm-2">
                              <StaticImage src={ex} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10">
                            <h1>Quality <span>Products</span></h1>
                            <p>Picture this: websites that not only look visually stunning but also function flawlessly. Our secret? A passionate team obsessed with quality. We believe in going beyond expectations, ensuring your online presence is not just good but exceptional.</p>
                            </div>
                            <div className="col-sm-2">
                              <StaticImage src={i2} />
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10">
                            <h1>Customer-Centric <span>Approach</span></h1>
                            <p>We don't just design and develop websites; we build relationships. Our customer-centric approach is more than a philosophy; it's our way of doing business, your satisfaction is not just a goal; it's our mission.</p>
                            </div>
                            <div className="col-sm-2">
                            <StaticImage src={i3} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-5 second">
                    <div className="row">
                            <div className="col-sm-2">
                            <StaticImage src={i4} />

                            </div>
                            <div className="col-sm-10">
                            <h1><span>Unbeatable</span> Prices</h1>
                            <p>We are a dynamic team of skilled freelancers dedicated to providing top-notch website development services at a really low rate. Unlike traditional companies, our approach is personal and tailored to your needs. </p>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-2">
                            <StaticImage src={i5} />

                            </div>
                            <div className="col-sm-10">
                            <h1><span>Timely</span> Delivery</h1>
                            <p>At BelByte Designs, we understand that time is of the essence, especially in the fast-paced digital world. Our commitment goes beyond just creating amazing websites; we pride ourselves on delivering them to you promptly.</p>
                            </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-2">
                            <StaticImage src={i6} />

                            </div>
                            <div className="col-sm-10">
                            <h1><span>24/7</span> Free Support</h1>
                            <p>We're committed to being there for you every step of the way. Imagine having a dedicated team at your fingertips, ready to assist you 24/7. Whether you're a night owl with a brilliant idea or facing a midnight website hiccup, we've got you covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WhyUs;