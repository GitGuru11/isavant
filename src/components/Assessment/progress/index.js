import React from "react";
import "./style.css";

export default function Progress(props) {
  return (
    <div className="assessment-progress-container">
      <div className="assessment-progress">
        <div
          className="assessment-progress-bar"
          style={{
            width: `${props.percent * 100}%`,
            borderTopRightRadius: props.percent === 1 ? "100px" : "",
            borderBottomRightRadius: props.percent === 1 ? "100px" : "",
          }}
        ></div>
      </div>
      <div className="progress-number">{props.number}</div>
    </div>
  );
}
