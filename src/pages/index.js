import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import LandingMain from "./home/components/landing"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import "./home/home.scss"


const IndexPage = () => (
  <Layout>
       <Seo title="Home" />
       <div className="main">
          <LandingMain />
       </div>
  </Layout>
)


export default IndexPage
