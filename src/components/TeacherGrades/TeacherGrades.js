import React, { useState } from 'react'
import UpdateGradeModal from '../../components/UpdateGradeModal/UpdateGradeModal'

export default function TeacherGrades({ courses ,coursesList}) {
  
    const [showUpdateGradeModal, setShowUpdateGradeModal] = useState(false);

        let courseid= courses.courseId;        
        let courseName = coursesList.find(c => courseid === c.courseId ).courseName;       
  
        function onCreate (grade) {
            courses.courseGrade = grade;
        }

       return (
        <>           
            <td onClick={() => setShowUpdateGradeModal(true)}>{courses.courseGrade}</td>
            <td>{courseName}</td>
            <td>{courses.courseId}</td>
            <UpdateGradeModal show={showUpdateGradeModal} onClose={() => setShowUpdateGradeModal(false)} 
            onCreate={onCreate}/>
    </>
    )
}
