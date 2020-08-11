import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import "../styles/general-styles.css"
import "../styles/residential-use.css"

export default function ResidentialUse() {
  return (
    <div>
      <Layout>
        <Helmet></Helmet>
        <Container></Container>
      </Layout>
    </div>
  )
}
