import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Header from "../../header";
import Footer from "../../footer";
import Progress from "../../progress";
import Man1 from "../../../../resources/imgs/assessment/man.svg";
import Dish1 from "../../../../resources/imgs/assessment/dishes/dish1.svg";
import Dish2 from "../../../../resources/imgs/assessment/dishes/dish2.svg";
import Dish3 from "../../../../resources/imgs/assessment/dishes/dish3.svg";
import Dish4 from "../../../../resources/imgs/assessment/dishes/dish4.svg";
import Dish5 from "../../../../resources/imgs/assessment/dishes/dish5.svg";
import Dish6 from "../../../../resources/imgs/assessment/dishes/dish6.svg";
import Dish7 from "../../../../resources/imgs/assessment/dishes/dish7.svg";
import "./style.css";

export default function Module() {
  const [cnt, setCnt] = useState(2);

  let Content = <></>;
  if (!cnt) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 1</div>
            <div className="module1-body">
              <div className="module1-title">
                Reading the specials & reading faces
              </div>
              <div className="module1-content1">
                In this module, sharpen your emotional intuition as you match
                guests'reaction to their perfect dish.
              </div>
              <div className="module1-content2">
                Observe each guest's initial emotional state and then interpret
                their facial expressions as they respond to a special menu item.
                Your task: drag the dish to the category that best aligns with
                their reaction, testing your ability to read and respond to
                subtle emotional cues.
              </div>
              <div className="module1-categories">Categories</div>
              <div className="module1-dishes">
                <div className="module1-dish">Favorite dish</div>
                <div className="module1-dish">2nd favorite dish</div>
                <div className="module1-dish">Detested dish</div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn">
          Next{" "}
          <div
            style={{
              paddingTop: "5px",
              display: "inline-block",
            }}
          >
            <FaChevronRight color="white" size={16} />
          </div>
        </div>
      </div>
    );
  } else if (cnt == 1) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 1</div>
            <div className="module1-body">
              <div className="module1-title">
                What best describes Tom's emotional state?
              </div>
              <div className="module1-content1">
                Drags the dish to the appropriate category based on the guest's
                expression in the image
              </div>
              <div className="img-container">
                <img
                  className="module1-content2 module1-man-img"
                  src={Man1}
                ></img>
              </div>
              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div className="module1-dish">Excited</div>
                <div className="module1-dish">Depressed</div>
                <div className="module1-dish">Nostalgic</div>
                <div className="module1-dish">Anxious</div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn">
          Next{" "}
          <div
            style={{
              paddingTop: "5px",
              display: "inline-block",
            }}
          >
            <FaChevronRight color="white" size={16} />
          </div>
        </div>
      </div>
    );
  } else if (cnt == 2) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 1</div>
            <div className="module1-body">
              <div className="module1-title">
                What best describes Tom's emotional state?
              </div>
              <div className="module1-content1">
                Drags the dish to the appropriate category based on the guest's
                expression in the image
              </div>

              <div className="module1-dish-bar">
                <img src={Dish1} />
                <img src={Dish2} />
                <img src={Dish3} />
                <img src={Dish4} />
                <img src={Dish5} />
                <img src={Dish6} />
              </div>

              <div className="img-container">
                <img
                  className="module1-content2 module1-man-img"
                  src={Man1}
                ></img>
                <div className="module1-dishes module1-dishes3">
                  <div className="module1-dish">Favorite Dish</div>
                  <div className="module1-dish">2nd Favorite Dish</div>
                  <div className="module1-dish">Detested dish</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn">
          Next{" "}
          <div
            style={{
              paddingTop: "5px",
              display: "inline-block",
            }}
          >
            <FaChevronRight color="white" size={16} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="module1-container">
      <Header />
      {Content}
      <Footer />
    </div>
  );
}
