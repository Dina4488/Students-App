
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
import UserModel from './model/UserModel/UserModel';
import CourseModel from './model/CourseModel/CourseModel';
import SendMsgPage from './pages/SendMsgPage/SendMsgPage';
import UpdateGrades from './pages/UpdateGrades/UpdateGrades';
import MessageModel from './model/MessageModel/MessageModel';
import GetMessagesPage from './pages/GetMessagesPage/GetMessagesPage';

function App() {
    const [users, setUsers] = useState(usersJSON.map( plainuser => new UserModel(plainuser)));
    const [activeUser, setActiveUser] = useState(users[1]);
    const [coursesList, setCoursesList] = useState(coursesJSON.map ( course => new CourseModel(course)));
    const [messages,setMessages] = useState([]);


    function addMessage(topic, desc) {
        const newMsg = new MessageModel({
        //   id: messages[messages.length - 1] + 1,
          topic,
          desc,          
          userId: activeUser.id
        });
        
        setMessages(messages.concat(newMsg));
        console.log(newMsg)        
      }
    
      console.log(messages);

  return (
    <ActiveUserContext.Provider value={activeUser}>
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <HomePage/>
            </Route>
            <Route exact path="/login"><LoginPage users={users} onLogin={user =>setActiveUser(user)} /></Route>
            <Route exact path="/signup"><SignupPage/></Route>
            <Route exact path="/students">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <StudentsPage coursesList={coursesList} />
            </Route>
            <Route exact path="/sendMsg">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <SendMsgPage messages={messages} users={users}
                        addMessage={addMessage}/>
            </Route>
            <Route exact path="/updateGrades">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <UpdateGrades coursesList={coursesList} users={users} />
            </Route>
            <Route exact path="/getMessages">
                <NavBar onLogout={() => setActiveUser(null)} messages={messages}/>
                <GetMessagesPage users={users} messages={messages} />
            </Route>
        </Switch>
        </HashRouter>
       </ActiveUserContext.Provider> 

    );
}

export default App;
