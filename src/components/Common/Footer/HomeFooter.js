import React from "react";
import "./style.css";
import Logo from "../../../resources/imgs/home/logo.png";
import Instagram from "../../../resources/imgs/home/instagram.svg";
import Twitter from "../../../resources/imgs/home/twitter.svg";
import Facebook from "../../../resources/imgs/home/facebook.svg";

export default function Footer() {
  return (
    <div className="home-footer-container container">
      {/* <div className="home-footer-top">
        <div className="home-footer-head">Native Brilliance Assessment</div>
        <div className="home-footer-title">Ready to go Native?</div>
        <div className="home-footer-assessment-btn">
          Take the Native Brilliance Assessment
        </div>
      </div> */}

      <div className="home-footer-bottom">
        <div className="home-footer-native-container">
          <div className="home-footer-wrap">
            <img src={Logo}></img>
            <div className="home-footer-logo">
              <div>We are</div>
              <div className="bold">Native Brilliance</div>
            </div>
          </div>

          <div className="home-footer-copy">@ 2024 All Rights Reserved</div>
        </div>

        <div className="home-footer-right">
          <div className="home-footer-about-container">
            <div className="home-footer-about">
              <div className="home-about">About</div>
              <div>Lorem lpsum Dolor</div>
              <div>Lorem lpsum Dolor</div>
              <div>Lorem lpsum Dolor</div>
            </div>

            <div className="home-footer-contact">
              <div className="home-contact">Contact</div>
              <div>Lorem lpsum Dolor</div>
              <div>Lorem lpsum Dolor</div>
            </div>
          </div>

          <div className="home-social-container">
            <img src={Instagram}></img>
            <img src={Twitter}></img>
            <img src={Facebook}></img>
            <img src={Instagram}></img>
          </div>

          <div className="home-footer-copyright">
            Copyright @ 2024 I Savant.All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
