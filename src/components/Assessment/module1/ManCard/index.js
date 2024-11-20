import React from "react";
import Dish1 from "../../../../resources/imgs/assessment/dishes/dish1.svg";
import Dish2 from "../../../../resources/imgs/assessment/dishes/dish2.svg";
import Dish3 from "../../../../resources/imgs/assessment/dishes/dish3.svg";
import "./style.css";

export default function ManCard(props) {
  return (
    <div className="mancard-contaienr">
      <img className="man-img" src={props.img}></img>
      <div className="mancard-body">
        <div className="mancard-name">{props.name}</div>
        <div className="mancard-food">
          <div className="mancard-order">1st choice</div>
          <img src={Dish1}></img>
        </div>
        <div className="mancard-food">
          <div className="mancard-order">2nd choice</div>
          <img src={Dish2}></img>
        </div>
        <div className="mancard-food">
          <div className="mancard-order">Detested</div>
          <img src={Dish3}></img>
        </div>
        <div className="mancard-food"></div>
        <div className="mancard-food"></div>
      </div>
    </div>
  );
}
