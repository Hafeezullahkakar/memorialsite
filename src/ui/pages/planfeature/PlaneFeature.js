import React from "react";
import "./PlaneFeature.css";
import arrow from "../../../assets/icons/arraw.svg";
import tick from "../../../assets/icons/tick.svg";

function PlaneFeature() {
  return (
    <div className="pf-page">
      <div className="pf-top">
        <h2>PLANS AND FEATURES</h2>
      </div>
      <div className="pf-pricing">
        <div className="pricing-text">
          <p>One Price, Endless Memories</p>
          <p>For Your</p>
          <p className="pfont">loved ones</p>
          <img src={arrow} />
        </div>

        <div className="pricing-card">
          <p className="life">Lifetime</p>
          <h2>$49.99</h2>
          <p className="flexible">Most flexible</p>

          <p className="divider"></p>

          <p className="line">
            <img src={tick} /> <spand>Never Expire</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Unlimited Photos</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Video and Music Gallery</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Social Media Integration</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Custom Background Music</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Advanced Privacy Controls</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Additional Administrators</spand>
          </p>
          <p className="line">
            <img src={tick} /> <spand>Custom Notifications</spand>
          </p>

          <button className="get-started">Get Started</button>
        </div>
      </div>
      <div className="pfbottom"></div>
    </div>
  );
}

export default PlaneFeature;
