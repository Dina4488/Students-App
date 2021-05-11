import React, { useContext, useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { Redirect } from 'react-router';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './SendMsgPage.css'
import {FcInspection}  from "react-icons/fc";


export default function SendMsgPage({addMessage}) {

    const activeUser = useContext(ActiveUserContext);
    const [topic,setTopic] = useState("");
    const [desc, setDesc] = useState("");
    const [showMsg, setShowMsg]= useState(false);

    function  addNewMessage() {
        if( topic && desc ) {
            addMessage(topic,desc,activeUser.id);
            setTopic("");
            setDesc("");
            setShowMsg(true);
        } 
    }

    function onEnter(e) {
        if (e.charCode === 13 && e.target.value.trim()) {
            setTopic(e.target.value)
        }
      }

      function onEnterDesc(e) {
        if (e.charCode === 13 && e.target.value.trim()) {
            setDesc(e.target.value)
        }
      }


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <Container className="p-sendMsg">
            <h4><FcInspection/> שלח הודעה </h4>
            <Form className="p-sendMsg-form">
                <Form.Group >                   
                    <Form.Control type="text" placeholder="נושא ההודעה"
                     onKeyPress={(e) => onEnter(e)}
                     onChange={(e) => setTopic(e.target.value)}
                     value={topic} 
                        // value={topic} onChange={setNewTopic}
                     />
                </Form.Group>                          
                <Form.Group controlId="exampleForm.ControlTextarea1">                   
                    <Form.Control as="textarea"  placeholder="כתוב הודעה" 
                        rows={3} 
                        onKeyPress={(e) => onEnterDesc(e)}
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc} 
                       />
                </Form.Group>

                <Button variant="outline-success" type="submit"
                        onClick={addNewMessage}>
                    שלח
                </Button>

                { showMsg ? <Alert variant={"success"} className="p-sendMsg-alert">
                             ההודעה נשלחה בהצלחה
                    </Alert>
                    : 
                    null}
            </Form>
        </Container>
    )
}
