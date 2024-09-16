import React, { useState } from "react";
import "@fontsource/outfit/300.css";
import "@fontsource/archivo";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
//import footer component
import Footer from "../Common/Footer/HomeFooter";

import logo from "../../resources/imgs/home/logo.png";
import Video1 from "../../resources/imgs/home/video1.svg";
import Video2 from "../../resources/imgs/home/video2.svg";
import Card from "../../components/Homepage/Card";

import Visionary from "../../resources/imgs/home/visionary.png";
import Accountant from "../../resources/imgs/home/accountant.png";
import Persuader from "../../resources/imgs/home/persuader.png";
import Up from "../../resources/imgs/home/up.svg";
import Down from "../../resources/imgs/home/down.svg";

//Sysmptom images
import Chronic from "../../resources/imgs/home/chronic.png";
import Reactive from "../../resources/imgs/home/reactive.png";
import Sinus from "../../resources/imgs/home/sinus.png";
import Circadian from "../../resources/imgs/home/circadian.png";

//liberate imamges
import Rediscover from "../../resources/imgs/home/rediscover.png";
import Identify from "../../resources/imgs/home/identify.png";
import Lifestyle from "../../resources/imgs/home/lifestyle.png";
import Test from "../../resources/imgs/home/test.png";

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "./style.css";

