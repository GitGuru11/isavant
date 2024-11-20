import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./style.css";

export default function index() {
  const Navigate = () => {
    window.location.href = "/cognitive-assessment";
  };

  return (
    <div className="assessment1-container">
      <Header />
      <div className="assessment1-wrap">
        <div className="assessment1-title">
          Get their <span class="highlight1">Number!</span>
        </div>
        <div className="assessment1-content">
          The following game requires you to use your cognitive skills to be a
          waiter at a busy restaurant. The goal of the game is to impress a
          guest who caught your eye. Can you get their number? Put your
          cognitive skills to the test!
        </div>
        <div onClick={() => Navigate()} className="assessment1-start-btn">
          Get started
        </div>
      </div>
      <Footer />
    </div>
  );
}
