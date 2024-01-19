import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Plans() {
	return (
        <div class="plans-main">
            <div className="plans-overlay"></div>
            <div className="plans-cont">
                <h2>Packages</h2>
                <h1>Choose Your <span>Package</span></h1>
                <div className="row">
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
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
                </div>
            </div>
        </div>

    );
}

export default Plans;