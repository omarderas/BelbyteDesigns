
import "./../less/header-mobile.scss";

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const MainLogo = "../images/BelByte-Logo---color-.png";



const HeaderMobile = ({ siteTitle }) => (
  <header id="mobile-header">
    <div className="top-bar row">
      <div className="contents">
      <div className="col-sm-6">
      <div className="contact-block">

          <a href="mailto:info@upsidedowntours.com" id="cell">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span> info@upsidedowntours.com</span>
          </a>
          <a href="tel:635-8683" id="address">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span> +501 634-5385</span>
          </a>
        </div>
      </div>
     
      <div className="col-sm-6 social">
<ul className="social">
    <li>
      <a href="" target="_blank">
     
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/upsidedowntoursbz/" target="_blank">
    
      </a>
    </li>

</ul>
      </div>
      </div>
    </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
  

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/all-tours" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Tours
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/all-tours">View All Tours</a>
        <a class="dropdown-item" href="/cave-tubing-in-belize-with-upsidedown-tours/">Cave Tubing</a>
        <a class="dropdown-item" href="/experience-cave-kayaking-in-belize-with-upsidedown-tours/">Cave Kayaking</a>
        <a class="dropdown-item" href="/visit-the-crystal-cave-in-belize-with-upsidedown-tours/">Crystal Cave</a>
          <a class="dropdown-item" href="/experience-river-kayaking-in-belize-with-upsidedown-tours/">River Kayaking</a>
          <a class="dropdown-item" href="/cave-kayaking-and-jungle-overnight-in-belize-with-upsidedown-tours/">Jungle & Kayaking</a>
          <a class="dropdown-item" href="/experience-birding-in-belize-with-upsidedown-tours/">Birding</a>
          <a class="dropdown-item" href="/jungle-hike-full-day-hummingbird-highway-cayo-district/">Jungle Trek</a>
          <a class="dropdown-item" href="/xunantunich-maya-ruins-and-cave-tubing-san-ignacio-town/">Xunantunich</a>
          <a class="dropdown-item" href="/visit-caracol-maya-ruins-in-belize-with-upsidedown-tours/">Caracol</a>
          
       

          
             
        </div>
      </li>
 
      <li class="nav-item">
        <a class="nav-link" href="/about-us">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact-us">Contact Us</a>
      </li>
    </ul>
   
   
  </div>

</nav>
  </header>
)

export default HeaderMobile


