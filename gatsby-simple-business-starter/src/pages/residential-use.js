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
          <title>Residential Use</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Container className="page-filler"></Container>
      </Layout>
    </div>
  )
}
