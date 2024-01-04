import React from "react";

const Article = (props) => {

  return (

   <div className='article'>
    <div className='title'>{props.title}</div>
    <div className='date'>{props.date}</div>
    <div className='url'>{props.url}</div>

   </div>

  )
}

export default Article