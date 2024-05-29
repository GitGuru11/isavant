import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div className="order-container">
      <div className="circle">{props.idx + 1}</div>
      <span>{props.content}</span>
    </div>
  );
}
