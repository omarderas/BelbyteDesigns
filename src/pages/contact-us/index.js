import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ContentLayout from "../../components/content-layout";

import Seo from "../../components/seo"

import "./contact.scss"

import Contact from "./components/contact-us"

const ContactUs = () => (
  <ContentLayout>
    <Seo title="Contact Us | Belbyte Designs " />
    <Contact/>
  </ContentLayout>
)

export default ContactUs;
