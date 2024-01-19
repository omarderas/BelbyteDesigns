import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ContentLayout from "../../components/content-layout";

import Seo from "../../components/seo"

import "./packages.scss"

import Packages from "./components/packages"

const OurServices = () => (
  <ContentLayout>
    <Seo title="Our Packages | Belbyte Designs " />
    <Packages />
  </ContentLayout>
)

export default OurServices;
