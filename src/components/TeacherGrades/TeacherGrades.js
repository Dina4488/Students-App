import React from 'react'

export default function TeacherGrades({ courses ,coursesList}) {
  
        let courseid= courses.courseId;        
        let courseName = coursesList.find(c => courseid === c.courseId ).courseName;       
  
       return (
        <>           
            <td>{courses.courseGrade}</td>
            <td>{courseName}</td>
            <td>{courses.courseId}</td>
    </>
    )
}
