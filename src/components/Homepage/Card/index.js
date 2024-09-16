import React from "react";
import "./style.css";
import CardIcon from "../../../resources/imgs/home/cardIcon.svg";

export default function Card(props) {
  return (
    <div className="home-card-container">
      <div className="home-card-img">
        <div className="home-card-img-title">{props.cardData.imgTitle}</div>
      </div>

      <div className="home-card-subtitle">{props.cardData.title}</div>

      {props.cardData.contents.map((content) => (
        <div className="home-card-content-container">
          <img src={CardIcon}></img>
          <div className="home-card-content">{content}</div>
        </div>
      ))}
    </div>
  );
}
