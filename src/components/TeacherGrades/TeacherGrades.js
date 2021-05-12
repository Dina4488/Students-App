import React, { useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import UpdateGradeModal from '../../components/UpdateGradeModal/UpdateGradeModal'
import Overlay from 'react-bootstrap/Overlay'

export default function TeacherGrades({ courses ,coursesList}) {
  
    const [showUpdateGradeModal, setShowUpdateGradeModal] = useState(false);

        let courseid= courses.courseId;        
        let courseName = coursesList.find(c => courseid === c.courseId ).courseName;       
  
        function onCreate (grade) {
            courses.courseGrade = grade;
        }

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              לחץ כדי לעדכן ציון
            </Tooltip>
          );

       return (
        <>   
            <OverlayTrigger  
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}>       
                <td onClick={() => setShowUpdateGradeModal(true)}>{courses.courseGrade}</td>
            </OverlayTrigger>
            <td>{courseName}</td>
            <td>{courses.courseId}</td>
            <UpdateGradeModal show={showUpdateGradeModal} 
                              onClose={() => setShowUpdateGradeModal(false)} 
                              onCreate={onCreate}/>
    </>
    )
}
