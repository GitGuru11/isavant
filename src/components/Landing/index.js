import React, { useState, useEffect } from "react";
import Header from "../Header";
import Card from "../Card";
import Order from "../Order";
import "./style.css";
import Character from "../../resources/imgs/character.svg";
import Down from "../../resources/imgs/down.svg";
import Flat from "../../resources/imgs/flat.svg";
import Flower from "../../resources/imgs/flower.svg";
import H2O from "../../resources/imgs/H2O.svg";
import Woman from "../../resources/imgs/woman.svg";
import Swipe from "../../components/Swipe";
import Shake from "../../resources/imgs/shake.svg";
import Brain from "../../resources/imgs/brain.svg";
import Cloud from "../../resources/imgs/cloud.svg";
import StudentWoman from "../../resources/imgs/student-woman.svg";
import StudentMan from "../../resources/imgs/student-man.svg";
import Recorder from "../../resources/imgs/recorder.svg";
import Sofa from "../../resources/imgs/sofa.svg";
import StudentMan2 from "../../resources/imgs/student-man2.svg";
import Sofa2 from "../../resources/imgs/sofa2.svg";
import Fruits from "../../resources/imgs/Fruits.svg";
import Vegetables from "../../resources/imgs/vegetables.svg";
import Grain from "../../resources/imgs/grain.svg";
import Pipe from "../../resources/imgs/pipe.svg";
import Item from "../../components/Good";
//import cards images
import Bread from "../../resources/imgs/bread.svg";
import Herbicide from "../../resources/imgs/herbicide.svg";
import Metal from "../../resources/imgs/metal.svg";
import Pesticide from "../../resources/imgs/pesticide.svg";
import Plastic from "../../resources/imgs/plastic.svg";

//import Items
import Digestive from "../../resources/imgs/digestive.svg";
import Nervous from "../../resources/imgs/nervous.svg";
import Endocrine from "../../resources/imgs/endocrine.svg";
import Respiratory from "../../resources/imgs/respiratory.svg";
import Circulatory from "../../resources/imgs/circulatory.svg";
import Lymphatic from "../../resources/imgs/lymphatic.svg";
import Reproductive from "../../resources/imgs/Reproductive.svg";
import Urinary from "../../resources/imgs/urinary.svg";

