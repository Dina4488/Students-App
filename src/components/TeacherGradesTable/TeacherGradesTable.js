import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import StudentModel from '../../model/StudentModel/StudentModel';
import TeacherGrades from '../TeacherGrades/TeacherGrades';
import './TeacherGradesTable.css'

export default function TeacherGradesTable({courses , students}) {

const [selectedUserIndex, setSelectedUserIndex] = useState(0);

let studentsList = students.map( plainuser => new StudentModel(plainuser));

const options = studentsList.map((student, index) =>    
    <option value={index}>{student.name}</option>);

    return (
        <div className="p-students">
            <div className="p-students-header">
                <h4>בחר תלמיד</h4>               
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    custom
                    value={selectedUserIndex} 
                    onChange={e => setSelectedUserIndex(e.target.value)}>                   
                    {options}
                </Form.Control>
            </div>                    
             <Table striped bordered hover className="students-table">
                <thead>
                    <tr>                       
                        <th>ציון</th> 
                        <th>שם הקורס</th>                    
                        <th>קורס</th>
                    </tr>
                </thead>
                <tbody className="students-body">
                    { studentsList[selectedUserIndex].courses.map(one => 
                        <tr><TeacherGrades courses={one} coursesList={courses}/> </tr>)
                    }     
                </tbody>
                </Table>
        </div>
    )
}
