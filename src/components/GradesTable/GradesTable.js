import React from 'react'
import TeacherGrades from '../TeacherGrades/TeacherGrades'

export default function GradesTable({studentsList, selectedUserIndex,courses}) {
    return (
        <>
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
        </>
    )
}
