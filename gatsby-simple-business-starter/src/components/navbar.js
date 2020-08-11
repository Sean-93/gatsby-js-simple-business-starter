import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../styles/navbar.css"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <div>
      <nav className="sticky-nav">
        <Navbar className="navbar" variant="">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            <Link to="/" className="nav-title">
              Website: 
            </Link>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/residential-use" className="nav-link">
              Residential Use
            </Link>
            <Link to="/commercial-use" className="nav-link">
              Commercial
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/contact-page" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar>
      </nav>
    </div>
  )
}
