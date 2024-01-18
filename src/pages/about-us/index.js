import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ContentLayout from "../../components/content-layout";

import Seo from "../../components/seo"

import "./about.scss"

import About from "./components/about-us"

const AboutUs = () => (
  <ContentLayout>
    <Seo title="About Us | Belbyte Designs " />
    <About/>
  </ContentLayout>
)

export default AboutUs;
