import React from "react";
import Logo_icon from "../../../resources/imgs/Logo_icon.png";
import "./style.css";

export default function index() {
  return (
    <div className="test-header">
      <div className="test-header-logo">
        <img src={Logo_icon} />
      </div>
    </div>
  );
}
