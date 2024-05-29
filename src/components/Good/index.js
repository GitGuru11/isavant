import React from "react";

export default function index(props) {
  return (
    <div className="item-container">
      <div className="item">
        <img src={props.imgUrl}></img>
      </div>
      <p>{props.content}</p>
    </div>
  );
}
