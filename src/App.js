
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
import UserModel from './model/UserModel/UserModel';

function App() {
    const [users, setUsers] = useState(usersJSON.map( plainuser => new UserModel(plainuser)));
    const [activeUser, setActiveUser] = useState("");
    

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
                <StudentsPage />
            </Route>
        </Switch>
        </HashRouter>
       </ActiveUserContext.Provider> 

    );
}

export default App;
