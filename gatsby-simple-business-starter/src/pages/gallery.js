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
        <Helmet>
          <meta charset="utf-8" />
          {/* <link rel="icon" href={} type="image/gif" sizes="16x16"></link> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content=""
            name="author"
            content="Sean Rooney"
          />
          <title>Gallery</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Container></Container>
      </Layout>
    </div>
  )
}
