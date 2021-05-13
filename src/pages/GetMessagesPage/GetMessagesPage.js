import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import GetMessagesTable from '../../components/GetMessagesTable/GetMessagesTable'
import MessageModel from '../../model/MessageModel/MessageModel'
import UserModel from '../../model/UserModel/UserModel'
import ActiveUserContext from '../../shared/ActiveUserContext'

export default function GetMessagesPage({users ,messages}) {
    const activeUser = useContext(ActiveUserContext)

    if (!activeUser) {
        return <Redirect to="/"/>
    }

for (let message of messages){
    let userId= message.userId;   
    let userName = users.find(c => userId === c.id ).name;
    message.name = userName;
}


    return (
        <div>
         <GetMessagesTable messages={messages}/>
        </div>
    )
}
