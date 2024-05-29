import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div className="card-container">
      <div className="card-title">{props.title}</div>
      <div className="card-wrap">
        <img src={props.iconUrl}></img>
        <div className="card-content">{props.content}</div>
      </div>
      <div className="flower-container">
        <img src={props.imgUrl}></img>
      </div>
    </div>
  );
}
