import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import GetMessagesTable from '../../components/GetMessagesTable/GetMessagesTable'
import ActiveUserContext from '../../shared/ActiveUserContext'
import { Pie } from 'react-chartjs-2';

export default function GetMessagesPage({users ,messages , topicsList}) {
    const activeUser = useContext(ActiveUserContext)

    if (!activeUser) {
        return <Redirect to="/"/>
    }
 
    let topic1 = 0 ;
    let topic2 = 0;
    let topic3 = 0;

for (let message of messages){ 
    let userName = users.find(user => message.userId === user.id ).name;
    message.name = userName;    
    let topicName = topicsList.find(topic => message.topicId === topic.topicId).topicName;
    message.topicName = topicName;

    if(message.topicId === 1){
        ++topic1;
    } else if (message.topicId === 2){
        ++topic2;
    } else {
        ++topic3;
    }
}

const data = {
    labels: ['ערעור', 'שאלה למורה', 'בקשה'],
    datasets: [
        {
        label: '# of Votes',
        data: [topic1, topic2, topic3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
};

    return (
        <div>
            <GetMessagesTable messages={messages}/>
            <div className="pie">
                <Pie data={data}/>
            </div>
        </div>
    )
}
