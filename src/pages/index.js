import * as React from "react";
import { useEffect, useState } from "react";
import LandingMain from "./home/components/landing";
import ParticlesMain from "./home/components/particles";
import Services from "./home/components/services";
import About from "./home/components/about";
import Quote from "./home/components/quote";
import WhyUs from "./home/components/why";
import Plans from "./home/components/plans";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "./home/home.scss";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home | Software and Web Development" />
      <div className="main">
      <LandingMain />
      <ParticlesMain />
      <Services />
      <About />
      <Quote />
      <WhyUs />
      <Plans />
      </div>
    </Layout>
  );
}

export default IndexPage;
