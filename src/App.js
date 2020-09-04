import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sets from "./components/Sets/Sets";


function App(props) {

    return (
        <BrowserRouter>
            <div className="body-wrapper">
                <div className="app-wrapper">
                    <Header/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/setting' component={Sets}/>
                        <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
