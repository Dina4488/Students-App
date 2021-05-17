import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import GetMessagesTable from '../../components/GetMessagesTable/GetMessagesTable'
import ActiveUserContext from '../../shared/ActiveUserContext'

export default function GetMessagesPage({users ,messages , topicsList}) {
    const activeUser = useContext(ActiveUserContext)

    if (!activeUser) {
        return <Redirect to="/"/>
    }

for (let message of messages){ 
    let userName = users.find(user => message.userId === user.id ).name;
    message.name = userName;    
    let topicName = topicsList.find(topic => message.topicId === topic.topicId).topicName;
    message.topicName = topicName;
}


    return (
        <div>
         <GetMessagesTable messages={messages}/>
        </div>
    )
}
