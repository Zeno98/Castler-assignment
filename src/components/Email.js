import React from 'react'
import "./Name.css";

const Email = ({data}) => {
  return (
    <div>
        <h3>E-mail</h3>
        {data.email}
        </div>
  )
}

export default Email