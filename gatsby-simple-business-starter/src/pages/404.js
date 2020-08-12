import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Col, Row, Container } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/not-found-page.css"

export default function NotFoundPage() {
  return (
    <Layout>
      <div>
        <Helmet>
         
        </Helmet>
        <Container>
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
