import React, { useState } from "react";
import "./style.css";

export default function Index(props) {
  const [flag, setFlag] = useState(false);
  const [cnt, setCnt] = useState(-1);
  return (
    <div className="card-container">
      <div className="card-title">{props.title}</div>
      <div className="card-wrap">
        <img src={props.iconUrl}></img>
        <div className="cards">
          {console.log(cnt)}
          {props.cardContent &&
            props.cardContent.map((item, idx) => (
              <div className="card-content">
                <div
                  onClick={() => {
                    setCnt(idx);
                    setFlag(!flag);
                  }}
                  className={`card-subTitle ${cnt === idx ? "color-pink" : ""}`}
                >
                  ● {item.title}
                </div>
                {cnt === idx &&
                  flag === true &&
                  (item.links
                    ? item.links.map((content, index) => (
                        <a
                          href="/"
                          style={{ transition: "all 1s" }}
                          className="card-subContent"
                        >
                          {`${content}`}
                        </a>
                      ))
                    : item.content.map((content, index) => (
                        <div
                          style={{ transition: "all 1s" }}
                          className="card-subContent"
                        >
                          {`- ${content}`}
                        </div>
                      )))}
              </div>
            ))}
        </div>
      </div>
      <div className="flower-container">
        <img src={props.imgUrl}></img>
      </div>
    </div>
  );
}