export default function Index() {
  const [back, setBack] = useState("#f3f3f3");
  const [cards, setCards] = useState([
    { imgUrl: Bread, content: "Processed food/sugar" },
    { imgUrl: Herbicide, content: "Herbicides" },
    { imgUrl: Metal, content: "Heavy metals in food" },
    { imgUrl: Pesticide, content: "Pesticides" },
    { imgUrl: Plastic, content: "Pesticides" },
  ]);
  const [cards2, setCards2] = useState([
    { imgUrl: Fruits, content: "Fruits" },
    { imgUrl: Vegetables, content: "Vegetables" },
    { imgUrl: Grain, content: "Nom-glutinous grains" },
  ]);
  const [items, setItems] = useState([
    { imgUrl: Digestive, content: "Digestive system" },
    { imgUrl: Nervous, content: "Nervous system" },
    { imgUrl: Endocrine, content: "Endocrine system" },
    { imgUrl: Respiratory, content: "Respiratory system" },
    { imgUrl: Circulatory, content: "Circulatory system" },
    { imgUrl: Lymphatic, content: "Lymphatic system" },
    { imgUrl: Reproductive, content: "Reproductive system" },
    { imgUrl: Urinary, content: "Urinary system" },
  ]);
  const [data, setData] = useState([
    {
      title: "Toxic guts and sinuses",
      iconUrl: H2O,
      content:
        "Anti-inflammatory hormones like MSH and VIP protect the mucosal membranes of the body.",
      imgUrl: StudentWoman,
    },
    {
      title: "Toxic psychology & physiology",
      iconUrl: H2O,
      content:
        "Chronic toxin exposure puts the brain and immune system in chronically inflamed states.",
      imgUrl: StudentMan,
    },
    {
      title: "Toxic relationships",
      iconUrl: Shake,
      content:
        "Societal norms make masking cognitive and emotional distress necessary for an individual's stability and survival",
      imgUrl: Recorder,
    },
    {
      title: "Toxic “learning”",
      iconUrl: Brain,
      content:
        "Chronic neuroinflammation's impact on multi-perspective thinking, self-awareness, and short-term and working memory.",
      imgUrl: Sofa,
    },
  ]);

  const [orders, setOrders] = useState([
    "Freedom from chronic anxiety, depression, and ADHD",
    "Transformative improvements in symptoms of dyslexia, OCD, and autism.",
    "Freedom from leptin-resistance, obesity, and resulting excess cytokine production resulting from excess fat stores in the body.",
  ]);

  const [orders2, setOrders2] = useState([
    "Higher MSH levels correspond with faster recovery from stress.",
    "Free from chronic low-grade neuro-inflammation, your tolerance and ability to be present to life dramatically improve.",
    "The frequency of negative thought induced by microbial colonists is brought to manageable levels, helping individuals extricate themselves from negative thought patterns and narratives about themselves and the world that stunt personal development and emotional growth.",
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY) {
      setBack("#FFFFFF");
    } else {
      setBack("#f3f3f3");
    }
  };

  return (
    <div className="landing-container">
      <Header back={back} />
      <div className="container">
        <div className="facebook-container">
          <div className="facebook-left-container">
            <div className="facebook-left-title">Feedback Loop</div>
            <div className="facebook-left-description">
              Toxic Enviroment + Stress Monster Natural Enviroment + Native
              Brilliance
            </div>
            <button
              onClick={() => (window.location.href = "/test")}
              className="facebook-left-button"
            >
              Get started
            </button>
          </div>
          <img src={Character}></img>
        </div>

        <div className="down-img">
          <img src={Down}></img>
        </div>

        <div className="toxic-txt">
          <span>Toxic Enviroment + Stress Monster</span>
        </div>
        <Card
          title="The Toxic Air"
          content="An estimated 80% of buildings in the US are colonized by harmful
          toxin-producing microbes."
          iconUrl={Flat}
          imgUrl={Flower}
        />

        <Card
          title="Darkness"
          content="The most abundant molecule in the human body is H20."
          iconUrl={H2O}
          imgUrl={Woman}
        />
        <div className="item-wrap">
          <p className="toxic-food">Toxic Food/Water</p>
          <Swipe cards={cards} />
        </div>

        {data.map((item) => (
          <Card
            title={item.title}
            content={item.content}
            iconUrl={item.iconUrl}
            imgUrl={item.imgUrl}
          />
        ))}

        <div className="natural-title">
          Natural Enviroment + Native Brilliance
        </div>

        <Card
          title="Clean Air"
          content="Clean air is ionized by natural sources of energy outdoors: cosmic rays, earth’s natural radioactivity and water colliding with earth/water."
          iconUrl={Cloud}
          imgUrl={StudentMan2}
        />

        <Card
          title="Light"
          content="The most abundant molecule in the human body is H20."
          iconUrl={H2O}
          imgUrl={Sofa2}
        />

        <Card
          title="Toxic Food/Water"
          content="Anti-inflammatory foods provide antioxidants and fiber while inhibiting inflammation in the body and enhancing one's digestive microbiome."
          iconUrl={H2O}
        />

        <div className="cards-container">
          <Swipe cards={cards2} />
        </div>

        <Card
          title="Healthy Guts and Sinuses"
          content="Outside of persistent toxin exposure, anti-inflammatory hormones like MSH and VIP return to healthy levels "
          iconUrl={Pipe}
          imgUrl={Woman}
        />

        <div className="psychology-title">Balanced physiology & psychology</div>
        <div className="font-600 psychology-content">
          When your immune system returns to a balanced, stable condition, every
          system is impacted for the better
        </div>

        <div className="goods-container">
          {items.map((item) => (
            <Item imgUrl={item.imgUrl} content={item.content} />
          ))}
        </div>

        <div className="font-600 brain-content">
          When the needs of each system are met, the brain is freed from a
          chronically activated state, which looks like…
        </div>

        {orders.map((item, index) => (
          <Order idx={index} content={item} />
        ))}

        <div className="font-600 psychology-content">
          <div>
            The impact on the nervous system is especially important to
            transformations in human psychology.
          </div>
        </div>

        {orders2.map((item, index) => (
          <Order idx={index} content={item} />
        ))}
      </div>
    </div>
  );
}
