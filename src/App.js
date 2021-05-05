
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPgae/SignupPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState("");
    const [activeUser, setActiveUser] = useState({ user:"Dina"});


  return (
    <>
    {/* <NavBar activeUser={activeUser} onLogOut={ () => setActiveUser(null)}/> */}
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <NavBar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
                <HomePage/>
            </Route>
            <Route exact path="/login"><LoginPage/></Route>
            <Route exact path="/signup"><SignupPage/></Route>
            <Route exact path="/students">
                <NavBar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
                <StudentsPage activeUser={activeUser}/>
            </Route>
        </Switch>
    </HashRouter>
    </>
    );
}

export default App;
