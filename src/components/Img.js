import React from 'react'
import "./Name.css";

const Img = ({data}) => {
  return (
    <div>
        <h3>Profile Image</h3>
        <img src={data.avatar} className="card-img-top" alt={data.first_name}/></div>
  )
}

export default Img