import React from 'react'

export default function MessagesTable({messages}) {
   
    return (
        <> 
            <td>{messages.name}</td>
            <td>{messages.desc}</td>
            <td>{messages.topic}</td>
        </>
    )
}
  