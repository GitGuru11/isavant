import React from "react";
import Header from "../header";
import Student from "../../../resources/imgs/questions/student.svg";
import Parent from "../../../resources/imgs/questions/parent.svg";
import Coach from "../../../resources/imgs/questions/coach.svg";
import "./style.css";

export default function index() {
  const role = ["student", "parent", "coach"];
  const startTest = (idx) => {
    if (idx === 1) {
      window.location.href = "/info";
    } else {
      window.location.href = `/${role[idx]}`;
    }
  };

  return (
    <div>
      <Header />
      <div className="select-container">
        <span className="isavant-txt font-48">Tell us about</span>
        <span className="assessment-txt font-48 color-pink">
          &nbsp;yourself
        </span>
      </div>
      <div className="select-card-container">
        <div className="select-card">
          <img onClick={() => startTest(0)} src={Student}></img>
          <p>Student</p>
        </div>
        <div className="select-card">
          <img onClick={() => startTest(1)} src={Parent}></img>
          <p>Parent</p>
        </div>
        <div className="select-card">
          <img onClick={() => startTest(2)} src={Coach}></img>
          <p>Coach</p>
        </div>
      </div>
    </div>
  );
}
