import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
const Header = ({activeKey}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Gatsby-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link active={activeKey === '/'} as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link active={activeKey === '/about'} as={Link} to={"about"}>
            About us
          </Nav.Link>
          <Nav.Link active={activeKey === '/contact'} as={Link} to={"/contact"}>
            Contact us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
