import React from 'react'

const Clock = ({stime}) => {
    let time = new Date().toLocaleString();
   
  return (

   <p>{time}</p>
  )
}

export default Clock