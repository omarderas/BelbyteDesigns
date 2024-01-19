import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const web = "../../../images/web-design.png"
const hosting = "../../../images/HOSTING.png"
const seo = "../../../images/seo.png"
const app = "../../../images/app-design.png"

function Services() {
	return (
        <div class="services">
          <div className="row">
            <div className="col-sm-3">
                <div className="front">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="featured-content">
                        <div className="icon">
                        <StaticImage src={web} />
                        </div>
                        <div className="cont-main">
                            <h2>Web Design & Development</h2>
                            <p>We design and develop fully responsive custom websites (no purchased templates) based on your company needs.</p>
                            <a href="/our-services/">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="front">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="featured-content">
                        <div className="icon">
                        <StaticImage src={hosting} />
                        </div>
                        <div className="cont-main">
                            <h2>Web, Domain & Email Hosting</h2>
                            <p>We provide hosting for all our websites, as well as domain purchase, transfers, hosting and professional emails.</p>
                            <a href="/our-services/">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="front">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="featured-content">
                        <div className="icon">
                        <StaticImage src={seo} />
                        </div>
                        <div className="cont-main">
                            <h2>SEO & Analytics</h2>
                            <p>Our developed sites are fully equiped with all the tool to boost your Search results to increase sales.</p>
                            <a href="/our-services/">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="front">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="featured-content">
                        <div className="icon">
                        <StaticImage src={app} />
                        </div>
                        <div className="cont-main">
                            <h2>IT Outsourcing</h2>
                            <p>If you don't have an IT team to maintian your system or perform any related task, we've got you covered - one of our agents can assist with no hassle.</p>
                            <a href="/our-services/">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

    );
}

export default Services;