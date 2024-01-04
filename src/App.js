import React from "react";
import Feed from './components/Feed.js';
import NavBar from './components/NavBar.js';
import Sidebar from './components/Sidebar.js';

import logo from '../public/assets/logo.png';

const App = () =>{

  return (
        <main>
          <NavBar></NavBar>
          <div className='main-container'>
            <Sidebar></Sidebar>
            <Feed></Feed>
          </div>
        </main>
  )
}

export default App