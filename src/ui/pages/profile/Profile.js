import React from "react";
import ProfileBackground from "../../../assets/profilebackground.svg";
import Profilepicture from "../../../assets/profilepicture.svg";
import Quote from "../../../assets/quote.svg";
import speaker from "../../../assets/speaker.svg";
import "./Profile.css";
import Card from "../../components/card/Card";

const Profile = () => {
  return (
    <div>
      <div className="cover-picture">
        <img src={ProfileBackground} />
      </div>
      <div className="profile-picture">
        <img src={Profilepicture} />
        {/* Circular profile picture */}
      </div>
      <div className="name-container">
        <div className="name-section">
          <p>MARINA BURNS</p>
          <img src={speaker} />
        </div>
        <p className="date-section">1958-2023</p>
      </div>
      <div className="tabs-container">
        <div className="nav-links">
          <ul>
            <li>
              <a className="tag">Life</a>
            </li>
            <li>
              <a className="tag">Gallery</a>
            </li>
            <li>
              <a className="tag">Stories</a>
            </li>
            <li>
              <a className="tag">Admin</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Card>
          <div className="card-header">
            <a className="ebtn">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8299 4.0859L14.7474 0.992231C14.3451 0.61297 13.8179 0.395356 13.2661 0.380783C12.7143 0.366211 12.1765 0.555697 11.7549 0.913196L1.62974 11.0749C1.2661 11.4429 1.03968 11.9253 0.988484 12.441L0.504728 17.1493C0.489573 17.3147 0.510955 17.4814 0.567348 17.6375C0.623741 17.7936 0.713758 17.9353 0.830982 18.0526C0.936103 18.1572 1.06077 18.24 1.19784 18.2962C1.33491 18.3524 1.48168 18.3808 1.62974 18.38H1.73099L6.42229 17.9509C6.9362 17.8996 7.41684 17.6723 7.78356 17.3074L17.9087 7.14569C18.3017 6.72902 18.514 6.173 18.4993 5.59946C18.4845 5.02592 18.2438 4.48165 17.8299 4.0859ZM6.21979 15.6928L2.84475 16.0089L3.14851 12.6217L9.50483 6.32146L12.5424 9.36997L6.21979 15.6928ZM14.0049 7.85701L10.9898 4.83109L13.1836 2.57294L16.2549 5.65531L14.0049 7.85701Z"
                  fill="white"
                />
              </svg>
              <p className="ebtn-text">Edit</p>

              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 1.38L6 5.38L1.5 1.38"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="card-quote">
            <div className="quote">
              <div className="quote-content">
                <img src={Quote} />
                <p className="quote-main-text">
                  Let the memory of Marina be with us forever.
                </p>
              </div>
              <ul className="dot-list">
                <li>Born on September 2, 1958 in Kaduna, Kaduna, Nigeria</li>
                <li>Passed away on April 26, 2023 in Lagos, Lagos, Nigeria</li>
              </ul>
            </div>
            <p className="section-text">Tribute</p>
          </div>
          <Card>
            <div className="content-card">
              <div className="picture">
                {/* Your picture component or image goes here */}
                <img src={Profilepicture} />
              </div>
              <div className="text">
                <p className="name-text">Sayed Adnan</p>
                <p className="date-text">May 24</p>
                <p className="card-description">
                  I too have fond memories of cycling the Marble Mountain loop
                  with Barb and other friends; she was such a smooth cyclist! I
                  was so impressed that she biked in former Soviet Union
                  countries (Slovenia and the Czech Republic, I think) all by
                  herself, as well as in many countries in Europe with friends.
                  She was also very willing to help. At Obsidian Summer Camp,
                  she was often a lead person on various food related tasks. And
                  she was very proud of her family and their accomplishments.
                </p>
                <div className="share-button">
                  <a className="ebtn">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 21.12C19.6569 21.12 21 19.7768 21 18.12C21 16.4631 19.6569 15.12 18 15.12C16.3431 15.12 15 16.4631 15 18.12C15 19.7768 16.3431 21.12 18 21.12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 13.62L15 16.62"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 15.12C7.65685 15.12 9 13.7768 9 12.12C9 10.4631 7.65685 9.12 6 9.12C4.34315 9.12 3 10.4631 3 12.12C3 13.7768 4.34315 15.12 6 15.12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 7.62L9 10.62"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 9.12C19.6569 9.12 21 7.77685 21 6.12C21 4.46314 19.6569 3.12 18 3.12C16.3431 3.12 15 4.46314 15 6.12C15 7.77685 16.3431 9.12 18 9.12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p> Share</p>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <p className="section-text">Leave a Tribute</p>
      <div className="input-div">
      <textarea className="multiline-input" rows={4}></textarea>
      <div className="input-foot">
        <div className="foot-text-1">by Adnan</div>
        <div className="foot-text-2">Change
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1.12L5 5.12L1 1.12" stroke="#5C5470" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>
      <div className="btn-section">
            <button className="publish-btn">Publish</button>
      </div>
      </div>
        </Card>
      </div>
     
    </div>
  );
};

export default Profile;
