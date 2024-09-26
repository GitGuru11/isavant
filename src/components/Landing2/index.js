import React, { useState } from "react";
import { Button, Modal } from "antd";
import logo from "../../resources/imgs/home/logo.png";
import Close from "../../resources/imgs/modal/close.svg";
import Toxic from "../../resources/imgs/modal/toxic.svg";
import Up1 from "../../resources/imgs/modal/up.svg";
import Down1 from "../../resources/imgs/modal/down.svg";
import Woman from "../../resources/imgs/landing/woman.png";
import Girl from "../../resources/imgs/landing/girl.png";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";

import Up from "../../resources/imgs/home/up.svg";
import Down from "../../resources/imgs/home/down.svg";

import Footer from "../Common/Footer/HomeFooter";
import "./style.css";

export default function Index() {
  const [frameData, setFrameData] = useState([
    "ADHD",
    "AUTISM",
    "ANXIETY",
    "DEPRESSION",
    "NEURODIVERSE",
  ]);
  const [open, setOpen] = useState(false);
  const [toxic, setToxic] = useState([
    {
      title: "How Much Time Do Americans Spend Indoors and Why Does It Matter?",
      status: false,
      content:
        "Americans spend 90% of their time indoors. Unlike outdooor air, which nature cleans through ionization, indoor air is inherently stale and requires appropriate filter",
    },
    {
      title: "What Causes Poor Indoor Air Quality?",
      status: false,
      content:
        "Poor ventilation and filtration in homes, workplaces, and schools cause chemical VOCs from wall cavities and pollutants from outside (including wildfire smoke)to accumulate indoors",
    },
    {
      title: "How Have Microbial Colonies Proliferated Indoors?",
      status: false,
      content: "What are the Health Consequences of Toxic Indoor Air",
    },
    {
      title: "How Much Time Do Americans Spend Indoors and Why Does It Matter?",
      status: false,
      content:
        "Americans spend 90% of their time indoors. Unlike outdooor air, which nature cleans through ionization, indoor air is inherently stale and requires appropriate filter",
    },
    {
      title: "How Much Time Do Americans Spend Indoors and Why Does It Matter?",
      status: false,
      content:
        "Americans spend 90% of their time indoors. Unlike outdooor air, which nature cleans through ionization, indoor air is inherently stale and requires appropriate filter",
    },
  ]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const Drop = (index) => {
    var temp = [...toxic];
    temp[index].status = !temp[index].status;
    setToxic(temp);
  };

  return (
    <div className="lan-container">
      <div className="homepage-header container-80">
        <img src={logo} />
        <div className="assessment-btn">Assessment</div>
      </div>
      <div className="lan-feedback-wrap container-80">
        <div className="lan-feedback-container">
          <div className="lan-feedback-title">Feedback Loop</div>
          <div className="lan-feedback-content">
            Toxic environment + Stress Monster Natural Environment + Native
            Brilliance
          </div>
          <div className="lan-feedback-btn">Assessment</div>
        </div>
        <img src={Girl}></img>
      </div>

      <div class="lan-feedback">
        <div class="box box1">
          <h3>Infrared Light</h3>
          <p>How Does Chronic Neuroinflammation Affect Learning...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box2">
          <h3>Native Brilliance</h3>
          <p>
            How Much Time Do Americans Spend Indoors and Why Does It Matter...?
          </p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box3">
          <h3>Balanced Physiology & Psychology</h3>
          <p>What is the Most Abundant Molecule...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box4">
          <h3>Organic Food and Clean Water</h3>
          <p>What are Anti-Inflammatory Hormones and How...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box5">
          <h3>Integrated Relationships</h3>
          <p>How Does the Standard American Diet (SAD) Affect Health...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box6">
          <h3>Lorem Ipsum Dolor Sit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Auctor quam duis ultrices?
          </p>
          <a onClick={() => showModal()}>View more</a>
        </div>
      </div>

      <div className="lan-integrate container-80">
        <img src={Woman}></img>
        <div className="lan-feedback-container">
          <div className="lan-integrate-title">Integrated Learning</div>
          <div className="lan-feedback-content lan-integrate-content">
            Lorem ipsum dolor sit amet consectetur. Faucibus enim tincidunt et
            elit vulputate ac fuse vestibulum arcu.
          </div>
          <div className="lan-feedback-btn">View more</div>
        </div>
      </div>

      <div className="lan-frame">
        <Flicking moveType="freeScroll" bound={true}>
          {frameData.map((item, index) => (
            <div className="swipe-container">
              <div className="home-frame-content">{item}</div>
              <img src={index % 2 ? Up : Down} />
            </div>
          ))}
        </Flicking>
      </div>

      <div class="lan-feedback">
        <div class="box box1">
          <h3>Infrared Light</h3>
          <p>How Does Chronic Neuroinflammation Affect Learning...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box2">
          <h3>Native Brilliance</h3>
          <p>
            How Much Time Do Americans Spend Indoors and Why Does It Matter...?
          </p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box3">
          <h3>Balanced Physiology & Psychology</h3>
          <p>What is the Most Abundant Molecule...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box4">
          <h3>Organic Food and Clean Water</h3>
          <p>What are Anti-Inflammatory Hormones and How...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box5">
          <h3>Integrated Relationships</h3>
          <p>How Does the Standard American Diet (SAD) Affect Health...?</p>
          <a onClick={() => showModal()}>View more</a>
        </div>
        <div class="box box6">
          <h3>Lorem Ipsum Dolor Sit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Auctor quam duis ultrices?
          </p>
          <a onClick={() => showModal()}>View more</a>
        </div>
      </div>

      <div className="lan-integrate lan-integrate-2 container-80">
        <img src={Woman}></img>
        <div className="lan-feedback-container">
          <div className="lan-integrate-title toxic-title">Toxic Learning</div>
          <div className="lan-feedback-content lan-integrate-content">
            Lorem ipsum dolor sit amet consectetur. Faucibus enim tincidunt et
            elit vulputate ac fuse vestibulum arcu.
          </div>
          <div className="lan-feedback-btn" onClick={() => showModal()}>
            View more
          </div>
        </div>
      </div>

      <Footer />

      <Modal
        open={open}
        onOk={() => showModal()}
        onCancel={() => hideModal()}
        closeIcon={<img src={Close}></img>}
        footer={null}
      >
        <div className="lan-modal-container">
          <img className="toxic-img" src={Toxic}></img>
          {toxic.map((item, index) => (
            <div className="lan-modal-content-container">
              <div
                onClick={() => Drop(index)}
                className="lan-modal-content-wrap"
              >
                <div className="lan-modal-content-title">{item.title}</div>
                <img src={item.status ? Up1 : Down1}></img>
              </div>
              <div
                className={`lan-modal-content ${item.status ? "" : "hidden"}`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
