import React, { useState } from "react";
import Header from "../header";
import "./style.css";

export default function Index() {
  const [flag, setFlag] = useState(0);
  const [current, setCurrent] = useState(0);
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

  const nextPage = (num) => {
    const newIdx = current + num;
    console.log(newIdx);
    if (newIdx !== -1 && newIdx !== 40) {
      setCurrent(newIdx);
    }
    if (newIdx === 40) {
      window.location.href = "/final";
    }
  };

  return (
    <div>
      <Header />
      <div className="question">
        <div className="question-container">
          <img src={`../../imgs/questions/questions_${current + 1}.svg`}></img>
          <div className="question-wrap">
            <div className="question-title font-48">{questions[current]}</div>
            <div className="question-answer-container">
              <div className="question-card">Strongly Agree</div>
              <div className="question-card">Somewhat Agree</div>
              <div className="question-card">Strongly Disagree</div>
              <div className="question-card">Somewhat Disagree</div>
            </div>
            <div className="question-btn-group">
              <button onClick={() => nextPage(-1)} className="back-btn">
                Back
              </button>
              <button onClick={() => nextPage(1)} className="next-btn">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
