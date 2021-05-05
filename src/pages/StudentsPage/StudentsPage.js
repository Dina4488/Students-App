import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import ActiveUserContext from '../../shared/ActiveUserContext'


function StudentsPage() {
const activeUser = useContext(ActiveUserContext)

    if (!activeUser) {
        return <Redirect to="/"/>
    }


    return (
        <div>
            StudentsPage
            hello {activeUser.fname}
        </div>
    )
}

export default StudentsPage
