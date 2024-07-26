import React from "react";

function Card(props) {
  return (
    <span className="full-card">   
      {console.log(props.location)}
      <img className="card" src={props.location} alt={props.name} />
      <p>{props.name}</p>
    </span>
  )
}

export default Card;
