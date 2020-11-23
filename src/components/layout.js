import React from "react"
import Footer from "./footer"
import Header from "./header"
import { GlobalStyle } from "./styles/globalstyles"

const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle />
      <Header />
    
        <main>{children}</main>
        <Footer />
    </>
  )
}


export default Layout
