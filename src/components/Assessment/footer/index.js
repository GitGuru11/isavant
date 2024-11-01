import React from "react";
import Logo from "../../../resources/imgs/home/logo.png";
import Instagram from "../../../resources/imgs/home/instagram.svg";
import Twitter from "../../../resources/imgs/home/twitter.svg";
import Facebook from "../../../resources/imgs/home/facebook.svg";
import "./style.css";

export default function Footer() {
  return (
    <div className="home-footer-container assessment1-footer-container">
      {/* <div className="home-footer-top">
        <div className="home-footer-head">Native Brilliance Assessment</div>
        <div className="home-footer-title">Ready to go Native?</div>
        <div className="home-footer-assessment-btn">
          Take the Native Brilliance Assessment
        </div>
      </div> */}

      <div className="home-footer-bottom">
        <div className="home-footer-native-container assessment1-footer">
          <div className="home-footer-wrap assessment1-footer-wrap">
            <img src={Logo}></img>
          </div>

          <div className="home-footer-copy assessment1-footer-copy">
            @ 2024 All Rights Reserved
          </div>
        </div>

        <div className="home-footer-right">
          <div className="home-footer-about-container">
            <div className="home-footer-about assessment1-footer-about">
              <div className="home-about assessment1-about">Home</div>
            </div>

            <div className="home-footer-contact">
              <div className="home-contact assessment1-contact">Learn More</div>
            </div>
          </div>

          <div className="home-social-container assessment1-social-container">
            <img src={Instagram}></img>
            <img src={Twitter}></img>
            <img src={Facebook}></img>
            <img src={Instagram}></img>
          </div>

          <div className="home-footer-copyright assessment1-footer-copyright">
            Copyright @ 2024 I Savant.All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
