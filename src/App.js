import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import UserProfileContainer from "./Components/Content/UserProfile/UserProfileContainer";
import AllUsersContainer from "./Components/Content/AllUsers/AllUsersContainer";
import {Login} from "./Components/Login/Login";


function App(props) {
  return (
          <div className='wrapper'>
            <HeaderContainer store={props.store}/>
            <div className='content'>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className='mainContent'>
                    <Route path="/profile/:userId" render={ () => <UserProfileContainer store={props.store}/> }/>
                    <Route exact path="/profile/" render={ () => <UserProfileContainer store={props.store}/> }/>
                    <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}/> }/>
                    <Route path="/login" render={ () => <Login/> }/>
                    <Route path="/users" render={ () => <AllUsersContainer store={props.store}/> }/>
                    <Route path="/news" render={ () => <News/> }/>
                    <Route path="/settings" render={ () => <Settings/> }/>
                </div>
            </div>
            <Footer footer={props.state.footer}/>
          </div>
  );
}

export default App;
