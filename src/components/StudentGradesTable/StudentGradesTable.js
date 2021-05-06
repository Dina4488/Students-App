import React from 'react'
import { Table } from 'react-bootstrap'
import StudentGrades from '../StudentGrades/StudentGrades'

export default function StudentGradesTable({courses}) {
console.log(courses);

    return (
        <div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ציון</th> 
                    <th>שם הקורס</th>                    
                    <th>קורס</th>                                  
                    </tr>
                </thead>
                <tbody>
                     { courses.map(one => 
                     <tr><StudentGrades courses={one}/> </tr>)
                     }                   
                </tbody>
                </Table>
        </div>
    )
}
