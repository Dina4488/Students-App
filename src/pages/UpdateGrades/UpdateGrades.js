import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import TeacherGradesTable from '../../components/TeacherGradesTable/TeacherGradesTable'
import ActiveUserContext from '../../shared/ActiveUserContext'

export default function UpdateGrades({coursesList , users}) {
    const activeUser = useContext(ActiveUserContext);
   
    let onlystudents = [];
    onlystudents = users.filter(a => a.role === "student");


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div>                
            <Container>                       
                 {<TeacherGradesTable courses={coursesList} students={onlystudents}/>}          
            </Container>

        </div>
    )
}
