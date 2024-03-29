import "./../less/header-content.scss";

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import  Dedicated  from "../images/dedicated";
import  Team  from "../images/team";
import  Web  from "../images/web";
import  Mobile  from "../images/mobile";
import  Quote  from "../images/quote";
import  Design  from "../images/design";

const MainLogo = "../images/BelByte-Logo---color-.png";




const ContentHeader = ({ siteTitle }) => (
  <header id="header-content-desktop">
  <div class="header-content">
  <div class="site-header__logo">
                <a class="site-header__logo-link" href="/">
                <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} />
                </a>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about-us/">Why Belbyte</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/our-services/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div class="dropdown-menu nav-tab" aria-labelledby="navbarDropdown">
        <section class="sub-menu__wrapper">
        <div class="sub-menu__wrapper--left">
            <h4 class="sub-menu__title"> models of Operation </h4>
            <a href="/about-us/" class="sub-menu__wrapper-left-box">            
              <Dedicated />
              <h5>Dedicated Product Team</h5>
              <span> makes us largely responsible for the development of the entire project </span>
            </a>
            <a href="/about-us/" class="sub-menu__wrapper-left-box">
            <Team />
              <h5>We are a Team of Freelancers</h5>
              <span> this makes us operate differently reason our prices are unbeatable! </span>
            </a>
          </div>
          <div class="sub-menu__wrapper--right">
            <h4 class="sub-menu__title"> core services </h4>
            <ul class="sub-menu__list">
              <li class="sub-menu__list-item">
                <a href="/our-services/" class="sub-menu__list-item-url">
                  <figure class="sub-menu__list-item-figure">
                    <Web />
                  </figure>
                  <div class="sub-menu__list-item-text">Website Development</div>
                </a>
              </li>
              <li class="sub-menu__list-item">
                <a href="/our-services/" class="sub-menu__list-item-url">
                  <figure class="sub-menu__list-item-figure">
                    <Mobile />
                 </figure>
                  <div class="sub-menu__list-item-text">Fully Responsive Web Apps</div>
                </a>
              </li>
              <li class="sub-menu__list-item">
                <a href="/contact-us/" class="sub-menu__list-item-url">
                  <figure class="sub-menu__list-item-figure">
                  <Quote />
                  </figure>
                  <div class="sub-menu__list-item-text">Free Consultation</div>
                </a>
              </li>
              <li class="sub-menu__list-item">
                <a href="/our-services/" class="sub-menu__list-item-url">
                  <figure class="sub-menu__list-item-figure">
                    <Design />
                  </figure>
                  <div class="sub-menu__list-item-text">Custom Designs - No Templates</div>
                </a>
              </li>
            </ul>
            <div class="sub-menu__right-row">
              <div class="sub-menu__right-row--left">
                <h4 class="sub-menu__title sub-menu__title--bottom"> Dedicated Solutions </h4>
                <ul>
                  <li>
                    <a href="/our-services/">Affordable Hosting</a>
                  </li>
                  <li>
                    <a href="/our-services/">Email & Domains</a>
                  </li>
                  <li>
                    <a href="/our-services/">IT Outsourcing</a>
                  </li>
                </ul>
              </div>
              <div class="sub-menu__right-row--right">
                <div class="sub-menu__video-wrapper">
                  <div class="sub-menu__video-inner">
                    <div class="sub-menu__video-thumbnail"></div>
                    <div class="sub-menu__video-playbutton"></div>
                  </div>
                </div>
                <div class="sub-menu__video-wrapper-text"> We offer FREE Support after launching your product! </div>
              </div>
            </div>
          </div>
        </section>     
        </div>
      </li>
 
     
      <li class="nav-item">
        <a class="nav-link" href="/#our-work">Our Work</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/our-packages/">Packages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/outsourcing/">Outsourcing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact-us/">Contact Us</a>
      </li>
      <li class="nav-item estimate">
        <a class="nav-link" href="/contact-us/">Get a Quote</a>
      </li>
    </ul>
   
   
  </div>

</nav>
<div class="site-header__separator separator-dense">
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
    <div class="separator-dense__cell"></div>
</div>
</div>
  </header>
)

export default ContentHeader



