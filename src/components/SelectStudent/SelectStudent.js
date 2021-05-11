import React from 'react'
import { Form } from 'react-bootstrap'

                           
export default function SelectStudent({selectedUserIndex, setIndex, options}) {
    return (
        <div>
               <div className="p-students-header">
                <h4>בחר תלמיד</h4>               
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    custom
                    value={selectedUserIndex} 
                    onChange={setIndex}>                   
                    {options}
                </Form.Control>
            </div>          
        </div>
    )
}
