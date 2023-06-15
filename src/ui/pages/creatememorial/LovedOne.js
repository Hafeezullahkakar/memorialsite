import React, { useState } from "react";
import "./LoveOne.css";

function LovedOne() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <div className="lo-content">
        <p className="lo-title">This memorial is dedicated to:</p>

        <div className="lo-single-line">
          <div className="lo-single-input">
            <p>First Name</p>
            <input type="name" />
          </div>
          <div className="lo-single-input">
            <p>Last Name</p>
            <input type="name" />
          </div>
          <div className="lo-single-input">
            <p>Gender</p>
            <div className="gender">
              <label className="gender-input">
                <input
                  className="gender-label"
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </label>

              <label className="gender-label">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </label>
            </div>
          </div>
        </div>
        
        <div className="lo-single-line">
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
        <div className="lo-single-line">
          <div className="single-input">
            <p>Your name</p>
            <input type="email" />
          </div>
          <div className="single-input">
            <p>Memorial name (if applies)</p>
            <input type="email" />
          </div>
        </div>

        <div className="lo-single-line textara"></div>

        <button className="cusend">Just Send</button>
      </div>
    </>
  );
}

export default LovedOne;
