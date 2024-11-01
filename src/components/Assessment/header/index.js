import React from "react";
import Logo from "../../../resources/imgs/home/logo.png";
import "./style.css";

export default function Header() {
  return (
    <div className="assessment1-header">
      <img src={Logo}></img>
      <div className="assessment1-btn">Assessment</div>
    </div>
  );
}
