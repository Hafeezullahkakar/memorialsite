import React from "react";
import "./PrivacyOption.css";
import { BsArrowRight } from "react-icons/bs";
function PrivacyOption() {
  return (
    <div className="Seperator">
      <div className="memoLogin-page">
        <div className="memoLogin-pricing privacy">
          <p>
            Would you like to share your memorial with others, or keep it
            private:
          </p>


          <div className="pr-options">
            <div className="singleOPt">
              <input
                type="radio"
                id="visible-only-to-me"
                name="visibility"
                value="private"
              />
              <label for="visible-only-to-me">Visible only to me</label>
              <p>
                Choose this option if you do not want the memorial to be visible
                to others at this time.
              </p>
            </div>
            <div className="singleOPt">
              <input
                type="radio"
                id="all-visitors"
                name="visibility"
                value="public"
              />
              <label for="all-visitors">
                All visitors can view and contribute
              </label>
              <p>
                Recommended for most memorials. This option allows easy access
                to the website and facilitates collaboration.{" "}
              </p>
            </div>
          </div>

          <div className="contnu">
            <div className="trms">
              <input
                type="radio"
                id="visible-only-to-me"
                name="visibility"
                value="private"
              />
              <label for="visible-only-to-me">
                I agree to <b>Term of use</b>{" "}
              </label>
            </div>
            <button>
              Continue to memorial <BsArrowRight className="arro" />
            </button>
          </div>
        </div>
        {/* <div className="pfbottom1sdprivcy1"></div> */}
      </div>
    </div>
  );
}

export default PrivacyOption;
