import React from 'react'
import "./Target.css"

function Target({data}) {
    console.log(data)
  return (
    <div className="target-container">
        <div className="target-little-container">
            <img></img>
            <p>{data.name}</p>
            <p>{data.profession}</p>
            <p>{data.description}</p>
        </div>
    </div>
  );
}

export default Target;