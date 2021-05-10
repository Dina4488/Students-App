import React, { useContext, useState } from 'react'
import { Form , Button, Alert } from 'react-bootstrap'
import './LoginPage.css';
import logo from '../../images/logo_students.png'; 
import {  MdPerson } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { Redirect } from 'react-router';
import ActiveUserContext from '../../shared/ActiveUserContext';



function LoginPage({users ,onLogin }) {
    const [email ,setEmail] = useState("");
    const [pwd ,setPwd] = useState("");
    const [showError, setShowError]= useState(false);
    const activeUser = useContext(ActiveUserContext);

    if (activeUser && activeUser.role === "student") {
        return <Redirect to="/students"/>
    } else if (activeUser && activeUser.role === "admin"){
        return <Redirect to="/updateGrades"/>
    }

    
    function  login(e) {
        e.preventDefault();
        let activeUser = null;
        for (const user of users){
            if (user.login(email,pwd)){
                activeUser = user;
                break;
            }
        }      
        if (activeUser) {
            onLogin(activeUser);
        } else {
            setShowError(true);
        }
    }   

    return (
        <div className="p-login">
            <div className="p-header">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Home"/>
                <h2>משוב תלמידים ומורים</h2>
            </div>
            <div className="p-form">           
                <Form onSubmit={login}>
                    <Form.Group className="p-form-1">
                        <MdPerson/>                    
                        <Form.Control 
                                className="p-input"
                                type="email" 
                                placeholder="דואר אלקטרוני" 
                                value={email}
                                onChange={ e => setEmail(e.target.value)}/>                 
                    </Form.Group>
                    <Form.Group className="p-form-1">
                        <FaLock/>                    
                        <Form.Control
                                className="p-input" 
                                type="password" 
                                placeholder="סיסמא"
                                value={pwd}
                                onChange={ e => setPwd(e.target.value)} />
                    </Form.Group>               
                    <Button className="p-login-button" type="submit">
                        כניסה
                    </Button>
                    
                    { showError ? <Alert variant={"danger"} className="center">
                            יש שגיאה בנתונים
                    </Alert>
                    : 
                    null}
                </Form>
            </div>            
        </div>
     )
   }

 export default LoginPage
