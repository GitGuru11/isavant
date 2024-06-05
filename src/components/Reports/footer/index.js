import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div className="report-footer-container">
      <div className="report-footer-wrap">
        <button
          className="stress-btn"
          onClick={() => (window.location.href = "/monster")}
          style={{ backgroundColor: props.flag ? "" : "#F277C6" }}
        >
          Stress Monster
        </button>
        <button
          className="native-btn"
          onClick={() => (window.location.href = "/brilliance")}
          style={{ backgroundColor: props.flag ? "#F277C6" : "" }}
        >
          Native Brilliance
        </button>
      </div>
    </div>
  );
}
