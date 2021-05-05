import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap'
import './LoginPage.css';
import logo from '../../images/logo_students.png'; 
import {  MdPerson } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';


function LoginPage() {

    const [email ,setEmail] = useState("");
    const [pwd ,setPwd] = useState("");
    
    function  login(e) {
        console.log(pwd);
        console.log(email);        
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
            </Form>
            </div>            
        </div>
     )
   }

 export default LoginPage
