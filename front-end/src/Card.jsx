import React from "react";

function Card(props) {
  return (
    <div className = "Card">
      <h1>{props.name}</h1>
      {console.log(props.location)}
      <img class="ssds" src={props.location} alt={props.name} />
    </div>
  )
}

export default Card;
