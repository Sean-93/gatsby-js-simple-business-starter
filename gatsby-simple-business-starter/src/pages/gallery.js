import React from "react"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel, Container } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/general-styles.css"
import "../styles/gallery.css"

export default function Gallery() {
  return (
    <div>
      <Layout>
        <Helmet></Helmet>

        <Container></Container>
      </Layout>
    </div>
  )
}
