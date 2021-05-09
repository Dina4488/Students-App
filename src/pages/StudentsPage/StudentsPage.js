import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router'
import StudentGradesTable from '../../components/StudenGradesTable/StudentGradesTable'
import ActiveUserContext from '../../shared/ActiveUserContext'
import CourseModel from '../../model/CourseModel/CourseModel'

function StudentsPage({coursesList}) {
const activeUser = useContext(ActiveUserContext)

    if (!activeUser) {
        return <Redirect to="/"/>
    }
 let studentCourses = activeUser.courses.map(p => new CourseModel(p));
// console.log(bbb);

// const co = activeUser.courses;
for (let course of studentCourses){
    let courseid= course.courseId;
    // console.log(courseid)
    // coursesList.find(courseid === coursesList.courseid )
    
     let courseName = coursesList.find(c => courseid === c.courseId ).courseName;
    //  console.log(courseName);
     course.courseName = courseName;
}
    return (
        <div>
            <h4>hello {activeUser.fname}</h4>  
        <Container>                       
                 {<StudentGradesTable courses={studentCourses}/>}          
            </Container>

        </div>
    )
}

export default StudentsPage
