import React from "react"
import { Helmet } from "react-helmet"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/general-styles.css"
import "../styles/terms-of-use.css"

export default function TermsOfUse() {
  return (
    <div>
      <Layout>
        <Helmet></Helmet>
        <Container className="card"></Container>
      </Layout>
    </div>
  )
}
