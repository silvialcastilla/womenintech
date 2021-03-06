import React, { useState } from "react";
import "./Target.css";

function Target({ data }) {
  // const [teachers, setTeachers] = useState[
  //   (Clara, Miriam, Nora, Sol, Silvia, Marina, Marinaa, Reyes)
  // ];

  return (
    <div className="target-container">
      <div className="target-little-container">
        <img className="target-img" src={data.img} alt={data.name}></img>
        <p className="titles-about">{data.name}</p>
        <p className="profesion">{data.profession}</p>
        <p className="quote">{data.description}</p>
      </div>
    </div>
  );
}

export default Target;
