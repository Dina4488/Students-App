import React, { useContext, useState } from 'react'
import { Form , Button, Alert } from 'react-bootstrap'
import './SignupPage.css';
import logo from '../../images/logo_students.png'; 
import {  MdPerson } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import {AiOutlineNumber} from "react-icons/ai";
import ActiveUserContext from '../../shared/ActiveUserContext';

function SignupPage({addUser ,users ,onLogin }) {
    const [id ,setId] = useState("");
    const [fname ,setFname] = useState("");
    const [lname ,setLname] = useState("");
    const [email ,setEmail] = useState("");
    const [pwd ,setPwd] = useState("");
    const [showMsg, setShowMsg]= useState(false);
    const activeUser = useContext(ActiveUserContext);

    function signUp(e){
        e.preventDefault();           
        addUser(parseInt(id),email, fname, lname,pwd);            
        // setDesc("");
        setShowMsg(true);
        // return <Redirect to="/"/>     
    }
    
    return (
        <div className="p-signup">
            <div className="p-header">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Home"/>
                <h2>משוב תלמידים ומורים הרשמה</h2>
            </div>
            <div className="p-form">           
                <Form onSubmit={signUp}>
                <Form.Group className="p-form-1">
                          <AiOutlineNumber/>                 
                        <Form.Control 
                                className="p-input"
                                type="text" 
                                placeholder="מספר זיהוי" 
                                value={id}
                                onChange={ e => setId(e.target.value)}/>                 
                    </Form.Group>
                    <Form.Group className="p-form-1">
                        <MdPerson/>                    
                        <Form.Control 
                                className="p-input"
                                type="text" 
                                placeholder="שם פרטי" 
                                value={fname}
                                onChange={ e => setFname(e.target.value)}/>                 
                    </Form.Group>
                    <Form.Group className="p-form-1">
                        <MdPerson/>                    
                        <Form.Control 
                                className="p-input"
                                type="text" 
                                placeholder="שם משפחה" 
                                value={lname}
                                onChange={ e => setLname(e.target.value)}/>                 
                    </Form.Group>
                    <Form.Group className="p-form-1">
                        <IoIosMail/>                    
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
                    
                    { showMsg ? <Alert variant={"danger"} className="center">
                           ההרשמה בוצעה בהצלחה
                    </Alert>
                    : 
                    null}
                </Form>
            </div>            
        </div>
     )
   }


export default SignupPage
