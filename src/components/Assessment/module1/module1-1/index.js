import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Draggable, Droppable } from "react-drag-and-drop";
import Header from "../../header";
import Footer from "../../footer";
import ManCard from "../ManCard";
import Progress from "../../progress";
import Restaurant from "../../../../resources/imgs/assessment/restaurant.svg";
import Table from "../../../../resources/imgs/assessment/table.svg";
import Man from "../../../../resources/imgs/assessment/man.svg";
import Man1 from "../../../../resources/imgs/assessment/man1.svg";
import Man2 from "../../../../resources/imgs/assessment/man2.svg";
import Man3 from "../../../../resources/imgs/assessment/man3.svg";
import Woman1 from "../../../../resources/imgs/assessment/woman1.svg";
import Woman2 from "../../../../resources/imgs/assessment/woman2.svg";
import Woman3 from "../../../../resources/imgs/assessment/woman3.svg";
import Order from "../../../../resources/imgs/assessment/order.svg";
import Dish1 from "../../../../resources/imgs/assessment/dishes/dish1.png";
import Dish2 from "../../../../resources/imgs/assessment/dishes/dish2.svg";
import Dish3 from "../../../../resources/imgs/assessment/dishes/dish3.svg";
import Dish4 from "../../../../resources/imgs/assessment/dishes/dish4.svg";
import Dish5 from "../../../../resources/imgs/assessment/dishes/dish5.svg";
import Dish6 from "../../../../resources/imgs/assessment/dishes/dish6.svg";
import Dish7 from "../../../../resources/imgs/assessment/dishes/dish7.svg";
import Ear from "../../../../resources/imgs/assessment/ear.png";
import Tea_small from "../../../../resources/imgs/assessment/tea_small.svg";
import Tea_medium from "../../../../resources/imgs/assessment/tea_medium.svg";
import Tea_big from "../../../../resources/imgs/assessment/tea_big.svg";
import Tea_large from "../../../../resources/imgs/assessment/tea_large.svg";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "./style.css";

