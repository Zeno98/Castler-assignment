import React from 'react'
import "./Name.css";

const Name = ({data}) => {
  return (
    <div>
        <h3>Name</h3>
         {data.first_name} {data.last_name}
         </div>
  )
}

export default Name