import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router'
import StudentGradesTable from '../../components/StudentGradesTable/StudentGradesTable'
import ActiveUserContext from '../../shared/ActiveUserContext'


function StudentsPage() {
const activeUser = useContext(ActiveUserContext)

    if (!activeUser) {
        return <Redirect to="/"/>
    }
//  let bbb = activeUser.courses.map(p => new CourseModel(p));

    return (
        <div>
            <h4>hello {activeUser.fname}</h4>  
        <Container>
            <Row>                
                 {<StudentGradesTable courses={activeUser.courses}/>}
            </Row>
            </Container>

        </div>
    )
}

export default StudentsPage
