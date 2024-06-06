import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Draggable, Droppable } from "react-drag-and-drop";
import { createClient } from "contentful";
import { useLocation } from "react-router-dom";
import Header from "../header";
import "./style.css";

export default function Index() {
  const location = useLocation();
  const types = [
    "Strongly Agree",
    "Somewhat Agree",
    "Strongly Disagree",
    "Somewhat Disagree",
  ];
  const [flag, setFlag] = useState(0);
  const [isParent, setIsParent] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isDisable, setIsDisable] = useState(true);
  const [res, setRes] = useState(new Array(40).fill(0));
  const [resChild, setResChild] = useState(new Array(40).fill(0));
  const [data, setData] = useState({});

  const deliveryAPIKey = "plTZGADCcTmhI34oYFEG0IJ4M_Dp03C-zwO2xMac0v8";
  const spaceId = "mwnrlr44qowg";

  const client = createClient({
    space: spaceId,
    accessToken: deliveryAPIKey,
  });
  const [questions, setQuestions] = useState([
    "I’m always on time",
    "I’m good at remembering others’ names",
    "I’m one of the most organized people I know",
    "I’m sometimes surprised by how people react negatively to me",
    "I’m very different from other people: I have a unique perspective",
    "I often procastrinate",
    "I seek out new experiences",
    "In a group setting, I let others make decisions",
    "When I get interesed something, I can hyperfocus on it for hours",
    "I find myself worrying about the future or the past",
    "I enjoy it when I’m the center of attention",
    "I take pride in my ability to wing it",
    "I often find myself daydreaming about the future or past",
    "When things don’t go as planned, I get easily frustrated or upset",
    "I have a vivid memory of the past",
    "I go to others for comfort and support when I’m distressed",
    "I rely on myself when I’m distressed",
    "I have a hard time speaking up for myself",
    "I have a creative mind",
    "I pick up on new information quickly",
    "My friends and family think I have a good sense of humor",
    "I often find myself saying something inappropiate, even though I don’t intend any harm",
    "I’m very aware of how others perceive me",
    "When it comes to solving problems, I trust myself more than anyone else to come up with the best solution",
    "I sometimes lie to protect others from realities I know they won’t accept",
    "Everyone knows a different version of me, but a few people know the real me",
    "People sometimes get annoyed with me when I have a lot of energy",
    "I’m frequently hard on myself if I make mistakes trying or learning something new",
    "I tend to have friends who have very different personalities that I do",
    "Before making a major decision, I tend to plan and go a lot of research and thinking",
    "Music is an important part of my life",
    "I’m naturally good reader",
    "When things are disorganized/messy, I get frustrated or anxious",
    "I tend to be critical of myself and others",
    "I’m quick to spot problems that others overlook",
    "I have a hard time letting go when others have wronged me",
    "I tend to judge others when they draw too much attention to themselves",
    "I trust my own judgment more than anyone’s",
    "I have a hard time making decisions",
    "I change my mind frequently",
  ]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res[current] && resChild[current]) {
      setIsDisable(false);
    }
  }, [res, resChild]);

  async function getData() {
    try {
      const entries = await client.getEntries({
        content_type: "questions",
      });
      setData(entries.items[0].fields);
      if (location.pathname === "/parent") {
        setIsParent(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const changeValue = (v) => {
    if (!isParent) {
      let tempArr = flag ? [...resChild] : [...res];

      if (flag) {
        tempArr = [...resChild];
        tempArr[current] = v;
        setResChild(tempArr);
      } else {
        tempArr = [...res];
        tempArr[current] = v;
        setRes(tempArr);
        if (location.pathname !== "/parent") {
          setIsDisable(false);
        }
      }
    }
  };

  const next = (num) => {
    const newIdx = current + num;
    if (newIdx !== -1 && newIdx !== 40) {
      setCurrent(newIdx);
      if (num === 1) {
        if (res[current + 1]) {
          setIsDisable(false);
        } else {
          setIsDisable(true);
        }
      } else {
        setIsDisable(false);
      }
    }
    if (newIdx === 40) {
      window.location.href = "/monster";
    }
  };

  const nextPage = (num) => {
    const newIdx = current + num;
    if (newIdx !== -1 && newIdx !== 40) {
      setCurrent(newIdx);
      if (num == 1) {
        if (res[current + 1] && resChild[current + 1]) {
          setIsDisable(false);
        } else {
          setIsDisable(true);
        }
      } else {
        setIsDisable(false);
      }
    }
    if (newIdx === 40) {
      window.location.href = "/fill";
    }
    setFlag(0);
  };

  const handleDrop = (type, idx) => {
    console.log(type, idx);
    let tempArr = type === "child" ? [...resChild] : [...res];

    if (type === "child") {
      tempArr = [...resChild];
      tempArr[current] = idx;
      setResChild(tempArr);
    } else {
      tempArr = [...res];
      tempArr[current] = idx;
      setRes(tempArr);
      if (location.pathname !== "/parent") {
        setIsDisable(false);
      }
    }
  };

  return (
    <div>
      <Header />
      {Object.keys(data).length && (
        <div className="question">
          {isParent && (
            <div className="question-header">
              <div className="parent-container color-red">
                <Draggable type="item" data="parent">
                  <div
                    className="parent-name"
                    style={{
                      backgroundColor: "#f9e09d",
                    }}
                  >
                    {JSON.parse(localStorage.getItem("userInfo")).firstName}
                  </div>
                </Draggable>
                <div className="parent-selection">
                  {" "}
                  {types[res[current] - 1]}
                </div>
              </div>

              <div className="child-container color-blue">
                <Draggable type="item" data="child">
                  <div
                    className="child-name"
                    style={{
                      backgroundColor: "#f9e09d",
                    }}
                  >
                    {
                      JSON.parse(localStorage.getItem("userInfo"))
                        .studentFirstName
                    }
                  </div>
                </Draggable>
                <div className="child-selection">
                  {" "}
                  {types[resChild[current] - 1]}
                </div>
              </div>
            </div>
          )}
          <div className="question-container">
            <img src={data.question[current].fields.img.fields.file.url}></img>
            <div className="question-wrap">
              <div className="progress">
                <div className="progress-container">
                  <div
                    style={{ width: `${(100 / 40) * (current + 1)}%` }}
                    className="progress-row"
                  >
                    <div className="progress-circle"></div>
                  </div>
                  <div className="progress-state">{`${current + 1}/${
                    data.question.length
                  }`}</div>
                </div>
              </div>
              <div className="question-title font-48">
                {data.question[current].fields.title}
              </div>
              <div className="question-answer-container">
                <Droppable
                  types={["item"]}
                  onDrop={(data) => handleDrop(data.item, 1)}
                >
                  <div
                    onClick={() => changeValue(1)}
                    className={`question-card ${isParent ? "" : "card-hover"}`}
                    style={{
                      backgroundColor: isParent
                        ? ""
                        : res[current] === 1
                        ? "#ff9999"
                        : "",
                    }}
                  >
                    {isParent && (
                      <div>
                        <AiOutlineCheckCircle
                          style={{
                            display: res[current] === 1 ? "block" : "none",
                          }}
                          className="check-icon1"
                        />
                        <AiOutlineCheckCircle
                          style={{
                            display: resChild[current] === 1 ? "block" : "none",
                          }}
                          className="check-icon2"
                        />
                      </div>
                    )}
                    Strongly Agree
                  </div>
                </Droppable>

                <Droppable
                  types={["item"]}
                  onDrop={(data) => handleDrop(data.item, 2)}
                >
                  <div
                    onClick={() => changeValue(2)}
                    className={`question-card ${isParent ? "" : "card-hover"}`}
                    style={{
                      backgroundColor: isParent
                        ? ""
                        : res[current] === 2
                        ? "#ff9999"
                        : "",
                    }}
                  >
                    {isParent && (
                      <div>
                        <AiOutlineCheckCircle
                          style={{
                            display: res[current] === 2 ? "block" : "none",
                          }}
                          className="check-icon1"
                        />
                        <AiOutlineCheckCircle
                          style={{
                            display: resChild[current] === 2 ? "block" : "none",
                          }}
                          className="check-icon2"
                        />
                      </div>
                    )}
                    Somewhat Agree
                  </div>
                </Droppable>

                <Droppable
                  types={["item"]}
                  onDrop={(data) => handleDrop(data.item, 3)}
                >
                  <div
                    onClick={() => changeValue(3)}
                    className={`question-card ${isParent ? "" : "card-hover"}`}
                    style={{
                      backgroundColor: isParent
                        ? ""
                        : res[current] === 3
                        ? "#ff9999"
                        : "",
                    }}
                  >
                    {isParent && (
                      <div>
                        <AiOutlineCheckCircle
                          style={{
                            display: res[current] === 3 ? "block" : "none",
                          }}
                          className="check-icon1"
                        />
                        <AiOutlineCheckCircle
                          style={{
                            display: resChild[current] === 3 ? "block" : "none",
                          }}
                          className="check-icon2"
                        />
                      </div>
                    )}
                    Strongly Disagree
                  </div>
                </Droppable>

                <Droppable
                  types={["item"]}
                  onDrop={(data) => handleDrop(data.item, 4)}
                >
                  <div
                    onClick={() => changeValue(4)}
                    className={`question-card ${isParent ? "" : "card-hover"}`}
                    style={{
                      backgroundColor: isParent
                        ? ""
                        : res[current] === 4
                        ? "#ff9999"
                        : "",
                    }}
                  >
                    {isParent && (
                      <div>
                        <AiOutlineCheckCircle
                          style={{
                            display: res[current] === 4 ? "block" : "none",
                          }}
                          className="check-icon1"
                        />
                        <AiOutlineCheckCircle
                          style={{
                            display: resChild[current] === 4 ? "block" : "none",
                          }}
                          className="check-icon2"
                        />
                      </div>
                    )}
                    Somewhat Disagree
                  </div>
                </Droppable>
              </div>
              {location.pathname === "/parent" ? (
                <div className="question-btn-group">
                  <button onClick={() => nextPage(-1)} className="back-btn">
                    Back
                  </button>
                  <button
                    disabled={isDisable}
                    onClick={() => nextPage(1)}
                    className="next-btn"
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div className="question-btn-group">
                  <button onClick={() => next(-1)} className="back-btn">
                    Back
                  </button>
                  <button
                    disabled={isDisable}
                    onClick={() => next(1)}
                    className="next-btn"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
