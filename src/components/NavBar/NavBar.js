import React, { useContext } from 'react';
import { Nav, Navbar,Link } from 'react-bootstrap'
import logo from '../../images/logo_students.png'; 
import ActiveUserContext from '../../shared/ActiveUserContext';

function NavBar({onLogout ,messages}) {

    const activeUser = useContext(ActiveUserContext);

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">
            <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Home"
         />בית
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {activeUser && activeUser.role === "admin"  ? 
                <Nav.Link href="#/getMessages">רשימת הודעות</Nav.Link> : null}
            {activeUser && activeUser.role === "student" ?
              <Nav.Link href="#/sendMsg">שלח הודעה</Nav.Link> : null}
            {activeUser && activeUser.role === "admin" ? 
                <Nav.Link href="#/updateGrades">עדכן ציונים</Nav.Link> : null}
             {activeUser && activeUser.role === "student" ? 
                 <Nav.Link href="#/students">ציונים</Nav.Link> : null }
          </Nav>
          <Nav className="ml-auto">
            {!activeUser ?<Nav.Link href="#/login">כניסה</Nav.Link> : null}
            {!activeUser ? <Nav.Link href="#/signup">הרשמה</Nav.Link> : null}
            {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>יציאה</Nav.Link> : null}
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
