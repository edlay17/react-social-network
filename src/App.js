import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import UserProfile from "./Components/UserProfile";
import Footer from "./Components/Footer";

function App() {
  return (
      <div className='wrapper'>
        <Header/>
        <div class='content'>
            <Sidebar/>
            <UserProfile/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
