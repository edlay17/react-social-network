import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import UserProfileContainer from "./Components/Content/UserProfile/UserProfileContainer";
import AllUsersContainer from "./Components/Content/AllUsers/AllUsersContainer";


function App(props) {
  return (
          <div className='wrapper'>
            <HeaderContainer store={props.store}/>
            <div className='content'>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className='mainContent'>
                    <Route path="/profile/:userId" render={ () => <UserProfileContainer store={props.store}/> }/>
                    <Route exact path="/profile/" render={ () => <UserProfileContainer store={props.store}/> }/>
                    <Route path="/dialogs" render={ () => <Dialogs messages={props.state.messages} store={props.store}/> }/>
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
