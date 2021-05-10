import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';
import './UpdateGradeModal.css'

function UpdateGradeModal({ show, onClose, onCreate }) {
    const [grade, setGrade] = useState("");
  

    function clearForm() {
        setGrade("");
    }

    function updaeGrade() {
        onCreate(grade);
        clearForm();
        onClose();
    }
  

    return (
        <Modal show={show} onHide={onClose} size="lg" className="c-new-grade">
            <Modal.Header closeButton className="c-header">
                <Modal.Title> עדכון ציון</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>
                           עדכן ציון
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text"  
                                value={grade} onChange={e => setGrade(e.target.value)}/>
                        </Col>
                    </Form.Group>                 
                </Form>
            </Modal.Body>
            <Modal.Footer className="c-modal-footer">                
                <Button variant="outline-success" onClick={updaeGrade}>
                    עדכן
                </Button>
                <Button variant="outline-dark" onClick={onClose}>
                   ביטול
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateGradeModal;