
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPgae/SignupPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import ActiveUserContext from './shared/ActiveUserContext';
import usersJSON from './data/users.json';
import coursesJSON from './data/courses.json';
import messageJSON from './data/messages.json'
import UserModel from './model/UserModel/UserModel';
import CourseModel from './model/CourseModel/CourseModel';
import SendMsgPage from './pages/SendMsgPage/SendMsgPage';
import UpdateGrades from './pages/UpdateGrades/UpdateGrades';
import MessageModel from './model/MessageModel/MessageModel';
import GetMessagesPage from './pages/GetMessagesPage/GetMessagesPage';

function App() {
    const [users, setUsers] = useState(usersJSON.map( plainuser => new UserModel(plainuser)));
    const [activeUser, setActiveUser] = useState("");
    const [coursesList, setCoursesList] = useState(coursesJSON.map ( course => new CourseModel(course)));
    
    const topicsList = [{"topicId": 1,"topicName":"ערעור"},
                        {"topicId": 2,"topicName":"שאלה למורה"},
                        {"topicId": 3,"topicName":"בקשה"}
                        ]
    const [messages,setMessages] = useState(messageJSON.map( plainMsg => new MessageModel(plainMsg)));

    function addMessage(topicId, desc) {
        const newMsg = new MessageModel({
        //   id: messages[messages.length - 1] + 1,
          topicId,
          desc,          
          userId: activeUser.id,
          isNew : true
        });
        
        setMessages(messages.concat(newMsg));
        console.log(newMsg)        
      }
    
    function addUser(id,email, fname, lname,pwd){
        const newUser = new UserModel({
            id,
            fname,
            lname,
            email,
            pwd,
            role:"student",
            courses:[{
                "courseId": 1,
                "courseGrade" : ""
                }]
        });
        setUsers(users.concat(newUser));
    }

         
  return (
    <ActiveUserContext.Provider value={activeUser}>
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <HomePage/>
            </Route>
            <Route exact path="/login"><LoginPage users={users} onLogin={user =>setActiveUser(user)} /></Route>
            <Route exact path="/signup">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <SignupPage addUser={addUser} users={users} onLogin={user =>setActiveUser(user)}/>
            </Route>
            <Route exact path="/students">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <StudentsPage coursesList={coursesList} />
            </Route>
            <Route exact path="/sendMsg">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <SendMsgPage messages={messages} users={users}
                        addMessage={addMessage} topicsList={topicsList}/>
            </Route>
            <Route exact path="/updateGrades">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <UpdateGrades coursesList={coursesList} users={users}/>
            </Route>
            <Route exact path="/getMessages">
                <NavBar onLogout={() => setActiveUser(null)} messages={messages}/>
                <GetMessagesPage users={users} messages={messages} topicsList={topicsList}/>
            </Route>
        </Switch>
        </HashRouter>
       </ActiveUserContext.Provider> 

    );
}

export default App;
