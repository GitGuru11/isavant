import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { IoIosAddCircle, IoIosRemove } from "react-icons/io";
import { notification } from "antd";
import { createClient } from "contentful";
import Lock from "../../../resources/imgs/lock.png";
import Unlock from "../../../resources/imgs/unlock.png";
import Footer from "../footer";
import "./style.css";

var temp;
export default function Index() {
  const [api, contextHolder] = notification.useNotification();

  const [lock, setLock] = useState(true);
  const [flag, setFlag] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [cardIdx, setCardIdx] = useState(0);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(-1);
  const ids = [
    "5Ew17D2Cm9h9xJp29pEfJq",
    "3CqvsgiPDBahqgHg7gI6KI",
    "2GAxdc0XT5WlrSrNBvb2Il",
    "6LqmhdRcA2wkUdLhcfxNHh",
    "2dfax6LovoHMtOdXCn77ph",
    "36M4eJqBLDmtsMoXM4bVeI",
  ];

  const deliveryAPIKey = "plTZGADCcTmhI34oYFEG0IJ4M_Dp03C-zwO2xMac0v8";
  const spaceId = "mwnrlr44qowg";

  const client = createClient({
    space: spaceId,
    accessToken: deliveryAPIKey,
  });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setImageUrl(data.resImg1.fields.file.url);
      } else {
        setImageUrl(data.img1.fields.file.url);
      }
    };

    if (Object.keys(data).length) {
      window.addEventListener("resize", handleResize);
    }
  }, [data]);

  const open = (idx) => {
    setIsOpen(idx);
  };

  async function getData() {
    try {
      await client
        .getEntry(ids[getRandomIntInclusive(0, 5)])
        .then((entries) => {
          console.log(entries.fields);
          setData(entries.fields);
          setImageUrl(entries.fields.img1.fields.file.url);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const openNotification = (placement) => {
    api.info({
      message: <b>Test</b>,
      description: (
        <div className="notification-content">
          <b>Take the first step to unlocking your Native Brilliance.</b>
          <br />
          Take a quick 5-min vision assessment to test for resolvable chronic
          neuro-inflammation.
        </div>
      ),
      placement,
      style: {
        width: 550,
      },
    });
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const locker = () => {
    if (lock) {
      openNotification("top");
    }
    setLock(!lock);
  };

  return (
    <div className="report">
      {contextHolder}
      <div className="unlock-icon-wrap">
        <img
          className="unlock-icon"
          src={lock ? Lock : Unlock}
          onClick={() => locker()}
        ></img>
      </div>
      <Footer flag={flag} />
      {Object.keys(data).length && (
        <div className="report-container">
          <div className="report-btn-group">
            <button
              style={{ backgroundColor: flag ? "darkgray" : "#ff8080" }}
              className="brilliance-btn"
              onClick={() => (window.location.href = "/monster")}
            >
              Stress Monster
            </button>
            <button
              style={{ backgroundColor: flag ? "#ff8080" : "darkgray" }}
              className="monster-btn"
              onClick={() => (window.location.href = "/brilliance")}
            >
              Native Brilliance
            </button>
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
            <img className="stand-img" src={data.img2.fields.file.url}></img>
            <div className="unique-content">
              <div className="">{data.content2}</div>
              <div className="unique-subcontent">{data.content21}</div>
            </div>
          </div>

          {data.content22 && (
            <div>
              {data.content22.map((item) => (
                <div className="unique-content artist-content flow-content">
                  {item.fields.content}
                </div>
              ))}
            </div>
          )}

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

            {data.title51 && data.content51 && (
              <div>
                <div className="artist-title">{data.title51}</div>

                {data.content51.map((item) => (
                  <div className="unique-content artist-content">
                    {item.fields.content}
                  </div>
                ))}
              </div>
            )}

            {data.title52 && data.content52 && (
              <div>
                <div className="artist-title">{data.title52}</div>

                {data.content52.map((item) => (
                  <div className="unique-content artist-content">
                    {item.fields.content}
                  </div>
                ))}
              </div>
            )}
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
            {data.content71 && (
              <div className="unique-content artist-content">
                {data.content71}
              </div>
            )}
          </div>

          <div>
            {data.title8 && (
              <div className="escape-heading">
                <span className="escape-heading-black">{data.title8[0]}</span>

                <span className="escape-heading-pink"> {data.title8[1]} </span>

                <span className="escape-heading-black">{data.title8[2]}</span>
              </div>
            )}

            {data.content8 && (
              <div className="unique-container">
                <div className="unique-content social-content">
                  <div>{data.content8}</div>
                  {data.content81 && (
                    <div className="unique-subcontent">{data.content81}</div>
                  )}
                </div>
                <img
                  className="stand-img social-img"
                  src={data.img8.fields.file.url}
                ></img>
              </div>
            )}

            <div>
              {data.content82 &&
                data.content82.map((item) => (
                  <div className="unique-content artist-content">
                    {item.fields.content}
                  </div>
                ))}
            </div>
          </div>

          <div className="mash-container">
            <div className="escape-heading color-pink">{data.title9}</div>
            <div className="unique-content artist-content">{data.content9}</div>
          </div>

          <div className="list-container">
            {data.cardTitles.map((item, idx) => (
              <div
                style={{
                  backgroundColor: `${cardIdx === idx ? "#F277C6" : ""}`,
                }}
                className="list-item bg-white"
                onClick={() => {
                  setCardIdx(idx);
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div>
            <div className="artist-title color-pink">
              {data.cardTitles[cardIdx]}
            </div>
            {data.dropCards[cardIdx].fields.test.contents.map((item, index) => (
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
                    {item.title}
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
                    item.content.map((txt) => (
                      <div>
                        <span className="bold">{txt.split(":")[0]}:</span>
                        {txt.split(":")[1]}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="escape-title film-title">
              {data.cardTitles[cardIdx].split("[")[0]}from Film/TV
            </div>

            <div className="list-container">
              <div className="list-item bg-black">
                <span className="bold color-pink">
                  {data.cards[cardIdx].fields.cardContent[0]}
                </span>{" "}
                {data.cards[cardIdx].fields.cardContent[1]}
              </div>

              <div className="list-item bg-black">
                <span className="bold color-pink">
                  {data.cards[cardIdx].fields.cardContent2[0]}
                </span>{" "}
                {data.cards[cardIdx].fields.cardContent2[1]}
              </div>

              <div className="list-item bg-black">
                <span className="bold color-pink">
                  {data.cards[cardIdx].fields.cardContent3[0]}
                </span>{" "}
                {data.cards[cardIdx].fields.cardContent3[1]}
              </div>

              <div className="list-item bg-black">
                <span className="bold color-pink">
                  {data.cards[cardIdx].fields.cardContent4[0]}
                </span>{" "}
                {data.cards[cardIdx].fields.cardContent4[1]}
              </div>

              <div className="list-item bg-black">
                <span className="bold color-pink">
                  {data.cards[cardIdx].fields.cardContent5[0]}
                </span>{" "}
                {data.cards[cardIdx].fields.cardContent5[1]}
              </div>

              <div className="list-item bg-black">
                <span className="bold color-pink">
                  {data.cards[cardIdx].fields.cardContent6[0]}
                </span>{" "}
                {data.cards[cardIdx].fields.cardContent6[1]}
              </div>
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
      <ScrollToTop smooth />
    </div>
  );
}
