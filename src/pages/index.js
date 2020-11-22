import React from "react"
import hero from "../components/hero"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <hero />
    
  </Layout>
)

export default IndexPage