export default function Homepage() {
  const [cardData, setCardData] = useState([
    {
      imgTitle: "perception/memory",
      imgUrl: Visionary,
      title: "Visionary",
      contents: [
        "Unusual capacity for foresight.",
        "Generally aware of realities that conventional wisdom overlook.",
        "Open-minded and endowed with an ability to know without hte need for analytical thinking.",
      ],
    },
    {
      imgTitle: "analysis/memory",
      imgUrl: Accountant,
      title: "Accountant",
      contents: [
        "Deep awareness of what details from the past are relevant to the present.",
        "Innate capacity to distinguish correlation from causation.",
        "Incredible capacity to store data from the outside world.",
      ],
    },
    {
      imgTitle: "memory/output",
      imgUrl: Persuader,
      title: "Persuader",
      contents: [
        "Strong ability to reframe others' perception of reality through communication.",
        "Ability to translate non-linear thinking to linear thinking to communicate overlooked realities.",
        "Inspirational catalysts for change.",
      ],
    },
    {
      imgTitle: "memory/output",
      imgUrl: Persuader,
      title: "Persuader",
      contents: [
        "Strong ability to reframe others' perception of reality through communication.",
        "Ability to translate non-linear thinking to linear thinking to communicate overlooked realities.",
        "Inspirational catalysts for change.",
      ],
    },
  ]);

  const [frameData, setFrameData] = useState([
    "ADHD",
    "AUTISM",
    "ANXIETY",
    "DEPRESSION",
    "NEURODIVERSE",
  ]);

  const [liberData, setLiberData] = useState([
    {
      img: Rediscover,
      title: "Rediscover your Native Brilliance",
      content:
        "First take our Native Brilliance assessment to identify your cognitive gifts",
    },
    {
      img: Identify,
      title: "Identify what triggers your Stress Monster(s)",
      content:
        "Take the 5-min neuroinflammation assessment (The Visual Contrast Sensitivity Test).",
    },
    {
      img: Lifestyle,
      title: "Make lifestyle changes",
      content:
        "Review the Stress Monster and Native Brilliance feedback loop page to identify what lifestyle changes would benefit you most.",
    },
    {
      img: Test,
      title: "Re-test yourself",
      content:
        "Re-test your cognitive performance and levels of neuroinflammation to see what your Native Brilliance is ACTUALLY capable of!",
    },
  ]);

  return (
    <div className="Homepage">
      <div className="homepage-header container-80">
        <img src={logo} />
        <div className="assessment-btn">Assessment</div>
      </div>
      <div className="home-title">Your path to Native Brilliance</div>
      <div className="pink-sign"></div>
      <img className="video1" src={Video1}></img>
      <div className="home-quiz">
        Are your learning differences and/or psychological conditions concealing
        your underlying cognitive gifts?
      </div>

      <div className="home-card">
        <div className="home-card-header container-80">
          <div className="home-card-title">Native Brilliance Types</div>
          <div className="home-icon-group">
            <div className="arrow-wrap">
              <FaArrowLeft />
            </div>
            <div className="arrow-wrap">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <Flicking moveType="freeScroll" bound={true}>
          {cardData.map((item) => (
            <div className="swipe-container">
              <Card cardData={item} />
            </div>
          ))}
        </Flicking>
      </div>

      <div className="home-stress-container container-80">
        <div className="home-stress-title">
          Your Stress Monster, the story you tell yourself to survive
        </div>
        <div className="home-stress-content-container">
          <div className="home-stress-content">
            A stressed environment reinforces a survivival response, but the
            specific narrative you cling to when stressed is your Stress Monster
            type. Whether your environment is actively a problem or your brain
            is in a chronically stressed state because of past trauma, you will
            find yourself falling into one (or more) of the behavior patterns
            below.
          </div>
          <div className="home-stress-btn assessment-btn">Assessment</div>
        </div>
      </div>

      <img className="home-video2" src={Video2} />

      <div className="home-card">
        <div className="home-card-header container-80">
          <div className="home-card-title">Stress Monster Types</div>
          <div className="home-icon-group">
            <div className="arrow-wrap">
              <FaArrowLeft />
            </div>
            <div className="arrow-wrap">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <Flicking moveType="freeScroll" bound={true}>
          {cardData.map((item) => (
            <div className="swipe-container">
              <Card cardData={item} />
            </div>
          ))}
        </Flicking>
      </div>

      <Flicking moveType="freeScroll" bound={true}>
        {frameData.map((item, index) => (
          <div className="swipe-container">
            <div className="home-frame-content">{item}</div>
            <img src={index % 2 ? Up : Down} />
          </div>
        ))}
      </Flicking>

      <div className="home-after-assessment container-80">
        <div className="home-left">
          <div className="home-left-title">
            After taking the Native Brilliance Assessment, You will receive:
          </div>
          <div className="home-left-content">
            Answer a quick questionnaire about yourself to glean initial insight
            into your Native Brilliance. Take our cognitive assessment for $39
            to receive your full-length{" "}
            <span className="bold">
              Native Brilliance + Cognitive Skills Report.
            </span>
          </div>
          <div className="assessment-btn home-after-btn">Assessment</div>
        </div>
        <div className="home-right">
          <div className="home-order">
            <div className="home-number">1</div>
            <div className="home-order-content">
              <div className="home-order-title">The Report</div>
              <div className="home-order-description">
                A detailed summary of your Native Brilliance and Stress Monster
                types, providing deep insight into the cognitive gifts you
                possess as a learner.
              </div>
            </div>
          </div>

          <div className="home-order">
            <div className="home-number">2</div>
            <div className="home-order-content">
              <div className="home-order-title">The Blueprint</div>
              <div className="home-order-description">
                Our proprietary 5 step coaching process to help you unlock your
                child or student's Native Brilliance.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-brain-container">
        <div className="home-brain-title">Neurodiverse? Or brain on fire?</div>

        <div className="home-brain-content1">
          Liberating your Native Brilliance from the demands of your Stress
          Monster starts with an investigation into a simple question: is my (or
          my child's) brain on fire?
        </div>

        <div className="home-brain-content2">
          The latest research has uncovered inflammation as a primary factor
          impacting learning differences and psychological conditions. Read more
          about the{" "}
          <span className="bold">Visual Contrast Sensitivity test</span> and how
          you can use it to keep your Stress Monster in check.
        </div>

        <div className="assessment-btn home-brain-btn">Learn More</div>
      </div>

      <div className="home-symptom-title">Symptoms of Neuroinflammation</div>

      <div className="home-card-groups">
        <div className="home-symptom-container container-80">
          <div className="home-symptom-card-container1">
            <img src={Chronic} />
            <div className="home-symptom-card-title">Chronic fatigue</div>
            <div className="home-symptom-card-content">
              Imagein owning a Ferrari with a leaky gas tank. You start off as
              the fastest on the road, but before long, you're out of gas. This
              "push/crash" phenomenon can be symptomatic of underlying chronic
              neuroinflammation. Beyond the mental exhaustion of getting caught
              in Stress Monster thought patterns, those suffering from chronic
              neuroinflammation may also be experiencing cellular
              hypometabolism, which can result from being exposed to toxins from
              food, air, and water that your immune system is ill-equipped to
              metabolize.
            </div>
          </div>

          <div className="home-symptom-card-container2">
            <img src={Reactive} />
            <div className="home-symptom-card-title">Chronic fatigue</div>
            <div className="home-symptom-card-content">
              Imagein owning a Ferrari with a leaky gas tank. You start off as
              the fastest on the road, but before long, you're out of gas. This
              "push/crash" phenomenon can be symptomatic of underlying chronic
              neuroinflammation. Beyond the mental exhaustion of getting caught
              in Stress Monster thought patterns, those suffering from chronic
              neuroinflammation may also be experiencing cellular
              hypometabolism, which can result from being exposed to toxins from
              food, air, and water that your immune system is ill-equipped to
              metabolize.
            </div>
          </div>
        </div>

        <div className="home-symptom-container container-80">
          <div className="home-symptom-card-container2">
            <img src={Sinus} />
            <div className="home-symptom-card-title">Chronic fatigue</div>
            <div className="home-symptom-card-content">
              Imagein owning a Ferrari with a leaky gas tank. You start off as
              the fastest on the road, but before long, you're out of gas. This
              "push/crash" phenomenon can be symptomatic of underlying chronic
              neuroinflammation. Beyond the mental exhaustion of getting caught
              in Stress Monster thought patterns, those suffering from chronic
              neuroinflammation may also be experiencing cellular
              hypometabolism, which can result from being exposed to toxins from
              food, air, and water that your immune system is ill-equipped to
              metabolize.
            </div>
          </div>

          <div className="home-symptom-card-container1">
            <img src={Circadian} />
            <div className="home-symptom-card-title">Chronic fatigue</div>
            <div className="home-symptom-card-content">
              Imagein owning a Ferrari with a leaky gas tank. You start off as
              the fastest on the road, but before long, you're out of gas. This
              "push/crash" phenomenon can be symptomatic of underlying chronic
              neuroinflammation. Beyond the mental exhaustion of getting caught
              in Stress Monster thought patterns, those suffering from chronic
              neuroinflammation may also be experiencing cellular
              hypometabolism, which can result from being exposed to toxins from
              food, air, and water that your immune system is ill-equipped to
              metabolize.
            </div>
          </div>
        </div>
      </div>

      <div className="home-liberate-container">
        <div className="home-liberate-title">
          Liberate Your Native Brilliance
        </div>

        <div className="home-liber-group">
          <div className="home-liber-item-container">
            <div className="home-liber-item">
              <div className="home-liber-num">1</div>
              <div className="home-liber-item-content-container">
                <div className="home-liber-item-title">
                  Rediscover your Native Brilliance
                </div>
                <div className="home-liber-item-content">
                  First take our Native Brilliance assessment to identify your
                  cognitive gifts
                </div>
              </div>
            </div>
            <img src={Rediscover} />
          </div>

          <div
            className="home-liber-item-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="home-liber-item">
              <div className="home-liber-num">2</div>
              <div className="home-liber-item-content-container">
                <div className="home-liber-item-title">
                  Rediscover your Native Brilliance
                </div>
                <div className="home-liber-item-content">
                  First take our Native Brilliance assessment to identify your
                  cognitive gifts
                </div>
              </div>
            </div>
            <img src={Rediscover} />
          </div>

          <div className="home-liber-item-container">
            <div className="home-liber-item">
              <div className="home-liber-num">3</div>
              <div className="home-liber-item-content-container">
                <div className="home-liber-item-title">
                  Rediscover your Native Brilliance
                </div>
                <div className="home-liber-item-content">
                  First take our Native Brilliance assessment to identify your
                  cognitive gifts
                </div>
              </div>
            </div>
            <img src={Rediscover} />
          </div>

          <div
            className="home-liber-item-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="home-liber-item">
              <div className="home-liber-num">4</div>
              <div className="home-liber-item-content-container">
                <div className="home-liber-item-title">
                  Rediscover your Native Brilliance
                </div>
                <div className="home-liber-item-content">
                  First take our Native Brilliance assessment to identify your
                  cognitive gifts
                </div>
              </div>
            </div>
            <img src={Rediscover} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
