import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { createClient } from "contentful";
import Unlock from "../../../resources/imgs/unlock.png";
import Footer from "../footer";
import "./style.css";

export default function Index() {
  const [imageUrl, setImageUrl] = useState();
  const [sunlight, setSunlight] = useState();
  const [data, setData] = useState({});
  const [idx, setIdx] = useState(0);
  const ids = [
    "7pJka07pLqH23NjF5hP9JB",
    "1AWpeZHm6RxKGpPwAwe37X",
    "5paTeUKpb9S3R1IzaN7hWc",
    "3hADLN0UxwfLftxddaRbbQ",
    "6fnDigajtRKq5pBKn1gTST",
    "5zbSdpJXmpqFroAQxGxy2d",
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
        //setSunlight(data.resSumImg.fields.file.url);
      } else {
        setImageUrl(data.img1.fields.file.url);
        //setSunlight(data.sunImg.fields.file.url);
      }
    };

    if (Object.keys(data).length) {
      window.addEventListener("resize", handleResize);
    }
  }, [data]);

  async function getData() {
    // try {
    //   const entries = await client.getEntries({
    //     content_type: "brilliance",
    //   });

    //   console.log(entries.items[0].fields);
    //   setData(entries.items[0].fields);
    //   setImageUrl(entries.items[0].fields.img1.fields.file.url);
    //   setSunlight(entries.items[0].fields.parts[0].fields.img.fields.file.url);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    //   return [];
    // }

    try {
      await client
        .getEntry(ids[getRandomIntInclusive(0, 5)])
        .then((entries) => {
          console.log(entries.fields);
          setData(entries.fields);
          setImageUrl(entries.fields.img1.fields.file.url);
          setSunlight(data.sunImg.fields.file.url);
          setIdx(0, 5);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="brilliance">
      <div className="unlock-icon-wrap">
        <img className="unlock-icon" src={Unlock}></img>
      </div>
      <Footer flag={1} />
      {Object.keys(data).length && (
        <div className="report-container">
          <div className="report-btn-group">
            <button className="brilliance-btn">Stress Monster</button>
            <button className="monster-btn">Native Brilliance</button>
          </div>

          <div className="escape-container">
            <img className="stand-img" src={imageUrl}></img>
            <div className="escape-txt-container">
              <div className="escape-title">{data.title1}</div>
              <div className="escape-content">{data.content1}</div>
            </div>
          </div>

          <div className="down-arrow-container brilliance-down">
            <img className="down-arrow" src={data.down.fields.file.url}></img>
          </div>

          <div className="brilliance-card-container">
            <div className="brilliance-card font-30 bg-white">
              {data.titles[0]}
            </div>
            <div className="brilliance-card fit-content font-30 bg-pink">
              {data.titles[1]}
            </div>
            <div className="brilliance-card fit-content font-30 bg-black">
              {data.titles[2]}
            </div>
          </div>

          {data.title21 && <div className="small-title">{data.title21}</div>}

          <div>
            <div className="escape-heading">
              {data.title2.map((item, index) =>
                index % 2 ? (
                  <span className="escape-heading-pink"> {item} </span>
                ) : (
                  <span className="escape-heading-black">{item}</span>
                )
              )}
            </div>

            <div className="capacity-content">
              {data.contentsTop.map((item) => (
                <div className="unique-content artist-content">
                  {item.fields.content}
                </div>
              ))}
            </div>
          </div>

          <div className="unique-container">
            <div className="unique-content social-content">
              {data.contentsLeft.map((item) => (
                <div className="escape-content forest-content">
                  {item.fields.content}
                </div>
              ))}
            </div>
            <img
              className="stand-img social-img"
              src={data.img2.fields.file.url}
            ></img>
          </div>

          {data.contentsBottom &&
            data.contentsBottom.map((item) => (
              <div className="unique-content artist-content">
                {item.fields.content}
              </div>
            ))}

          <div>
            <div className="escape-heading mt-100">
              <span className="escape-heading-black">{data.title3}</span>
            </div>

            {data.content3.map((item) => (
              <div className="unique-content artist-content">
                {item.fields.content}
              </div>
            ))}

            <div className="panel-container type-panel-container">
              {data.cards.map((item, index) => (
                <div className="panel type-panel">
                  <div className="panel-circle">{index + 1}</div>
                  <div className="panel-content">
                    <div className="type-panel-title color-pink text-center">
                      {item.fields.title[0]}
                    </div>
                    <div className="type-panel-subtitle color-pink text-center">
                      {item.fields.title[1]}
                    </div>
                    {item.fields.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="curve-container">
            <div className="escape-heading">
              <span className="escape-heading-black">{data.title4}</span>
            </div>

            {data.contentsCurve.map((item) => (
              <div className="unique-content artist-content">
                {item.fields.content}
              </div>
            ))}
          </div>

          <div className="famouse-container">
            <div className="escape-heading famouse-title">
              <span className="escape-heading-black">{data.title5}</span>
              <img src={data.sunIcon.fields.file.url}></img>
            </div>

            <div className="list-container brilliance-list">
              {data.items.map((item) => (
                <div className="list-item bg-white">{item}</div>
              ))}
            </div>
          </div>

          {
            <div className="brilliance-item-container">
              <div
                className={`escape-heading ${
                  0 ? "" : "title-hidden"
                } integrate-title`}
              >
                <img src={data.sunIcon.fields.file.url}></img>
                <span className="color-pink">{data.parts[0].fields.title}</span>
              </div>

              <div className="escape-heading native-title">
                Your Integrated{" "}
                <span className="color-pink">Native Brilliance</span>
              </div>

              <div className="unique-container brilliance-item-wrap">
                <div className="unique-content social-content">
                  <div className="font-45 brilliance-item-title text-center">
                    <span className="color-pink">
                      {data.parts[0].fields.title}
                    </span>
                  </div>
                  <div className="escape-content forest-content strategic-title font-35">
                    {data.parts[0].fields.subTitle1}
                  </div>
                  <div className="escape-content forest-content">
                    {data.parts[0].fields.leftContent}
                  </div>
                </div>
                <img
                  className="stand-img social-img"
                  src={data.sunImg.fields.file.url}
                ></img>
              </div>

              <div className="unique-content artist-content">
                {data.parts[0].fields.downContent1}
              </div>

              <div className="unique-content artist-content">
                {data.parts[0].fields.downContent2}
              </div>

              <div className="panel-container career-card-container">
                <div className="career-panel-title font-35">
                  {data.parts[0].fields.subTitle2}
                </div>
                {data.parts[0].fields.brillianceCards.cards.map(
                  (item, index) => (
                    <div className="panel type-panel career-panel">
                      <div className="panel-circle career-circle">
                        {index + 1}
                      </div>
                      <div className="panel-content career-content">
                        <div className="type-panel-title color-pink">
                          {item.title}
                        </div>
                        {item.content}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="unique-content artist-content">
                {data.parts[0].fields.downContent}
              </div>
            </div>
          }
        </div>
      )}
      <ScrollToTop smooth />
    </div>
  );
}
