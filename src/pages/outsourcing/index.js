import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ContentLayout from "../../components/content-layout";

import Seo from "../../components/seo"

import "./outsourcing.scss"

import Out from "./components/outsourcing"

const ITOutsourcing = () => (
  <ContentLayout>
    <Seo title="It Outsourcing | Belbyte Designs " />
    <Out />
  </ContentLayout>
)

export default ITOutsourcing;
