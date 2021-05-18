import React from 'react'
import { Container, TabContainer, Table } from 'react-bootstrap'
import MessagesTable from './MessagesTable'
import './GetMessages.css'

export default function GetMessagesTable({messages}) {


    return (
        <Container>
        <div className="c-messages">
             <h4>רשימת הודעות</h4>  
             <Table striped bordered hover className="students-table">
                <thead>
                    <tr>
                        <th>מגיש</th>
                        <th>תיאור הבקשה</th>                        
                        <th>נושא</th>                                  
                    </tr>
                </thead>
                <tbody className="messages-body">
                     { messages.map(one => 
                     <tr className={one.isNew ? "red-message" : null}><MessagesTable messages={one}/> </tr>)
                     }                   
                </tbody>
                </Table>
        </div>
        </Container>
    )
}
