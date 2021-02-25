import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Messenger from "./components/Messenger/Messenger";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile />}/>
                    <Route path="/messenger" render={() => <Messenger />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
