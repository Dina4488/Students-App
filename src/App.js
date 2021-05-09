
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

function App() {
    const [users, setUsers] = useState(usersJSON.map( plainuser => new UserModel(plainuser)));
    const [activeUser, setActiveUser] = useState(users[0]);
    const [coursesList, setCoursesList] = useState(coursesJSON.map ( course => new CourseModel(course)));

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
                <SendMsgPage />
            </Route>
            <Route exact path="/updateGrades">
                <NavBar onLogout={() => setActiveUser(null)}/>
                <UpdateGrades coursesList={coursesList} users={users} />
            </Route>
        </Switch>
        </HashRouter>
       </ActiveUserContext.Provider> 

    );
}

export default App;
