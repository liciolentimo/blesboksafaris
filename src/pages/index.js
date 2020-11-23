import React from "react"
import Destinations from "../components/destinations"
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
  </Layout>
)

export default IndexPage
