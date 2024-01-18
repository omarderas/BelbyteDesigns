import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ContentLayout from "../../components/content-layout";

import Seo from "../../components/seo"

import "./services.scss"

import Services from "./components/our-services"

const OurServices = () => (
  <ContentLayout>
    <Seo title="Our Services | Belbyte Designs " />
    <Services />
  </ContentLayout>
)

export default OurServices;
