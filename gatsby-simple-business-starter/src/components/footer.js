import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/footer.css"
import "../styles/general-styles.css"

export default function Footer() {
  return (
    <div>
      <footer className="sunxtreme-footer">
        <Container>
          <Row>
            <Col>
              <ul>
                <Link to="/terms-of-use" className="policy-links">
                  Terms of Use
                </Link>
              </ul>
            </Col>
            <Col>
              <ul>
                <Link to="/privacy-policy" className="policy-links">
                  Privacy Policy
                </Link>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
