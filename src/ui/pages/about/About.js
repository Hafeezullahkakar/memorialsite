import React from "react";
import "./about.css";
import logo from "../../../assets/logo.svg";

function About() {
  return (
    <div className="aboutpage">
      <div className="ab-top">
        <img src={logo} />
        <div className="content">
          <p className="tp">
            Losing a loved one is incredibly painful, and very personal.
          </p>
          <p className="btm">
            At RememberedandMissed, we provide a shared, easily-accessible
            virtual space where family members and friends can pay homage to a
            special life while helping each other heal by sharing their
            feelings, warm memories, and words of support.
          </p>
          <button className="memobtn">Create A Memorial</button>
        </div>
      </div>
      <div className="ab-bottom"></div>
    </div>
  );
}

export default About;
