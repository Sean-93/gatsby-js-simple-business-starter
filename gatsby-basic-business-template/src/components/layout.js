import React from "react"
import NavBar from "./navbar"
import Header from "./header"
import Footer from "./footer"
import Wrapper from "./wrapper"

import "../styles/general-styles.css"

export default function Layout(props) {
  return (
    <div>
      <header>
        <NavBar />
        <Header />
      </header>
      <Wrapper>
        <main>{props.children}</main>
      </Wrapper>
      <br />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}