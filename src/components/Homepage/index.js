import React from "react";
import "@fontsource/outfit/300.css";
import "./style.css";
import logo from "../../resources/imgs/home/logo.png";
import Video1 from "../../resources/imgs/home/video1.svg";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="homepage-header container-80">
        <img src={logo} />
        <div className="assessment-btn">Assessment</div>
      </div>
      <div className="home-title">Your path to Native Brilliance</div>
      <div className="pink-sign"></div>
      <img src={Video1}></img>
    </div>
  );
}
