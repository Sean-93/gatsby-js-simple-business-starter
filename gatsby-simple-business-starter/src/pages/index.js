import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/index.css"
import "../styles/general-styles.css"
import "../styles/index.css"

export default function Home() {
  return (
    <div>
      <Layout>
        <Helmet></Helmet>
        <Container></Container>
      </Layout>
    </div>
  )
}
