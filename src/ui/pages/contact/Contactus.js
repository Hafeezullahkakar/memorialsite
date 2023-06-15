import React, { useState } from "react";
import "./Contactus..css";
import arrow from "../../../assets/icons/arraw.svg";
import tick from "../../../assets/icons/tick.svg";

function Contactus() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="cu-page">
      <div className="cu-top">
        <h2>
          Love to hear from you <br></br> get in touch
        </h2>
      </div>
      <div className="cu-content">
        <p>
          Do you have any questions or ideas to improve this website? Please
          email us at <br></br> <b>support@rememberedandmissed.com</b>
        </p>

        <div className="single-line">
          <div className="single-input">
            <p>Type of Inquiry</p>
            <select
              id="dropdown"
              className="drop"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div className="single-input">
            <p>Your email</p>
            <input type="email" />
          </div>
        </div>
        <div className="single-line">
          <div className="single-input">
            <p>Your name</p>
            <input type="email" />
          </div>
          <div className="single-input">
            <p>Memorial name (if applies)</p>
            <input type="email" />
          </div>
        </div>

        <div className="single-line textara">
          <div className="single-input area">
            <p>Message</p>
            <textarea />
          </div>
          <div className="single-input mail">
            <h3>Mail Address</h3>
            <span>
              Remeberedandmissed.com 817 Broadway 5th Floor, New York, N.Y.
              10003
            </span>
          </div>
        </div>

        <button className="cusend">Just Send</button>
      </div>
      <div className="cubottom"></div>
    </div>
  );
}

export default Contactus;
