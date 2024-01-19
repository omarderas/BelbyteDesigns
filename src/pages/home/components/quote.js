import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const quote = "../../../images/features.jpg"


function Quote() {
	return (
        <div class="get-quote">
            <div className="get-main">
                <div className="row">
                    <div className="col-sm-6">
                    <StaticImage src={quote} />
                    </div>
                    <div className="col-sm-6 second">
                        <h1>Let's Discuss Your Project</h1>
                        <p>Let's get the ball rolling for your long overdue website, We pride ourselves with our ability to perform and deliver results. From creating an entire new website or revamping your existing website at unbeatable rates, we've got you covered. Book a free consultation below and we will get back to you asap.</p>
                        <a href="/contact-us/">Book Free Consultation</a>
                    </div>
                </div>
               
            </div>
        </div>

    );
}

export default Quote;