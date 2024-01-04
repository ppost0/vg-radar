import React from "react";
import Feed from './components/Feed.js';
import NavBar from './components/NavBar.js';

import logo from '../public/assets/logo.png';

const App = () =>{

  return (
        <main>
          <NavBar></NavBar>
          <img className='logo' src={logo}></img>
          <Feed></Feed>
        </main>
  )
}

export default App