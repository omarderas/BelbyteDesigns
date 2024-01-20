
import "./../less/header-content-mobile.scss";

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const MainLogo = "../images/BelByte-Logo---color-.png";



const HeaderContentMobile = ({ siteTitle }) => (
  <header id="header-content-mobile">
    <div className="top-bar row">
      <div className="contents">
      <div className="col-sm-6">
      <div className="contact-block">

          <a href="mailto:support@belbytedesigns.com" id="cell">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span> support@belbytedesigns.com</span>
          </a>
          <a href="tel:625-3869" id="address">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span> +501 625-3869</span>
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
      <a href="" target="_blank">
    
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
      <li class="nav-item">
        <a class="nav-link" href="/about-us">Why Belbyte</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/all-tours" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Tours
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/our-services">Services</a>
        <a class="dropdown-item" href="/our-services">Web Design & Development</a>
        <a class="dropdown-item" href="/our-services">Hosting</a>
        <a class="dropdown-item" href="/our-services">Email Service</a>
          <a class="dropdown-item" href="/our-services">SEO & Analytics</a>
          <a class="dropdown-item" href="/our-services">Digital Marketing</a>
          <a class="dropdown-item" href="/our-packages">View Packages</a>
      
       

          
             
        </div>
      </li>
 
      
      <li class="nav-item">
        <a class="nav-link" href="/our-packages">Packages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/outsourcing">Outsourcing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact-us">Contact Us</a>
      </li>
    </ul>
   
   
  </div>

</nav>
  </header>
)

export default HeaderContentMobile


