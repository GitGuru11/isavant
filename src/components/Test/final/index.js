import React from "react";
import Header from "../../Test/header";
import StudentMan from "../../../resources/imgs/questions/student-man.svg";
import "./style.css";

export default function index() {
  return (
    <div>
      <Header />
      <div className="final-container">
        <div className="final-wrap">
          <img src={StudentMan}></img>
          <div className="final-title-container">
            <span className="isavant-txt font-48">To get a copy of</span>
            <span className="assessment-txt font-48 color-pink">
              &nbsp;your results
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
