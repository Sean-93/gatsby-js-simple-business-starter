import React from "react"
import Layout from "../components/layout"
import { Container, Col, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import "../styles/general-styles.css"
import "../styles/about-us.css"

export default function SolarPanels() {
  return (
    <div>
      <Layout>
        <Helmet></Helmet>
        <Container></Container>
      </Layout>
    </div>
  )
}
