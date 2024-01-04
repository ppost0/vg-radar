import React from "react";
import Feed from './components/Feed.js'
import logo from '../public/assets/logo.png'

const App = () =>{

  return (
        <main>
          <h1>VG Radar - Gaming News</h1>
          <img src={logo}></img>
          <Feed></Feed>
        </main>
  )
}

export default App