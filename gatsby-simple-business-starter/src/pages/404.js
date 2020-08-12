import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Col, Row, Container } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/general-styles.css"
import "../styles/not-found-page.css"

export default function NotFoundPage() {
  return (
    <Layout>
      <div>
        <Helmet>
          <meta charset="utf-8" />
          {/* <link rel="icon" href={} type="image/gif" sizes="16x16"></link> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="This page does not exist."
            name="author"
            content="Sean Rooney"
          />
          <title>404</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Container className="page-filler">
          <Row>
            <Col>
              <p className="not-found">404 Not Found</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="not-found-home-link">
                <Link to="/">Back to Home </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
