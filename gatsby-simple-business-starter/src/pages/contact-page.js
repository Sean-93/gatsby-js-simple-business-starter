import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import "../styles/general-styles.css"
import "../styles/contact-page.css"

export default function ContactPage() {
  return (
    <div>
      <Layout>
        <Helmet></Helmet>
        <Container></Container>
      </Layout>
    </div>
  )
}
