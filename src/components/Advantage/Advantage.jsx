import React from "react";
import "./Advantage.css";

function Advantage(props) {
  return (
    <div className="advantage-card">
      <div className="advantage-title">
        <img className="advantage-icon" src={props.icon} alt={props.title} />
        <h1 className="advantage-text">{props.title}</h1>
      </div>
      <p className="advantage-description">{props.text}</p>
    </div>
  );
}

export default Advantage;
