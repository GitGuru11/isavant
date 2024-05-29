import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import "./style.css";
import Logo from "../../resources/imgs/logo.png";

export default function index(props) {
  return (
    <div
      className="header"
      style={{
        backgroundColor: `${props.back}`,
        height: `${props.back === "#FFFFFF" ? "70px" : "110px"}`,
      }}
    >
      <div className="header-container">
        <img src={Logo}></img>
        <ul className="list-container">
          <li>Courses</li>
          <li>About us</li>
          <li>Teachers</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="menu-icon">
        <IoMenu />
      </div>
    </div>
  );
}
