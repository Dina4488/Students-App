import React, { useContext, useEffect, useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { Redirect } from 'react-router';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './SendMsgPage.css'
import {FcInspection}  from "react-icons/fc";


function SendMsgPage({addMessage , topicsList}) {

    const activeUser = useContext(ActiveUserContext);
    const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);    
    const [desc, setDesc] = useState("");
    const [showMsg, setShowMsg]= useState(false);

    function  addNewMessage() {
        if( selectedTopicIndex && desc ) {
            addMessage(parseInt(selectedTopicIndex),desc,activeUser.id);            
            setDesc("");
            setShowMsg(true);
        } 
    }

      function onEnterDesc(e) {
        if (e.charCode === 13 && e.target.value.trim()) {
            setDesc(e.target.value)
        }
      }

      function setIndex(event){
        parseInt(setSelectedTopicIndex(event.target.value));
    }    
    
    const  options = topicsList.map((topic, index) =>    
            <option value={parseInt(topic.topicId)}>{topic.topicName}</option>);    
    
    
      if (!activeUser) {
        return <Redirect to="/"/>
    } else if (activeUser.role === "admin") {
        return <Redirect to="/"/>
    }

    return (
        <Container className="p-sendMsg">
            <h4><FcInspection/> שלח הודעה </h4>
            <Form className="p-sendMsg-form">              
                <Form.Control
                    as="select"
                    className="my-1"
                    custom
                    value={selectedTopicIndex} 
                    onChange={setIndex}>                   
                    {options}
                </Form.Control>
                <Form.Group >                   
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

export default SendMsgPage;