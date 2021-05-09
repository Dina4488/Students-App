import React from 'react'

export default function TeacherGrades({ courses}) {

    return (
        <> 
             <td>{courses.courseGrade}</td>
            <td>{courses.courseName}</td>
            <td>{courses.courseId}</td>
    </>
    )
}
