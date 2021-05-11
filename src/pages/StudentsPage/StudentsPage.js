import React, { useContext } from 'react'
import {  Container } from 'react-bootstrap'
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

for (let course of studentCourses){
        let courseid= course.courseId;   
        let courseName = coursesList.find(c => courseid === c.courseId ).courseName;
        course.courseName = courseName;
    }
    return (
        <div>           
        <Container>                       
                 {<StudentGradesTable courses={studentCourses}/>}          
            </Container>

        </div>
    )
}

export default StudentsPage
