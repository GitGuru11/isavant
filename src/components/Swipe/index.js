import React, { useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import "./style.css";

export default function Index(props) {
  return (
    <Flicking moveType="freeScroll" bound={true}>
      {props.cards.map((item) => (
        <div className="item-container">
          <div className="item">
            <img src={item.imgUrl}></img>
          </div>
          <p>{item.content}</p>
        </div>
      ))}
    </Flicking>
  );
}
