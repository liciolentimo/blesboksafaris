import React from "react"
import Destinations from "../components/destinations"
import Email from "../components/email"
import Hero from "../components/hero"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/stats"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Destinations heading="Our Favourite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
