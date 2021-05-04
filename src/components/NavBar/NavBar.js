import React from 'react'
import { Nav, Navbar,Link } from 'react-bootstrap'
import logo from '../../images/logo_students.png'; 

function NavBar({activeUser}) {

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">
            <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Home"
         />Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {activeUser ? <Nav.Link href="#/">Link</Nav.Link> : null}
            {activeUser ?<Nav.Link href="#/">Link</Nav.Link> : null}
            {activeUser ?<Nav.Link href="#/">Link</Nav.Link> : null}
          </Nav>
          <Nav className="ml-auto">
            {!activeUser ?<Nav.Link href="#/login">Login</Nav.Link> : null}
            {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
            {activeUser ? <Nav.Link href="#/logout">Logout</Nav.Link> : null}
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
