import React from "react";
import "./PlaneFeature.css";
import arrow from "../../../assets/icons/arraw.svg";
import tick from "../../../assets/icons/tick.svg";
function Pricing() {
  return (
    <div className="pf-pricing">
      <div className="pricing-text">
        <p>One Price, Endless Memories For Your</p>
        <p className="pfont">loved ones</p>
        <img src={arrow} />
      </div>
      <div className="pricing-card">
        <p>Lifetime</p>
        <h2>$49.99</h2>
        <p>Most flexible</p>

        <p className="divider"></p>

        <p>
          <img src={tick} /> <spand>Never Expire</spand>
        </p>
        <p>
          <img src={tick} /> <spand>Never Expire</spand>
        </p>
        <p>
          <img src={tick} /> <spand>Never Expire</spand>
        </p>
        <p>
          <img src={tick} /> <spand>Never Expire</spand>
        </p>
        <p>
          <img src={tick} /> <spand>Never Expire</spand>
        </p>
        <p>
          <img src={tick} /> <spand>Never Expire</spand>
        </p>
      </div>
    </div>
  );
}

export default Pricing;
