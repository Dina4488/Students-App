import React from 'react'
import { Nav, Navbar,Link } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>          
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Signup</Nav.Link> 
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
