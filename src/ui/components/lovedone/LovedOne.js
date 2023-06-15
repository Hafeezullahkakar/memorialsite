import React, { useState } from "react";
import "./LoveOne.css";
import drop from "../../../assets/icons/drop.svg";

import { BsArrowRight } from "react-icons/bs";

function LovedOne({ setShowOption, option }) {
  const [selectedOption, setSelectedOption] = useState("");
  // console.log("Object coming: ", options[selectedOptions].isCompleted)

  const handleNext = () => {
    setShowOption(1);
    // next();
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [optional, setOptional] = React.useState(true);

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
          <div className="lo-single-input">
            <p>Relationship</p>
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
          <div className="lo-single-input">
            <p>Memorial Destination</p>
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
          <div className="lo-single-input">
            <p>Country (optional)</p>
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
        </div>

        <div className="hidShow">
          <p className="lo-title">More details (optional):</p>
          <img src={drop} onClick={() => setOptional(!optional)} />
        </div>
        {optional ? (
          <>
            <div className="lo-single-line">
              <div className="lo-single-input">
                <p>Birth Date</p>
                <input type="date" />
              </div>
              <div className="lo-single-input">
                <p>Birth Place</p>
                <input type="text" />
              </div>
              <div className="lo-single-input">
                <p>Birth Place</p>
                <input type="text" />
              </div>
            </div>

            <div className="lo-single-line">
              <div className="lo-single-input">
                <p>Passed Date</p>

                <input type="date" />
              </div>

              <div className="lo-single-input">
                <p>Death Place</p>
                <input type="text" />
              </div>
              <div className="lo-single-input">
                <p>Death Country</p>
                <input type="text" />
              </div>
            </div>
            <p className="lo-title">Memorial Web Address</p>
            <div className="lo-single-input http">
              <span>https://</span> <input type="text" />{" "}
              <span>.rememberedandmissded.com</span>
            </div>
          </>
        ) : (
          ""
        )}

        <button className="contBtn">
          Continue <BsArrowRight className="arro" />
        </button>
      </div>
    </>
  );
}

export default LovedOne;
