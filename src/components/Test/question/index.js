import React, { useState, useEffect } from "react";
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

      console.log(entries.items[0].fields);
      setData(entries.items[0].fields);
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const changeValue = (v) => {
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
      window.location.href = "/final";
    }
    setFlag(0);
  };

  return (
    <div>
      <Header />
      {Object.keys(data).length && (
        <div className="question">
          {location.pathname === "/parent" && (
            <div className="question-header">
              <div className="parent-container color-red">
                <div
                  className="parent-name"
                  style={{
                    backgroundColor: flag ? "#fdf3da" : "#f9e09d",
                  }}
                  onClick={() => setFlag(false)}
                >
                  {JSON.parse(localStorage.getItem("userInfo")).firstName}
                </div>
                <div className="parent-selection">
                  {" "}
                  {types[res[current] - 1]}
                </div>
              </div>

              <div className="child-container color-blue">
                <div
                  className="child-name"
                  style={{
                    backgroundColor: flag ? "#f9e09d" : "#fdf3da",
                  }}
                  onClick={() => setFlag(true)}
                >
                  {
                    JSON.parse(localStorage.getItem("userInfo"))
                      .studentFirstName
                  }
                </div>
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
              <div className="question-title font-48">
                {data.question[current].fields.title}
              </div>
              <div className="question-answer-container">
                <div
                  onClick={() => changeValue(1)}
                  className="question-card"
                  style={{
                    backgroundColor:
                      (flag ? resChild[current] : res[current]) === 1
                        ? "#ff9999"
                        : "",
                  }}
                >
                  Strongly Agree
                </div>
                <div
                  onClick={() => changeValue(2)}
                  className="question-card"
                  style={{
                    backgroundColor:
                      (flag ? resChild[current] : res[current]) === 2
                        ? "#ff9999"
                        : "",
                  }}
                >
                  Somewhat Agree
                </div>
                <div
                  onClick={() => changeValue(3)}
                  className="question-card"
                  style={{
                    backgroundColor:
                      (flag ? resChild[current] : res[current]) === 3
                        ? "#ff9999"
                        : "",
                  }}
                >
                  Strongly Disagree
                </div>
                <div
                  onClick={() => changeValue(4)}
                  className="question-card"
                  style={{
                    backgroundColor:
                      (flag ? resChild[current] : res[current]) === 4
                        ? "#ff9999"
                        : "",
                  }}
                >
                  Somewhat Disagree
                </div>
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
