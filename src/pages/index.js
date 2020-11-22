import React from "react"
import Destinations from "../components/destinations"
import Hero from "../components/hero"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Destinations />
    
  </Layout>
)

export default IndexPage
