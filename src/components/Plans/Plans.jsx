import React from "react";
import "./Plans.css";

function Plans(props) {
  const listItems = props.list.map((item, index) => (
    <li className="plans-item-list" key={index}>
      {item}
    </li>
  ));
  return (
    <div className={props.active ? "plans plans-active" : "plans"}>
      <h1 className="plans-title">{props.title}</h1>
      <p className="plans-description">{props.description}</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Plans;
