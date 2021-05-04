
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPgae/SignupPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <HashRouter>
        <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/login"><LoginPage/></Route>
            <Route exact path="/signup"><SignupPage/></Route>
            <Route exact path="/students"><StudentsPage/></Route>
        </Switch>
    </HashRouter>
    </>
    );
}

export default App;
