import React from 'react'
import { Redirect } from 'react-router'

function StudentsPage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }


    return (
        <div>
            StudentsPage
        </div>
    )
}

export default StudentsPage
