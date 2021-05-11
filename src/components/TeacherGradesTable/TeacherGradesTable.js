import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import StudentModel from '../../model/StudentModel/StudentModel';
import GradesTable from '../GradesTable/GradesTable';
import SelectStudent from '../SelectStudent/SelectStudent';
import './TeacherGradesTable.css'

export default function TeacherGradesTable({courses , students}) {

const [selectedUserIndex, setSelectedUserIndex] = useState(0);

let studentsList = students.map( plainuser => new StudentModel(plainuser));

const options = studentsList.map((student, index) =>    
    <option value={index}>{student.name}</option>);

function setIndex(event){
    setSelectedUserIndex(event.target.value);
}    


    return (
        <div className="p-students">
            <SelectStudent selectedUserIndex={selectedUserIndex}
                            options={options}
                            setIndex={setIndex}/>           
             <Table striped bordered hover className="students-table">
                <GradesTable studentsList={studentsList}
                            selectedUserIndex={selectedUserIndex}
                            courses={courses}/>              
                </Table>
        </div>
    )
}
