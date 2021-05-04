import React from 'react'
import { Form , Button } from 'react-bootstrap'
import './LoginPage.css';
import logo from '../../images/logo_students.png'; 
import {  MdPerson } from 'react-icons/md';
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom';


function LoginPage() {
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
            <Form>
                <Form.Group className="p-form-1">
                    <MdPerson/>                    
                    <Form.Control 
                            className="p-input"
                            type="email" 
                            placeholder="Enter email" />                 
                </Form.Group>
                <Form.Group className="p-form-1">
                    <FaLock/>                    
                    <Form.Control
                            className="p-input" 
                            type="password" 
                            placeholder="Password" />
                </Form.Group>               
                <Button className="p-login-button" type="submit">
                    Submit
                </Button>
            </Form>
            </div>            
        </div>
     )
   }

 export default LoginPage
