import React from "react";

import logo from '../../public/assets/logo.png';


const Sidebar = () => {

  return (
   <div className='sidebar'>
    <img className='logo' src={logo}></img>
    <div className='filters'>
      <div className='filter'>PLAYSTATION</div>
      <div className='filter'>XBOX</div>
      <div className='filter'>PC</div>
      <div className='filter'>NINTENDO</div>
    </div>

   </div>

  )
}

export default Sidebar