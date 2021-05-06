import React from 'react'

export default function StudentGrades({courses}) {
     
    return (
        <> 
            <td>{courses.courseGrade}</td>
            <td>{courses.courseName}</td>
            <td>{courses.courseId}</td>
        </>
    )
}
