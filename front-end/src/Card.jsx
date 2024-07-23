import React from "react";

function Card(props) {
  return (
    <div className = "Card">
      <h1>props.name</h1>
      <img src={props.location} alt={props.name} />
      
    </div>
  )
}