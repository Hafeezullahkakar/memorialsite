import React from "react";
import "./ChoosePlane.css";
import arrow from "../../../assets/icons/arraw.svg";
import tick from "../../../assets/icons/tick.svg";

function ChoosePlane() {
  return (
    <div className="memoLogin-page">
    
      <div className="memoLogin-pricing">
        <div className="pricing-text">
          <p>One Price, Endless Memories</p>
          <p>For Your</p>
          <p className="pfont">loved ones</p>
          {/* <img src={arrow} /> */}
        </div>

        <div className="memopricing-card">
          <p className="life">Lifetime</p>
          <h2>$49.99</h2>
          <p className="flexible">Most flexible</p>

          <p className="divider"></p>

          <p className="memoline">
            <img src={tick} /> <spand>Never Expire</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Unlimited Photos</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Video and Music Gallery</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Social Media Integration</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Custom Background Music</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Advanced Privacy Controls</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Additional Administrators</spand>
          </p>
          <p className="memoline">
            <img src={tick} /> <spand>Custom Notifications</spand>
          </p>

          <button className="memoget-started">Get Started</button>
        </div>
      </div>
      <div className="pfbottom"></div>
    </div>
  );
}

export default ChoosePlane;
