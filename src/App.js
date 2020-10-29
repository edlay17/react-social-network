import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
//import UserProfile from "./Components/Content/UserProfile/UserProfile";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import UserProfileContainer from "./Components/Content/UserProfile/UserProfileContainer";

function App(props) {
  return (
          <div className='wrapper'>
            <Header header={props.state.header}/>
            <div className='content'>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className='mainContent'>
                    <Route exact path="/profile" render={ () => <UserProfileContainer store={props.store}/> }/>
                    <Route path="/dialogs" render={ () => <Dialogs messages={props.state.messages} store={props.store}/> }/>
                    <Route path="/news" render={ () => <News/> }/>
                    <Route path="/settings" render={ () => <Settings/> }/>
                </div>
            </div>
            <Footer footer={props.state.footer}/>
          </div>
  );
}

export default App;
