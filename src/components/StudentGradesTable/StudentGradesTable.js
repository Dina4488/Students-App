import React from 'react'
import { Table } from 'react-bootstrap'
import StudentGrades from '../StudentGrades/StudentGrades'
import './StudentGradesTable.css'

export default function StudentGradesTable({courses}) {
console.log(courses);

    return (
        <div className="p-students">
             <Table striped bordered hover className="students-table">
                <thead>
                    <tr>
                        <th>ציון</th> 
                        <th>שם הקורס</th>                    
                        <th>קורס</th>                                  
                    </tr>
                </thead>
                <tbody className="students-body">
                     { courses.map(one => 
                     <tr><StudentGrades courses={one}/> </tr>)
                     }                   
                </tbody>
                </Table>
        </div>
    )
}
