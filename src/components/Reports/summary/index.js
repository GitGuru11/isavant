import React, { useState, useEffect } from "react";
import { IoIosAddCircle, IoIosRemove } from "react-icons/io";
import { createClient } from "contentful";
import MonsterMan from "../../../resources/imgs/reports/monster_man.svg";
import ResMonsterMan from "../../../resources/imgs/reports/responsive/monster_man.svg";
import Chair from "../../../resources/imgs/reports/chair.svg";
import ResChair from "../../../resources/imgs/reports/responsive/chair.svg";
import Footer from "../footer";
import "./style.css";

export default function Index() {
  const [imageUrl, setImageUrl] = useState(MonsterMan);
  const [chairImgUrl, setChairImgUrl] = useState(Chair);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(-1);
  const deliveryAPIKey = "plTZGADCcTmhI34oYFEG0IJ4M_Dp03C-zwO2xMac0v8";
  const spaceId = "mwnrlr44qowg";

  const client = createClient({
    space: spaceId,
    accessToken: deliveryAPIKey,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setImageUrl(ResMonsterMan);
        setChairImgUrl(ResChair);
      } else {
        setImageUrl(MonsterMan);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const open = (idx) => {
    setIsOpen(idx);
  };

  async function getData() {
    try {
      const entries = await client.getEntries({
        content_type: "summary",
      });

      console.log(entries.items[0].fields);
      setData(entries.items[0].fields);
      setImageUrl(entries.items[0].fields.img1.fields.file.url);
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  return (
    <div className="report">
      <Footer flag={0} />
      {Object.keys(data).length && (
        <div className="report-container">
          <div className="report-btn-group">
            <button className="monster-btn">Stress Monster</button>
            <button className="brilliance-btn">Native Brilliance</button>
          </div>

          <div className="escape-container">
            <img className="stand-img" src={imageUrl}></img>
            <div className="escape-txt-container">
              <div className="escape-title">{data.title1}</div>
              <div className="escape-content">{data.content1}</div>
            </div>
          </div>

          <div className="down-arrow-container">
            <img className="down-arrow" src={data.down.fields.file.url}></img>
          </div>

          <div className="escape-heading">
            <span className="escape-heading-black">{data.title2[0]}</span>
            <span className="escape-heading-pink"> {data.title2[1]}</span>
          </div>

          <div className="unique-container">
            <img className="stand-img" src={chairImgUrl}></img>
            <div className="unique-content">{data.content2}</div>
          </div>

          <div>
            <div className="artist-title">{data.title3}</div>

            <div className="unique-content artist-content">{data.content3}</div>
          </div>

          <div className="cycle-container">
            <img src={data.img4.fields.file.url}></img>
            <div className="escape-heading">
              <span className="escape-heading-black">{data.title4[0]}</span>
              <span className="escape-heading-pink"> {data.title4[1]}</span>
            </div>

            <div className="unique-content artist-content cycle-content">
              {data.content4}
            </div>
            <div className="escape-title">{data.title5}</div>
            <div className="unique-content artist-content flow-content">
              {data.content5}
            </div>
          </div>

          <div className="pattern-container">
            <div className="escape-heading">
              <span className="escape-heading-pink">{data.title6[1]}</span>
              <span className="escape-heading-black"> {data.title6[0]}</span>
            </div>

            <div className="panel-container">
              {data.content6.map((item, index) => (
                <div className="panel">
                  <div className="panel-circle">{index + 1}</div>
                  <div className="panel-content">{item.fields.content}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="escape-title">{data.title7}</div>
            <div className="unique-content artist-content">{data.content7}</div>
          </div>

          <div>
            <div className="escape-heading">
              <span className="escape-heading-black">{data.title8[0]}</span>

              <span className="escape-heading-pink"> {data.title8[1]} </span>

              <span className="escape-heading-black">{data.title8[2]}</span>
            </div>

            <div className="unique-container">
              <div className="unique-content social-content">
                {data.content8}
              </div>
              <img
                className="stand-img social-img"
                src={data.img8.fields.file.url}
              ></img>
            </div>
          </div>

          <div className="mash-container">
            <div className="escape-heading color-pink">{data.title9}</div>
            <div className="unique-content artist-content">{data.content9}</div>
          </div>

          <div className="list-container">
            {data.cardTitles.map((item) => (
              <div className="list-item bg-white">{item}</div>
            ))}
          </div>

          <div>
            <div className="artist-title color-pink">{data.title10}</div>
            {data.dropCards.map((item, index) => (
              <div
                className={`collapse-container ${
                  isOpen === index ? "bg-black" : "bg-white"
                }`}
              >
                <div className="collapse-header">
                  <div
                    className={`collapse-title ${
                      isOpen === index ? "color-pink" : ""
                    }`}
                  >
                    {item.fields.title}
                  </div>
                  {isOpen === index ? (
                    <IoIosRemove
                      onClick={() => setIsOpen(-1)}
                      className="custom-icon"
                    />
                  ) : (
                    <IoIosAddCircle
                      onClick={() => open(index)}
                      className="custom-icon"
                    />
                  )}
                </div>

                <div
                  className={`collapse-content ${
                    isOpen === index ? "color-white" : ""
                  }`}
                  style={{
                    transition: "all 1s",
                  }}
                >
                  {isOpen === index &&
                    item.fields.content.map((txt) => (
                      <div>
                        <span className="bold">{txt.split(":")[0]}:</span> They
                        may struggle with performance anxiety, fearing negative
                        judgment on their abilities, leading to
                        underparticipation or avoidance of challenging tasks.
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="escape-title film-title">{data.title11}</div>

            <div className="list-container">
              {data.cards.map((item) => (
                <div className="list-item bg-black">
                  <span className="bold color-pink">
                    {item.fields.title[0]}
                  </span>{" "}
                  {item.fields.title[1]}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="escape-title mask-title">{data.title12}</div>

            <div className="escape-container">
              <img className="stand-img" src={data.img12.fields.file.url}></img>
              <div className="escape-txt-container">
                {data.contentsRight.map((item) => (
                  <div className="escape-content forest-content">
                    {item.fields.content}
                  </div>
                ))}
              </div>
            </div>

            {data.contentsDown.map((item) => (
              <div className="unique-content artist-content">
                {item.fields.content}
              </div>
            ))}

            <img
              className="recorder-img"
              src={data.img13.fields.file.url}
            ></img>

            {data.contents.map((item) => (
              <div className="unique-content artist-content">
                {item.fields.content}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
