import React from "react";

const Article = (props) => {

  return (

   <div className='article'>
    <a className='title' href={props.url}>{props.title}</a>
    <div className='date'>{props.date}</div>
   </div>

  )
}

export default Article