var imgArr = [];
var selectedWords = [];
export default function Module() {
  const [cnt, setCnt] = useState(2);
  const [cardData, setCardData] = useState([
    { img: Man1, name: "John" },
    { img: Woman1, name: "Stacy" },
    { img: Man2, name: "Peter" },
    { img: Man3, name: "Alex" },
    { img: Woman2, name: "Mary" },
    { img: Woman3, name: "Rachel" },
  ]);

  const [emotionalData, setEmotionalData] = useState([
    { dish: Dish1, emotional: Man, type: 0 },
    { dish: Dish2, emotional: Man1, type: 0 },
    { dish: Dish3, emotional: Man2, type: 0 },
    { dish: Dish4, emotional: Man1, type: 0 },
    { dish: Dish5, emotional: Man2, type: 0 },
    { dish: Dish6, emotional: Man1, type: 0 },
  ]);

  const [emotionalIdx, setEmotionalIdx] = useState(2);

  const [imgIndex, setImageIndex] = useState([]);

  const [words, setWords] = useState([
    "Book",
    "Cousins",
    "Parents",
    "Chair",
    "Laptop",
    "Elephant",
    "Mountain",
    "Computer",
    "Cat",
    "Grandparents",
    "Siblings",
    "Ocean",
    "Guita",
    "Moon",
    "River",
    "Train",
    "Children",
    "Rencil",
    "Pizza",
    "Glasses",
  ]);

  const [res, setRes] = useState([]);
  const [flag, setFlag] = useState(0);
  const [activeNum, setActiveNum] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [groupNumber, setGroupNumber] = useState([]);

  const Choose = (cnt) => {
    let arr = new Array();
    arr[cnt] = 1;
    setRes(arr);
  };

  const SelectDish = (idx) => {
    let tempArr = [...emotionalData];
    tempArr[emotionalIdx].type = idx;
    setEmotionalData(tempArr);
  };

  const handleDrop = (val, idx) => {
    console.log(val, idx);
    const removeIdx = imgArr.indexOf(val);
    if (removeIdx !== -1) {
      delete imgArr[removeIdx];
    }
    imgArr[idx] = val;

    let flag = 1;
    for (let i = 0; i < 6; i++) {
      if (imgArr[i] === undefined) {
        flag = 0;
        break;
      }
    }

    if (flag) {
      setFlag(1);
    }

    setImageIndex([...imgArr]);
  };

  const wordDrop = (idx) => {
    let arr = [...words];
    arr.splice(idx, 1);
    console.log(arr);
    selectedWords.push(words[idx]);
    setWords(arr);
  };

  const removeWords = (idx) => {
    console.log(idx);
    let arr = [...words];
    arr.push(selectedWords[idx]);
    selectedWords.splice(idx, 1);
    setWords(arr);
  };

  const selectGroupNumber = (idx) => {
    if (groupNumber.length == 2) {
      return;
    }
    let tempNum = [...groupNumber];
    tempNum.push(idx);
    setGroupNumber(tempNum);
  };

  let Content = <></>;
  if (cnt == 0) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 3} />
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
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
          <Progress number="02." percent={2 / 3} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 1</div>
            <div className="module1-body">
              <div className="module1-title">
                What best describes Tom's emotional state?
              </div>
              <div className="module1-content1">
                Test your memory and attention to detail in this challenge.
                While the guests were away, they all changed clothes, making it
                harder to recognize them.
              </div>
              <div className="img-container">
                <img
                  className="module1-content2 module1-man-img"
                  src={Man}
                ></img>
              </div>
              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div
                  className="module1-dish"
                  onClick={() => Choose(0)}
                  style={{ background: res[0] ? "#F277C6" : "" }}
                >
                  Excited
                </div>
                <div
                  className="module1-dish"
                  onClick={() => Choose(1)}
                  style={{ background: res[1] ? "#F277C6" : "" }}
                >
                  Depressed
                </div>
                <div
                  className="module1-dish"
                  onClick={() => Choose(2)}
                  style={{ background: res[2] ? "#F277C6" : "" }}
                >
                  Nostalgic
                </div>
                <div
                  className="module1-dish"
                  onClick={() => Choose(3)}
                  style={{ background: res[3] ? "#F277C6" : "" }}
                >
                  Anxious
                </div>
              </div>
            </div>
          </div>
        </div>
        {res.length !== 0 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 2) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="03." percent={1} />
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
                <div className="module1-dish-bar1">
                  {/* {emotionalData.map((data, idx) => (
                      <img
                        src={data.dish}
                        style={{ backgroundColor: "#ff69b4" }}
                      />
                    ))} */}
                  <img
                    src={Dish1}
                    style={{
                      backgroundColor: emotionalIdx == 0 ? "#ff69b4" : "",
                    }}
                    onClick={() => setEmotionalIdx(0)}
                  />
                  <img
                    src={Dish2}
                    style={{
                      backgroundColor: emotionalIdx == 1 ? "#ff69b4" : "",
                    }}
                    onClick={() => setEmotionalIdx(1)}
                  />
                  <img
                    src={Dish3}
                    style={{
                      backgroundColor: emotionalIdx == 2 ? "#ff69b4" : "",
                    }}
                    onClick={() => setEmotionalIdx(2)}
                  />
                  <img
                    src={Dish4}
                    style={{
                      backgroundColor: emotionalIdx == 3 ? "#ff69b4" : "",
                    }}
                    onClick={() => setEmotionalIdx(3)}
                  />
                  <img
                    src={Dish5}
                    style={{
                      backgroundColor: emotionalIdx == 4 ? "#ff69b4" : "",
                    }}
                    onClick={() => setEmotionalIdx(4)}
                  />
                  <img
                    src={Dish6}
                    style={{
                      backgroundColor: emotionalIdx == 5 ? "#ff69b4" : "",
                    }}
                    onClick={() => setEmotionalIdx(5)}
                  />
                </div>
              </div>

              <div className="img-container">
                <img
                  className="module1-content2 module1-man-img"
                  src={emotionalData[emotionalIdx].emotional}
                ></img>
                <div className="module1-dishes module1-dishes3">
                  <div
                    className="module1-dish"
                    onClick={() => SelectDish(1)}
                    style={{
                      background:
                        emotionalData[emotionalIdx].type == 1 ? "#F277C6" : "",
                    }}
                  >
                    Favorite Dish
                  </div>
                  <div
                    className="module1-dish"
                    onClick={() => SelectDish(2)}
                    style={{
                      background:
                        emotionalData[emotionalIdx].type == 2 ? "#F277C6" : "",
                    }}
                  >
                    2nd Favorite Dish
                  </div>
                  <div
                    className="module1-dish"
                    onClick={() => SelectDish(3)}
                    style={{
                      background:
                        emotionalData[emotionalIdx].type == 3 ? "#F277C6" : "",
                    }}
                  >
                    Detested dish
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {emotionalData.every((item) => item.type > 0) && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 3) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 3} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 1</div>
            <div className="module1-body">
              <div className="module1-title">
                Rearrange seating based on guest meal preference
              </div>
              <div className="module1-content1">
                Imagine a scenario where there are 6 people sitting at a round
                table at a restaurant together.
              </div>
              <div className="module1-content2">
                Each person has a favorite dish (the dish they order), a second
                favorite dish, and a detested dish. The task is to identify how
                many different arrangements of guests at the dinner table are
                possible when the guests'preferences act as constraints limiting
                seating arrangements. There are two constraints:
              </div>
              <div className="module1-content3">
                <img src={Order}></img>
                <div>
                  Each person must sit next to the pserson who has ordered their
                  second favorite dish.
                </div>
              </div>

              <div className="module1-content3">
                <img src={Order}></img>
                <div>
                  No guest can sit next to a guest eating their detested dish.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 4) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={2 / 3} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 2</div>
            <div className="module1-body">
              <div className="module1-title">
                Seat the guests so they're happy!
              </div>
              <div className="module1-content1">
                Imagine a scenario where there are 6 people sitting at a round
                table at a restaurant together.
              </div>
            </div>
          </div>
        </div>
        <div className="module1-card">
          {cardData.map((item) => (
            <ManCard img={item.img} name={item.name} />
          ))}
        </div>
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 5) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="03." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 2</div>
            <div className="module1-body">
              <div className="module1-title">Drag guests to seats</div>
              <div className="module1-content1">
                Drag and drop the guests to spots at the table to ensure
                everyone is seated correctly.
              </div>
            </div>
          </div>
        </div>

        <div className="module1-card">
          {cardData.map((item) => (
            <ManCard img={item.img} name={item.name} />
          ))}
        </div>

        <div className="module1-seat">
          <div className="module1-man-group">
            {cardData.map((item, index) => (
              <Draggable type="item" data={index}>
                <img src={item.img} />
              </Draggable>
            ))}
          </div>

          <div className="module1-seat-group">
            <Droppable
              className="module1-circle box1"
              types={["item"]}
              onDrop={(data) => handleDrop(data.item, 0)}
            >
              <img
                className="module1-circle-img"
                src={imgIndex[0] != undefined ? cardData[imgIndex[0]].img : ""}
              ></img>
            </Droppable>

            <Droppable
              className="module1-circle box2"
              types={["item"]}
              onDrop={(data) => handleDrop(data.item, 1)}
            >
              <img
                className="module1-circle-img"
                src={imgIndex[1] != undefined ? cardData[imgIndex[1]].img : ""}
              />
            </Droppable>

            <Droppable
              className="module1-circle box3"
              types={["item"]}
              onDrop={(data) => handleDrop(data.item, 2)}
            >
              <img
                className="module1-circle-img"
                src={imgIndex[2] != undefined ? cardData[imgIndex[2]].img : ""}
              />
            </Droppable>

            <Droppable
              className="module1-circle box4"
              types={["item"]}
              onDrop={(data) => handleDrop(data.item, 3)}
            >
              <img
                className="module1-circle-img"
                src={imgIndex[3] != undefined ? cardData[imgIndex[3]].img : ""}
              />
            </Droppable>

            <Droppable
              className="module1-circle box5"
              types={["item"]}
              onDrop={(data) => handleDrop(data.item, 4)}
            >
              <img
                className="module1-circle-img"
                src={imgIndex[4] != undefined ? cardData[imgIndex[4]].img : ""}
              />
            </Droppable>

            <Droppable
              className="module1-circle box6"
              types={["item"]}
              onDrop={(data) => handleDrop(data.item, 5)}
            >
              <img
                className="module1-circle-img"
                src={imgIndex[5] != undefined ? cardData[imgIndex[5]].img : ""}
              />
            </Droppable>
          </div>
        </div>

        {flag === 1 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 6) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 3</div>
            <div className="module1-body">
              <div className="module1-title">Restaurant Map</div>
              <div className="module1-content1">
                Test your spatial awareness and memory in this unique challenge.
                After observing the waiter's path from the guests'table to the
                computer, your task is to identify the correct table on the
                restaurant map. Can you recall the exact location based on the
                route taken?
              </div>
              <div className="restaurant-img-container">
                <img
                  className="module1-content2 module1-restaurant-img"
                  src={Restaurant}
                ></img>
                <div className="restaurant-map-btn">
                  Restaurant Map{" "}
                  <div
                    style={{
                      paddingTop: "7px",
                      display: "inline-block",
                    }}
                  >
                    <FaChevronRight color="#F277C6" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 7) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 3</div>
            <div className="module1-body">
              <div className="module1-title">Restaurant Map</div>
              <div className="module1-content1">
                Test your spatial awareness and memory in this unique challenge.
                After observing the waiter's path from the guests'table to the
                computer, your task is to identify the correct table on the
                restaurant map. Can you recall the exact location based on the
                route taken?
              </div>
              <div className="restaurant-img-container">
                <img
                  className="module1-content2 module1-restaurant-img"
                  src={Table}
                ></img>
                <div className="table-map-btn">
                  <div
                    style={{
                      paddingTop: "7px",
                      display: "inline-block",
                    }}
                  >
                    <FaChevronLeft color="#F277C6" size={16} />
                  </div>
                  Restaurant Video{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 8) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 4</div>
            <div className="module1-body">
              <div className="module1-title">Entering the guests'orders</div>
              <div className="module1-content1">
                Step into the shoes of a quick-thinking waiter with a
                challenge-the machine is down, and you'are left with only sound
                to guide you.
              </div>

              <div className="module1-content2">
                Each idsh is coded with a unique sequence of audio tones, and
                your job is to recreate these melodies by pressing the correct
                buttons in the right order. Listen carefully, memorize the
                tones, and serve up the dishes with precision.
              </div>

              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div className="module1-dish module4-dish">Salad</div>
                <div className="module1-dish module4-dish">Shrimp</div>
                <div className="module1-dish module4-dish">Chicken</div>
                <div className="module1-dish module4-dish">Lamb</div>
                <div className="module1-dish module4-dish">Salmon</div>
                <div className="module1-dish module4-dish">Steak</div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 9) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 4</div>
            <div className="module1-body">
              <div className="module1-title">Entering the guests'orders</div>
              <div className="module1-content1">
                Step into the shoes of a quick-thinking waiter with a
                challenge-the machine is down, and you'are left with only sound
                to guide you.
              </div>

              <div className="module1-content2">
                Each idsh is coded with a unique sequence of audio tones, and
                your job is to recreate these melodies by pressing the correct
                buttons in the right order. Listen carefully, memorize the
                tones, and serve up the dishes with precision.
              </div>

              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div className="module1-dish module4-dish">Salad</div>
                <div className="module1-dish module4-dish">Shrimp</div>
                <div className="module1-dish module4-dish">Chicken</div>
                <div className="module1-dish module4-dish">Lamb</div>
                <div className="module1-dish module4-dish">Salmon</div>
                <div className="module1-dish module4-dish">Steak</div>
              </div>

              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div className="module1-dish module4-dish1"></div>
                <div className="module1-dish module4-dish2"></div>
                <div className="module1-dish module4-dish3"></div>
                <div className="module1-dish module4-dish4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 10) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 5</div>
            <div className="module1-body">
              <div className="module1-title">
                Identifying guests from the crowd
              </div>

              <div className="module1-content1">
                Test your memory and attention to detail in this challenge.
                While the guests were away, they all changed clothes, making it
                harder to recognize them.
              </div>

              <div className="module1-content2">
                Now, they've returned, and it's up to your to identify the
                guests your table from ones who are sitting at other tables. Out
                of a crowd of 20 faces, can you identify the 6 guests who belong
                at your table?
              </div>

              <div className="img-container">
                <img
                  className="module1-content2 module1-woman-img"
                  src={Woman1}
                ></img>
              </div>
              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div
                  className="module1-dish module4-dish"
                  onClick={() => Choose(7)}
                  style={{ background: res[7] ? "#F277C6" : "" }}
                >
                  Guest at my table
                </div>
                <div
                  className="module1-dish module4-dish"
                  onClick={() => Choose(8)}
                  style={{ background: res[8] ? "#F277C6" : "" }}
                >
                  Not my guest
                </div>
              </div>
            </div>
          </div>
        </div>

        {res.length !== 0 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 11) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 4} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 6</div>
            <div className="module1-body">
              <div className="module1-title">
                Remember guests' names and orders
              </div>
              <div className="module1-content1">
                The food is ready! The next task involves 3 feats of memory:
              </div>
              <div className="module1-content3">
                <img src={Order}></img>
                <div>Remembering the guests'names out of a list of names.</div>
              </div>

              <div className="module1-content3">
                <img src={Order}></img>
                <div>Matching the names to guests'faces</div>
              </div>

              <div className="module1-content3">
                <img src={Order}></img>
                <div>Matching the guests to their orders</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="assessment-next-btn"
          onClick={() => {
            setRes([]);
            setCnt(cnt + 1);
          }}
        >
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
  } else if (cnt == 12) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={2 / 4} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 6</div>
            <div className="module1-body">
              <div className="module1-title">Entering the guests'orders</div>
              <div className="module1-content1">
                Step into the shoes of a quick-thinking waiter with a
                challenge-the machine is down, and you'are left with only sound
                to guide you.
              </div>

              <div className="module1-content2">
                Each idsh is coded with a unique sequence of audio tones, and
                your job is to recreate these melodies by pressing the correct
                buttons in the right order. Listen carefully, memorize the
                tones, and serve up the dishes with precision.
              </div>

              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(9)}
                  style={{ background: res[9] ? "#F277C6" : "" }}
                >
                  Mary
                </div>
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(10)}
                  style={{ background: res[10] ? "#F277C6" : "" }}
                >
                  Sam
                </div>
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(11)}
                  style={{ background: res[11] ? "#F277C6" : "" }}
                >
                  Jerry
                </div>
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(12)}
                  style={{ background: res[12] ? "#F277C6" : "" }}
                >
                  Jack
                </div>
              </div>
            </div>
          </div>
        </div>

        {res.length !== 0 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 13) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="03." percent={3 / 4} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 6</div>
            <div className="module1-body">
              <div className="module1-title">Who is this?</div>
              <div className="module1-content1">
                Chanllenge your recognition skills in this game. A face appears
                on the screen -can you correctly identify who it is?
              </div>

              <div className="module1-content2">
                Rely on your memory and attention to detail to match the face
                with the correct identity.
              </div>
              <div className="img-container">
                <img
                  className="module1-content2 module1-woman-img"
                  src={Man3}
                ></img>
              </div>
              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(13)}
                  style={{ background: res[13] ? "#F277C6" : "" }}
                >
                  Tom
                </div>
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(14)}
                  style={{ background: res[14] ? "#F277C6" : "" }}
                >
                  Jack
                </div>
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(15)}
                  style={{ background: res[15] ? "#F277C6" : "" }}
                >
                  Elijah
                </div>
                <div
                  className="module1-dish module6-dish"
                  onClick={() => Choose(16)}
                  style={{ background: res[16] ? "#F277C6" : "" }}
                >
                  Rick
                </div>
              </div>
            </div>
          </div>
        </div>

        {res.length !== 0 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 14) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="04." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 6</div>
            <div className="module1-body">
              <div className="module1-title">What did Tom order?</div>
              <div className="module1-content1">
                Test your recall in this memory challenge. Tom placed his order
                earlier-do you remember what it was?
              </div>

              <div className="module1-content2">
                Review the options and select the dish Tom chose to see if you
                can get it right.
              </div>
              <div className="img-container">
                <img
                  className="module1-content2 module1-woman-img"
                  src={Man3}
                ></img>
              </div>
              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div
                  className="module1-dish module6-dish dish-container"
                  onClick={() => Choose(17)}
                  style={{ background: res[17] ? "#F277C6" : "" }}
                >
                  <img src={Dish1} />
                </div>
                <div
                  className="module1-dish module6-dish dish-container"
                  onClick={() => Choose(18)}
                  style={{ background: res[18] ? "#F277C6" : "" }}
                >
                  <img src={Dish2} />
                </div>
                <div
                  className="module1-dish module6-dish dish-container"
                  onClick={() => Choose(19)}
                  style={{ background: res[19] ? "#F277C6" : "" }}
                >
                  <img src={Dish3} />
                </div>
                <div
                  className="module1-dish module6-dish dish-container"
                  onClick={() => Choose(20)}
                  style={{ background: res[20] ? "#F277C6" : "" }}
                >
                  <img src={Dish4} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {res.length !== 0 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setRes([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 15) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 7</div>
            <div className="module1-body">
              <div className="module1-title">Remembering their eye color</div>
              <div className="module1-content1">
                Now that you've served the 6 guests, you notice that your love
                interest's eye color is (blue/brown/green). In the following
                test, you have to show you're able to think on your feet about
                their eye color.
              </div>
              <div className="module1-content2">
                You'll get a word representing a color like red, blue, green,
                brown, and yellow. But the color of the word won't match the
                color of the meaning of the word. For every color (but the love
                interest's eye color), your task is to select the color of the
                word. But when the word's meaning =the eye color of your love
                interest, you must select the meaning of the word instead.
              </div>
            </div>
          </div>
        </div>
        <div
          className="assessment-next-btn"
          onClick={() => {
            setRes([]);
            setCnt(cnt + 1);
          }}
        >
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
  } else if (cnt == 16) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 7</div>
            <div className="module1-body">
              <div className="module1-title">Their eye color</div>

              <div className="module1-content1">
                Focus on the details in this challenge. Can you remember the eye
                color of the guests? Pay close attention and see if you can
                accurately identify the correct eye color from the options
                provided.
              </div>

              <div className="module1-title module7-item">Blue</div>
              <div className="module1-categories"></div>
              <div className="module1-dishes module1-dishes2">
                <div className="module1-dish module7-dish1">Gray</div>
                <div className="module1-dish module7-dish2">Blue</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="assessment-next-btn"
          onClick={() => {
            setRes([]);
            setCnt(cnt + 1);
          }}
        >
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
  } else if (cnt == 17) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 8</div>
            <div className="module1-body">
              <div className="module1-title">
                Listening to the guests'dinner conversation
              </div>
              <div className="module1-content1">
                When you're a waiter, you often hear fragments of dinner
                conversations. The best waiters can quickly pick up on the theme
                of a conversation just from hearing these fragments.
              </div>
              <div className="module1-content2">
                To impress your love interest, your job is to determine the
                theme of the conversation from a series of words and phrases.
                The problem is you also hear conversations from neighboring
                tables, so your job is to
              </div>
              <div className="module1-content3">
                <img src={Order}></img>
                <div>
                  Identify the words/phrases that are thematically related out
                  of a larger list of words/phrases
                </div>
              </div>

              <div className="module1-content3">
                <img src={Order}></img>
                <div>Name that theme.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="assessment-group-btn">
          <div
            className="assessment-next-btn module8-next-btn"
            onClick={() => setCnt(cnt + 1)}
          >
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
      </div>
    );
  } else if (cnt == 18) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 8</div>
            <div className="module1-body">
              <div className="module1-title">
                Listening to the guests' dinner conversation
              </div>
              <div className="module1-content1">
                Drag a word from the list, and drop it inside the box
              </div>
            </div>
          </div>
        </div>

        <div className="module8-container">
          <div className="module8-word-left">
            <img src={Ear} />
            <div className="module8-word-group">
              <div className="module8-word-wrap1">
                {new Array(10).fill().map((item, index) => (
                  <Draggable className="drag-words" type="item" data={index}>
                    <div className="module8-word1">{words[index]}</div>
                  </Draggable>
                ))}
              </div>

              <div className="module8-word-wrap2">
                {new Array(10).fill().map((item, index) => (
                  <Draggable
                    className="drag-words"
                    type="item"
                    data={10 + index}
                  >
                    <div className="module8-word2">{words[index + 10]}</div>
                  </Draggable>
                ))}
              </div>
            </div>
          </div>

          <Droppable
            className="word-drop"
            types={["item"]}
            onDrop={(data) => wordDrop(data.item)}
          >
            <div className="module8-select-wrap">
              <div className="module8-word-input">
                {selectedWords.map((value, idx) => (
                  <div onClick={() => removeWords(idx)}>{value}</div>
                ))}
              </div>
            </div>
          </Droppable>
        </div>

        <div className="module8-input-title">Name that theme.</div>
        <input
          className="module8-input-name"
          onChange={(v) => setName(v.target.value)}
        ></input>

        {selectedWords.length !== 0 && name !== "" && (
          <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
        )}
      </div>
    );
  } else if (cnt == 19) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 9</div>
            <div className="module1-body">
              <div className="module1-title">
                Hot/iced beverages for dessert
              </div>
              <div className="module1-content1">
                At the restaurant, coffee, tea and hot chocolate comes in three
                sizes and can be hot or iced. In this module, your task is to
                identify the dessert beverage that doesn't belong.
              </div>
              <div className="module1-content2">
                You'll be presented with 4 cups that can have different contents
                (hot chocolate, coffee, or tea), different sizes (small, medium,
                large) and different temperatures (hot/iced) and will have to
                choose the one beverage that doesn't belong with the other
                three.
              </div>
            </div>
          </div>
        </div>

        <div className="module9-tea-title">EXAMPLE:</div>

        <div className="module9-tea-group">
          <img src={Tea_small} />
          <img src={Tea_medium} />
          <img src={Tea_big} />
          <img src={Tea_large} />
        </div>

        <div className="assessment-next-btn" onClick={() => setCnt(cnt + 1)}>
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
  } else if (cnt == 20) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 9</div>
            <div className="module1-body">
              <div className="module1-title">
                Select the beverage that doesn't fit with the rest.
              </div>
              <div className="module1-content1">
                Put your critical thinking to the test in this challenge. Among
                the beverages listed, one stands out as different from the rest.
              </div>
              <div className="module1-content2">
                Can you spot the odd one out and make the correct selection?
              </div>
            </div>
          </div>
        </div>

        <div className="module9-tea-group tea2">
          <img
            onClick={() => setActiveNum(1)}
            className="tea-img"
            src={Tea_small}
            style={{ borderColor: activeNum === 1 ? "green" : "" }}
          />
          <img
            onClick={() => setActiveNum(2)}
            className="tea-img"
            src={Tea_medium}
            style={{ borderColor: activeNum === 2 ? "green" : "" }}
          />
          <img
            onClick={() => setActiveNum(3)}
            className="tea-img"
            src={Tea_big}
            style={{ borderColor: activeNum === 3 ? "green" : "" }}
          />
          <img
            onClick={() => setActiveNum(4)}
            className="tea-img"
            src={Tea_large}
            style={{ borderColor: activeNum === 4 ? "green" : "" }}
          />
        </div>

        {activeNum !== 0 && (
          <div
            className="assessment-next-btn"
            onClick={() => {
              setActiveNum(0);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 21) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 10</div>
            <div className="module1-body">
              <div className="module1-title">Remember their number!</div>
              <div className="module1-content1">
                Dessert is done! You've handed the guests the bill, and before
                you turn around, your love interest passes you a sheet of paper
                with their number on it.
              </div>
              <div className="module1-content2">
                Your job is to reproduce their number 20 seconds after seeing
                it.
              </div>
            </div>
          </div>
        </div>

        <div className="input-number">Tom's phone number: 435-638-5526</div>

        <div className="assessment-group-btn">
          <div
            className="assessment-next-btn module8-next-btn"
            onClick={() => setCnt(cnt + 1)}
          >
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

        <div className="input-number pre-question">
          <div className="pre-question-title">Previous Question</div>
          <div className="pre-question-content">
            Put your critical thinking to the test in this challenge. Among the
            beverages listed, one stands out as different from the rest
          </div>
        </div>
      </div>
    );
  } else if (cnt == 22) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 10</div>
            <div className="module1-body">
              <div className="module1-title">Remember their number!</div>
              <div className="module1-content1">
                Dessert is done! You've handed the guests the bill, and before
                you turn around, your love interest passes you a sheet of paper
                with their number on it.
              </div>
              <div className="module1-content2">
                Your job is to reproduce their number 20 seconds after seeing
                it.
              </div>
            </div>
          </div>
        </div>

        <input
          onChange={(v) => setPhoneNumber(v.target.value)}
          className="input-number real-input"
          placeholder="435-638-5526"
        />

        {phoneNumber !== "" && (
          <div className="assessment-group-btn">
            <div
              className="assessment-next-btn module8-next-btn"
              onClick={() => setCnt(cnt + 1)}
            >
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
        )}

        <div className="input-number pre-question">
          <div className="pre-question-title">Previous Question</div>
          <div className="pre-question-content">
            Dessert is done! You've handed the guests the bill, and before you
            turn around, your love interest passes you a sheet
          </div>
        </div>
      </div>
    );
  } else if (cnt == 23) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="01." percent={1 / 4} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 11</div>
            <div className="module1-body">
              <div className="module1-title">Tom texts</div>
              <div className="module1-content1">
                Hey! [Guest member] is sick. He/she has Celiac's disease and
                can't eat gluten. Do you remember what he/she ordered?
              </div>
              <div className="module1-content2">
                Oh sure.She ordered _ _ _ _ _ _
              </div>
              <div className="module1-content2">No gluten?</div>
              <div className="module1-content2">
                Nope! I wish he/she had told me!
              </div>
              <div className="module1-content2 module11-title">
                Select the opption that best fits
              </div>
            </div>
          </div>
        </div>

        <div className="module1-categories"></div>
        <div className="module1-dishes module1-dishes2">
          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => Choose(21)}
              style={{ background: res[21] ? "#F277C6" : "" }}
            >
              <img src={Dish1} />
            </div>
            <div className="module11-food-item">Food 1 (No gluten)</div>
          </div>

          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => Choose(22)}
              style={{ background: res[22] ? "#F277C6" : "" }}
            >
              <img src={Dish2} />
            </div>
            <div className="module11-food-item">Food 2 (No gluten)</div>
          </div>

          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => Choose(23)}
              style={{ background: res[23] ? "#F277C6" : "" }}
            >
              <img src={Dish3} />
            </div>
            <div className="module11-food-item">Food 3 (with gluten)</div>
          </div>

          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => Choose(24)}
              style={{ background: res[24] ? "#F277C6" : "" }}
            >
              <img src={Dish4} />
            </div>
            <div className="module11-food-item">Food 4 (No gluten)</div>
          </div>
        </div>

        {res.length !== 0 && (
          <div className="assessment-group-btn module11-btn">
            <div
              className="assessment-next-btn module8-next-btn"
              onClick={() => {
                setRes([]);
                setCnt(cnt + 1);
              }}
            >
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
        )}
      </div>
    );
  } else if (cnt == 24) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="02." percent={1 / 2} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 11</div>
            <div className="module1-body">
              <div className="module1-title">Tom texts!</div>
              <div className="module1-content1">
                Maybe he/she stole a bite from someone sitting next to him/her.
                Do you remember who was sitting next to him/her?
              </div>

              <div className="module1-content2">
                Let me think... I think it was _ _ _ _ _ _ _ and _ _ _ _ _ _ _.
              </div>
            </div>
          </div>
        </div>
        <div className="module1-card">
          {cardData.map((item, idx) => (
            <div
              onClick={() => selectGroupNumber(idx)}
              className="module11-card-container"
              style={{
                borderColor: groupNumber.indexOf(idx) + 1 ? "#F277C7" : "",
              }}
            >
              <ManCard img={item.img} name={item.name} />
              <div
                className="module11-card-number"
                style={{
                  visibility:
                    groupNumber.indexOf(idx) + 1 ? "visible" : "hidden",
                }}
              >
                {groupNumber.indexOf(idx) + 1}
              </div>
            </div>
          ))}
        </div>

        {groupNumber.length === 2 && (
          <div
            className="assessment-next-btn module11-btn"
            onClick={() => {
              setGroupNumber([]);
              setCnt(cnt + 1);
            }}
          >
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
        )}
      </div>
    );
  } else if (cnt == 25) {
    Content = (
      <div className="module1-main">
        <div className="module1-wrap">
          <Progress number="03." percent={3 / 4} />
          <div className="module1-content-wrap">
            <div className="module1-logo">Module 11</div>
            <div className="module1-body">
              <div className="module1-title">Tom texts</div>
              <div className="module1-content1">
                Do you remember what they ordered?
              </div>
              <div className="module1-content2">
                I am pretty sure [chosen guest 1] ordered the_ _ _ _ _ _ _and
                [chosen guest 2] ordered the _ _ _ _ _ _ _.
              </div>
              <div className="module1-content2">
                Oh no! if [gluten sick guest] ate the [guest]'s order, he/she is
                in trouble.
              </div>
              <div className="module1-content2">I think I'm in trouble.</div>

              <div className="module1-content2">Why?</div>
              <div className="module1-content2">
                Do you want to go on a date?
              </div>
            </div>
          </div>
        </div>

        <div className="module1-categories"></div>
        <div className="module1-dishes module1-dishes2">
          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => selectGroupNumber(0)}
              style={{
                background: groupNumber.indexOf(0) + 1 ? "#F277C6" : "",
              }}
            >
              <img src={Dish1} />
            </div>
            <div className="module11-food-item">Food 1</div>
          </div>

          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => selectGroupNumber(1)}
              style={{
                background: groupNumber.indexOf(1) + 1 ? "#F277C6" : "",
              }}
            >
              <img src={Dish2} />
            </div>
            <div className="module11-food-item">Food 2</div>
          </div>

          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => selectGroupNumber(2)}
              style={{
                background: groupNumber.indexOf(2) + 1 ? "#F277C6" : "",
              }}
            >
              <img src={Dish3} />
            </div>
            <div className="module11-food-item">Food 3</div>
          </div>

          <div>
            <div
              className="module1-dish module6-dish dish-container module11-food-wrap"
              onClick={() => selectGroupNumber(3)}
              style={{
                background: groupNumber.indexOf(3) + 1 ? "#F277C6" : "",
              }}
            >
              <img src={Dish4} />
            </div>
            <div className="module11-food-item">Food 4</div>
          </div>
        </div>

        {groupNumber.length === 2 && (
          <div className="assessment-group-btn module11-btn">
            <div
              className="assessment-next-btn module8-next-btn"
              onClick={() => {
                setRes([]);
                setCnt(cnt + 1);
              }}
            >
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
        )}
      </div>
    );
  } else if (cnt == 26) {
    Content = (
      <div className="module1-main">
        <div className="final-content">
          Congratulations! You have completed the Native Brilliance Assessment
        </div>

        <div className="report-text">
          Click 'Next' to see your cognitive report
        </div>

        <div className="assessment-group-btn">
          <div className="assessment-next-btn module8-next-btn">
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
