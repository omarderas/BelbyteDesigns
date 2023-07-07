import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const mainLogo = "../../../images/BelByte-Logo---color-.png"



function LandingMain() {
	return (

        
        <div class="main-landing">
             <StaticImage src={mainLogo}/>

             <h1>Coming Soon.</h1>
             <p>For inquiries contact <a href="mailto:support@belbytedesigns.com">support@belbytedesigns.com</a></p>
        
             <p>" The world of technology can be fast-paced and scary. <br />That's why our goal is to provide an experience that is tailored to your company's needs.<br /> No matter the budget, we pride ourselves on providing professional customer service. <br />We guarantee you will be satisfied with our work. "</p>

        </div>

    );
}

export default LandingMain;