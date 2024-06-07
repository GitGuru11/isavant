import React from "react";
import Header from "./header";
import Footer from "./footer";
import StudentWoman from "../../resources/imgs/questions/student-girl.svg";
import "./style.css";

export default function index() {
  return (
    <div>
      <Header />
      <div className="assessment-container">
        <div className="assessment-wrap">
          <div className="assessment-left">
            <div className="assessment-title-container">
              <span className="isavant-txt font-48">
                The Native Brilliance{" "}
              </span>
              <span className="assessment-txt font-48 color-pink">
                Assessment
              </span>
            </div>
            <button onClick={() => (window.location.href = "/select-user")}>
              Let's get started
            </button>
          </div>
          <img src={StudentWoman}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}
