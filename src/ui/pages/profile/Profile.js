import React, { useState } from "react";
import ProfileBackground from "../../../assets/profilebackground.svg";
import Profilepicture from "../../../assets/profilepicture.svg";
import Quote from "../../../assets/quote.svg";
import speaker from "../../../assets/speaker.svg";
import "./Profile.css";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import gallery from "../../../assets/gallery-1.svg";
import story from "../../../assets/story.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Dialog from "@mui/material/Dialog";
 
import Slide from "@mui/material/Slide";
import UploadBox from "../../components/uploadbox/UploadBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const [currentTab, setCurrentTab] = useState("about");
  const [value, setValue] = useState();

  const [open, setOpen] = React.useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cardObject = {
    about: (
      <Card>
        <div className="card-header">
          <Button
            icon={
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
            }
            text="Edit"
            showDropdown={true}
          />
          {/* <a className="ebtn">
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
              </a> */}
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
                was so impressed that she biked in former Soviet Union countries
                (Slovenia and the Czech Republic, I think) all by herself, as
                well as in many countries in Europe with friends. She was also
                very willing to help. At Obsidian Summer Camp, she was often a
                lead person on various food related tasks. And she was very
                proud of her family and their accomplishments.
              </p>
              <div className="share-button">
                <a>
                  <Button
                    icon={
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
                    }
                    text="Share"
                  />
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
            <div className="foot-text-2">
              Change
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.12L5 5.12L1 1.12"
                  stroke="#5C5470"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="btn-section">
            <Button text="Publish" />
          </div>
        </div>
      </Card>
    ),
    form: (
      <Card>
        <Card.Header>
          <p className="title">About your loved one:</p>
        </Card.Header>
        <Card.Content>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="relationship">Relationship:</label>
              <select
                className="custom-arrow"
                id="relationship"
                name="relationship"
              >
                {/* Options for relationship selection */}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="radio-id">Gender:</label>
              <div id="radio-id" className="radio-group">
                {/* Radio buttons for gender selection */}
                <label>
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="memorialDesignation">Memorial Designation:</label>
              <select id="memorialDesignation" name="memorialDesignation">
                {/* Options for memorial designation selection */}
                <option>Select</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="country">Country:</label>
              <select id="country" name="country">
                {/* Options for country selection */}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="webAddress">Web address:</label>
              <input type="text" id="webAddress" name="webAddress" />
            </div>
          </div>
        </Card.Content>

        <Card.Header>
          <p className="title">Birth:</p>
        </Card.Header>
        <Card.Content>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="birthDate">Birth Date:</label>
              <input type="date" id="birthDate" name="birthDate" />
            </div>
            <div className="form-field">
              <label htmlFor="birthPlace">Birth Place:</label>
              <input type="text" id="birthPlace" name="birthPlace" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="birthCountry">Birth Country:</label>
              <input type="text" id="birthCountry" name="birthCountry" />
            </div>
          </div>
        </Card.Content>

        <Card.Header>
          <p className="title">Passed:</p>
        </Card.Header>
        <Card.Content>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="passedDate">Passed Date:</label>
              <input type="date" id="passedDate" name="passedDate" />
            </div>
            <div className="form-field">
              <label htmlFor="deathPlace">Death Place:</label>
              <input type="text" id="deathPlace" name="deathPlace" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="deathCountry">Death Country:</label>
              <input type="text" id="deathCountry" name="deathCountry" />
            </div>
          </div>
        </Card.Content>

        <div className="right">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </Card>
    ),
    phrase: (
      <Card>
        <div className="card-header">
          <div className="intro-section-new">
            <p className="section-text">Personal phrase</p>

            <ReactQuill
              style={{ border: "none" }}
              className="react-quill"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
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
                was so impressed that she biked in former Soviet Union countries
                (Slovenia and the Czech Republic, I think) all by herself, as
                well as in many countries in Europe with friends. She was also
                very willing to help. At Obsidian Summer Camp, she was often a
                lead person on various food related tasks. And she was very
                proud of her family and their accomplishments.
              </p>
              <div className="share-button">
                <a>
                  <Button
                    icon={
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
                    }
                    text="Share"
                  />
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
            <div className="foot-text-2">
              Change
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.12L5 5.12L1 1.12"
                  stroke="#5C5470"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="btn-section">
            <Button text="Publish" />
          </div>
        </div>
      </Card>
    ),
    life: (
      <Card>
        <div className="card-header">
          <div className="intro-section-new">
            <p className="card-description-life">
              In this section, you can create a chapter by chapter biography of
              your loved one's life. You can help others to get to know more
              intimately and for a moment experience the world through his eyes.
              Describe memorable dates and events from his childhood, youth, and
              adult life. Collaborate with other members of your family to build
              a complete and rich life story
            </p>
            <p className="section-text">Add a life story chapter</p>
            <input placeholder="Title" className="title-input" />
            <ReactQuill
              style={{ border: "none" }}
              className="react-quill-2"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        <p className="section-text">Leave a Tribute</p>
        <div className="input-div">
          <UploadBox facebook={true} youtube={true} device={true} />
          <div style={{ marginBottom: "10px" }} className="input-foot">
            <div className="foot-text-1"> </div>
            <div className="foot-text-2"></div>
          </div>
          <div className="btn-section">
            <Button text="Publish" />
          </div>
        </div>
      </Card>
    ),
    gallery: (
      <Card Width="fit-content">
        <div
          style={{ border: "none", marginTop: 0, justifyContent: "flex-start" }}
          className="tabs-container"
        >
          <div className="tab-links">
            <ul className="ul-row">
              <li>
                <a className="tag">Photo</a>
              </li>
              <li>
                <a className="tag">Video</a>
              </li>
              <li>
                <a className="tag">Audio</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="section-text">Add a Photo</p>
        <UploadBox device={true} facebook={true} />
        <div className="gallery">
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
          <div className="gallery-item">
            <img src={gallery} />
          </div>
        </div>
      </Card>
    ),
    privacy: (
      <Card Width="90%">
        <p className="dialog-header">{"Privacy & Notifications"}</p>
        <div className="dialog-content">
          <div className="privacy-checkbox-section">
            <p className="youremail">Privacy Options:</p>
            <div className="privacy-checkbox-group-1">
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                  Visible only to me
                </label>

                <p>
                  Choose this option if you do not want the <br /> memorial to
                  be visible to others at this time.
                </p>
              </div>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={handleCheckboxChange1}
                  />
                  <span className="checkmark"></span>
                  On Marina’s Birthday
                </label>

                <p>
                  Recommended for most memorials. This <br /> option allows easy
                  access to the website and <br /> facilitates collaboration.{" "}
                </p>
              </div>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleCheckboxChange2}
                  />
                  <span className="checkmark"></span>
                  On day of passing
                </label>
                <p>
                  This option enables access to the people you <br /> wish to
                  invite while keeping the memorial <br /> hidden from public
                  view.
                </p>
              </div>
            </div>
          </div>
          <div className="notification-section">
            <p className="youremail">Default Notification:</p>
           <div className="privacy-checkbox-group-2">
           <div className="checkbox-container">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                <span className="checkmark"></span>
                Standard
              </label>
              {/* <p>This option enables access to the people you <br/> wish to invite while keeping the memorial <br/> hidden from public view.</p> */}
            </div>
            <div style={{ marginTop: "10px " }} className="checkbox-container">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                <span className="checkmark"></span>
                Custom
              </label>
              <p>
                Recommended for most memorials. This <br /> option allows easy
                access to the website and <br /> facilitates collaboration.{" "}
              </p>
            </div>
            <div className="checkbox-container">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <a className="action-btn">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 0.00017218C18.1829 -0.0115166 14.2753 0.570915 10.7981 2.05909C11.0382 2.66025 11.24 3.35948 11.4065 4.13806C10.4703 3.43979 9.29929 3.21674 8.26372 3.35897C6.13143 4.65716 4.24411 6.38642 2.75353 8.63693C3.91577 8.99107 5.13264 9.67842 6.11413 10.6388C4.64385 10.3172 2.9352 10.3697 1.53823 10.7758C0.904218 12.0857 0.384523 13.5373 0 15.1448C5.93785 13.7445 6.02145 15.3053 2.34128 21.5571C3.11988 22.1331 4.28729 22.1859 5.19723 21.4858C5.46249 11.2323 9.95729 13.8947 11.0072 15.1876C11.6664 13.3343 12.6113 11.4189 13.9093 9.41314C13.1116 8.74345 12.1004 8.27905 10.9654 7.93492C12.1355 7.69493 13.314 7.43595 14.3851 7.42262C14.6841 7.41887 14.9746 7.43504 15.2544 7.4754C16.065 6.37925 16.9802 5.2558 18.0109 4.09797C17.4325 3.80986 16.8356 3.57499 16.252 3.41459C17.0424 3.15159 17.8793 3.03379 18.6899 3.04214C18.7826 3.04306 18.8746 3.04648 18.9667 3.05068C19.8926 2.0595 20.901 1.04276 22 3.519e-05V0.00017218ZM18.9667 1.15727C12.9264 4.14313 8.51165 8.59639 5.96701 14.2273C7.23126 7.41855 12.5231 2.85992 18.9667 1.15727Z"
                      fill="#5C5470"
                    />
                  </svg>
                </a>
                On new posts from other guests
              </label>
            </div>
            <div className="checkbox-container">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked1}
                  onChange={handleCheckboxChange1}
                />
                <span className="checkmark"></span>
                <a className="action-btn">
                  <svg
                    width="22"
                    height="26"
                    viewBox="0 0 22 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.22223 26C0.87593 26 0.585448 25.8752 0.350782 25.6256C0.116115 25.376 -0.000810585 25.0675 4.22914e-06 24.7V18.2C4.22914e-06 17.485 0.23956 16.8727 0.718671 16.3631C1.19778 15.8535 1.77304 15.5991 2.44445 15.6V10.4C2.44445 9.685 2.684 9.0727 3.16311 8.5631C3.64223 8.0535 4.21748 7.79913 4.88889 7.8H9.77778V5.915C9.41111 5.655 9.11574 5.34083 8.89167 4.9725C8.66759 4.60417 8.55556 4.16 8.55556 3.64C8.55556 3.315 8.61667 2.9952 8.73889 2.6806C8.86111 2.366 9.04445 2.07913 9.28889 1.82L11 0L12.7111 1.82C12.9556 2.08 13.1389 2.36687 13.2611 2.6806C13.3833 2.99433 13.4444 3.31413 13.4444 3.64C13.4444 4.16 13.3324 4.60417 13.1083 4.9725C12.8843 5.34083 12.5889 5.655 12.2222 5.915V7.8H17.1111C17.7833 7.8 18.359 8.05436 18.8381 8.5631C19.3172 9.07183 19.5564 9.68413 19.5556 10.4V15.6C20.2278 15.6 20.8034 15.8548 21.2826 16.3644C21.7617 16.874 22.0008 17.4859 22 18.2V24.7C22 25.0683 21.8827 25.3773 21.648 25.6269C21.4133 25.8765 21.1233 26.0009 20.7778 26H1.22223ZM4.88889 15.6H17.1111V10.4H4.88889V15.6ZM2.44445 23.4H19.5556V18.2H2.44445V23.4Z"
                      fill="#5C5470"
                    />
                  </svg>
                </a>
                On Marina’s Birthday
              </label>
            </div>
            <div className="checkbox-container">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                <span className="checkmark"></span>
                <a className="action-btn">
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8879 0C15.7231 0 13.8017 0.83263 12.5 2.26375C11.1983 0.83263 9.27694 0 7.11207 0C5.22653 0.0022229 3.41887 0.733042 2.0856 2.03216C0.752319 3.33127 0.00228135 5.09261 0 6.92983C0 14.5254 11.4019 20.5942 11.8869 20.8494C12.0753 20.9482 12.286 21 12.5 21C12.714 21 12.9247 20.9482 13.1131 20.8494C13.5981 20.5942 25 14.5254 25 6.92983C24.9977 5.09261 24.2477 3.33127 22.9144 2.03216C21.5811 0.733042 19.7735 0.0022229 17.8879 0ZM17.2963 14.9474C15.7955 16.1883 14.1912 17.3052 12.5 18.2864C10.8088 17.3052 9.20445 16.1883 7.70366 14.9474C5.36853 12.9955 2.58621 10.0189 2.58621 6.92983C2.58621 5.76026 3.06304 4.63858 3.9118 3.81157C4.76056 2.98455 5.91174 2.51994 7.11207 2.51994C9.03017 2.51994 10.6358 3.50692 11.3028 5.09658C11.3999 5.32832 11.5656 5.52663 11.7788 5.66622C11.9921 5.80581 12.2431 5.88037 12.5 5.88037C12.7569 5.88037 13.0079 5.80581 13.2212 5.66622C13.4344 5.52663 13.6001 5.32832 13.6972 5.09658C14.3642 3.50692 15.9698 2.51994 17.8879 2.51994C19.0883 2.51994 20.2394 2.98455 21.0882 3.81157C21.937 4.63858 22.4138 5.76026 22.4138 6.92983C22.4138 10.0189 19.6315 12.9955 17.2963 14.9474Z"
                      fill="#5C5470"
                    />
                  </svg>
                </a>
                On day of passing
              </label>
            </div>
           </div>
          </div>
        </div>
        <div className="dialog-action">
          <div className="checkbox-container">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
              />
              <span className="checkmark"></span>
              Update for all registered guests

            </label>
          </div>
        </div>
      </Card>
    ),
    stories:(
      <div className="story-container">
          <Card Width="80%">
            <div className="story-header">
              <p>Share a special moment from Marina's life</p>
              <Button text="Write A Story"/>
            </div>
          </Card>
          <Card Width="80%">
            <div className="story-img">
              <img src={story} />
            </div>
            <div className="story-title">
              <p className="title1">Home is where the heart is</p>
              <p className="story-date">24 May by Michael Bruns</p>
            </div>
            <p className="story-para">Marina visited us in Oregon the summer after her first grandchild was born. At that time she owned a condo in New Hampshire. What started as a two week visit never ended because while she was here she rented an apartment in Eugene. This was in 1995.</p>
            <div className="story-btn">
            <Button text="Share"/>
            </div>
          </Card>
          <Card Width="80%">
            <div className="story-img">
              <img src={story} />
            </div>
            <div className="story-title">
              <p className="title1">Home is where the heart is</p>
              <p className="story-date">24 May by Michael Bruns</p>
            </div>
            <p className="story-para">Marina visited us in Oregon the summer after her first grandchild was born. At that time she owned a condo in New Hampshire. What started as a two week visit never ended because while she was here she rented an apartment in Eugene. This was in 1995.</p>
            <div className="story-btn">
            <Button text="Share"/>
            </div>
          </Card>
      </div>
    ),
    manageVisitor:(
      <Card Width="90%">
        <p className="manage-title1">Use this section to view and manage invited guests:</p> 
        <p className="manage-title2">Manage visitors</p> 
        <div className="manage-btn-section">
          <p className="pending-btn">Pending (1)</p>
          <p className="visited-btn">Visited (1)</p>
        </div>
        <div className="manage-box"></div>
      </Card>
    ),
  };

  return (
    <div className="theme-container">
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
        <div className="tab-links">
          <ul className="ul-row">
            <li>
              <a onClick={()=>{
                setCurrentTab("about")
              }} className="tag">About</a>
            </li>
            <li>
              <a onClick={()=>{
                setCurrentTab("life")
              }}  className="tag">Life</a>
            </li>
            <li>
              <a onClick={()=>{
                setCurrentTab("gallery")
              }}  className="tag">Gallery</a>
            </li>
            <li>
              <a onClick={()=>{
                setCurrentTab("stories")
              }} className="tag">Stories</a>
            </li>
            <li>
              <a onClick={()=>{
                setCurrentTab("privacy")
              }} className="tag">Admin</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-container">
        {cardObject[currentTab]}
        <div className="side-section">
          <Card>
            <div className="invitation-card">
              <svg
                width="102"
                height="59"
                viewBox="0 0 102 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5417 50.5417V58.9583H72.0417V50.5417C72.0417 50.5417 72.0417 33.7083 46.7917 33.7083C21.5417 33.7083 21.5417 50.5417 21.5417 50.5417ZM34.1667 12.6667C34.1667 10.1697 34.9071 7.72877 36.2944 5.65259C37.6816 3.57642 39.6534 1.95825 41.9603 1.00269C44.2672 0.0471344 46.8057 -0.202883 49.2547 0.284256C51.7037 0.771394 53.9533 1.97381 55.7189 3.73945C57.4845 5.50508 58.6869 7.75464 59.1741 10.2037C59.6612 12.6527 59.4112 15.1911 58.4556 17.498C57.5001 19.805 55.8819 21.7767 53.8057 23.164C51.7296 24.5512 49.2887 25.2917 46.7917 25.2917C43.4433 25.2917 40.2321 23.9615 37.8644 21.5939C35.4968 19.2262 34.1667 16.015 34.1667 12.6667ZM20.7 33.9608C18.3996 36.0831 16.545 38.6424 15.2444 41.4892C13.9438 44.336 13.2233 47.4134 13.125 50.5417V58.9583H0.5V50.5417C0.5 50.5417 0.499992 36.0229 20.7 33.9608ZM25.75 0.0416689C27.0215 0.0424298 28.2851 0.2412 29.4954 0.630835C27.0333 4.1615 25.7132 8.36231 25.7132 12.6667C25.7132 16.971 27.0333 21.1718 29.4954 24.7025C28.2851 25.0921 27.0215 25.2909 25.75 25.2917C22.4016 25.2917 19.1904 23.9615 16.8228 21.5939C14.4551 19.2262 13.125 16.015 13.125 12.6667C13.125 9.31831 14.4551 6.10709 16.8228 3.73945C19.1904 1.3718 22.4016 0.0416689 25.75 0.0416689ZM67.8333 21.0833H80.4583V8.45834H88.875V21.0833H101.5V29.5H88.875V42.125H80.4583V29.5H67.8333V21.0833Z"
                  fill="#5C5470"
                  fill-opacity="0.5"
                />
              </svg>
              <p className="invitation-card-text">
                Invite Marina's family and friends
              </p>
              <Button text="Connect" />
              <div className="social-media-fb">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.75 0.5C17.783 0.5 18.6662 0.866753 19.3997 1.60026C20.1332 2.33377 20.5 3.21701 20.5 4.25V16.75C20.5 17.783 20.1332 18.6662 19.3997 19.3997C18.6662 20.1332 17.783 20.5 16.75 20.5H14.3021V12.7526H16.8932L17.2839 9.73177H14.3021V7.80469C14.3021 7.31858 14.4041 6.95399 14.6081 6.71094C14.8121 6.46788 15.2092 6.34635 15.7995 6.34635L17.388 6.33333V3.63802C16.8411 3.5599 16.0686 3.52083 15.0703 3.52083C13.8898 3.52083 12.9457 3.86806 12.2383 4.5625C11.5308 5.25694 11.1771 6.23785 11.1771 7.50521V9.73177H8.57292V12.7526H11.1771V20.5H4.25C3.21701 20.5 2.33377 20.1332 1.60026 19.3997C0.866753 18.6662 0.5 17.783 0.5 16.75V4.25C0.5 3.21701 0.866753 2.33377 1.60026 1.60026C2.33377 0.866753 3.21701 0.5 4.25 0.5H16.75Z"
                    fill="#5C5470"
                  />
                </svg>
                <p>Share on Facebook</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="invitation-card">
              <p className="invitation-card-text">Notification preferences</p>
              <div className="action-buttons">
                <a className="action-btn">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 0.00017218C18.1829 -0.0115166 14.2753 0.570915 10.7981 2.05909C11.0382 2.66025 11.24 3.35948 11.4065 4.13806C10.4703 3.43979 9.29929 3.21674 8.26372 3.35897C6.13143 4.65716 4.24411 6.38642 2.75353 8.63693C3.91577 8.99107 5.13264 9.67842 6.11413 10.6388C4.64385 10.3172 2.9352 10.3697 1.53823 10.7758C0.904218 12.0857 0.384523 13.5373 0 15.1448C5.93785 13.7445 6.02145 15.3053 2.34128 21.5571C3.11988 22.1331 4.28729 22.1859 5.19723 21.4858C5.46249 11.2323 9.95729 13.8947 11.0072 15.1876C11.6664 13.3343 12.6113 11.4189 13.9093 9.41314C13.1116 8.74345 12.1004 8.27905 10.9654 7.93492C12.1355 7.69493 13.314 7.43595 14.3851 7.42262C14.6841 7.41887 14.9746 7.43504 15.2544 7.4754C16.065 6.37925 16.9802 5.2558 18.0109 4.09797C17.4325 3.80986 16.8356 3.57499 16.252 3.41459C17.0424 3.15159 17.8793 3.03379 18.6899 3.04214C18.7826 3.04306 18.8746 3.04648 18.9667 3.05068C19.8926 2.0595 20.901 1.04276 22 3.519e-05V0.00017218ZM18.9667 1.15727C12.9264 4.14313 8.51165 8.59639 5.96701 14.2273C7.23126 7.41855 12.5231 2.85992 18.9667 1.15727Z"
                      fill="#5C5470"
                    />
                  </svg>
                </a>
                <a className="action-btn">
                  <svg
                    width="22"
                    height="26"
                    viewBox="0 0 22 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.22223 26C0.87593 26 0.585448 25.8752 0.350782 25.6256C0.116115 25.376 -0.000810585 25.0675 4.22914e-06 24.7V18.2C4.22914e-06 17.485 0.23956 16.8727 0.718671 16.3631C1.19778 15.8535 1.77304 15.5991 2.44445 15.6V10.4C2.44445 9.685 2.684 9.0727 3.16311 8.5631C3.64223 8.0535 4.21748 7.79913 4.88889 7.8H9.77778V5.915C9.41111 5.655 9.11574 5.34083 8.89167 4.9725C8.66759 4.60417 8.55556 4.16 8.55556 3.64C8.55556 3.315 8.61667 2.9952 8.73889 2.6806C8.86111 2.366 9.04445 2.07913 9.28889 1.82L11 0L12.7111 1.82C12.9556 2.08 13.1389 2.36687 13.2611 2.6806C13.3833 2.99433 13.4444 3.31413 13.4444 3.64C13.4444 4.16 13.3324 4.60417 13.1083 4.9725C12.8843 5.34083 12.5889 5.655 12.2222 5.915V7.8H17.1111C17.7833 7.8 18.359 8.05436 18.8381 8.5631C19.3172 9.07183 19.5564 9.68413 19.5556 10.4V15.6C20.2278 15.6 20.8034 15.8548 21.2826 16.3644C21.7617 16.874 22.0008 17.4859 22 18.2V24.7C22 25.0683 21.8827 25.3773 21.648 25.6269C21.4133 25.8765 21.1233 26.0009 20.7778 26H1.22223ZM4.88889 15.6H17.1111V10.4H4.88889V15.6ZM2.44445 23.4H19.5556V18.2H2.44445V23.4Z"
                      fill="#5C5470"
                    />
                  </svg>
                </a>
                <a className="action-btn">
                  <svg
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8879 0C15.7231 0 13.8017 0.83263 12.5 2.26375C11.1983 0.83263 9.27694 0 7.11207 0C5.22653 0.0022229 3.41887 0.733042 2.0856 2.03216C0.752319 3.33127 0.00228135 5.09261 0 6.92983C0 14.5254 11.4019 20.5942 11.8869 20.8494C12.0753 20.9482 12.286 21 12.5 21C12.714 21 12.9247 20.9482 13.1131 20.8494C13.5981 20.5942 25 14.5254 25 6.92983C24.9977 5.09261 24.2477 3.33127 22.9144 2.03216C21.5811 0.733042 19.7735 0.0022229 17.8879 0ZM17.2963 14.9474C15.7955 16.1883 14.1912 17.3052 12.5 18.2864C10.8088 17.3052 9.20445 16.1883 7.70366 14.9474C5.36853 12.9955 2.58621 10.0189 2.58621 6.92983C2.58621 5.76026 3.06304 4.63858 3.9118 3.81157C4.76056 2.98455 5.91174 2.51994 7.11207 2.51994C9.03017 2.51994 10.6358 3.50692 11.3028 5.09658C11.3999 5.32832 11.5656 5.52663 11.7788 5.66622C11.9921 5.80581 12.2431 5.88037 12.5 5.88037C12.7569 5.88037 13.0079 5.80581 13.2212 5.66622C13.4344 5.52663 13.6001 5.32832 13.6972 5.09658C14.3642 3.50692 15.9698 2.51994 17.8879 2.51994C19.0883 2.51994 20.2394 2.98455 21.0882 3.81157C21.937 4.63858 22.4138 5.76026 22.4138 6.92983C22.4138 10.0189 19.6315 12.9955 17.2963 14.9474Z"
                      fill="#5C5470"
                    />
                  </svg>
                </a>
              </div>
              <Button onClick={handleClickOpen} text="Managage" />
            </div>
          </Card>
          <Card>
            <div className="invitation-card">
              <div className="views-card-top">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9396 15.66C29.7634 12.6176 27.7216 9.98662 25.0664 8.09209C22.4112 6.19756 19.2591 5.12257 15.9996 5C12.7401 5.12257 9.58796 6.19756 6.93278 8.09209C4.27759 9.98662 2.23574 12.6176 1.05957 15.66C0.980142 15.8797 0.980142 16.1203 1.05957 16.34C2.23574 19.3824 4.27759 22.0134 6.93278 23.9079C9.58796 25.8024 12.7401 26.8774 15.9996 27C19.2591 26.8774 22.4112 25.8024 25.0664 23.9079C27.7216 22.0134 29.7634 19.3824 30.9396 16.34C31.019 16.1203 31.019 15.8797 30.9396 15.66ZM15.9996 25C10.6996 25 5.09957 21.07 3.06957 16C5.09957 10.93 10.6996 7 15.9996 7C21.2996 7 26.8996 10.93 28.9296 16C26.8996 21.07 21.2996 25 15.9996 25Z"
                    fill="#5C5470"
                  />
                  <path
                    d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9109 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z"
                    fill="#5C5470"
                  />
                </svg>

                <p className="views-top-text">203 Views</p>
              </div>
              <div className="views-card-content">
                <p className="views-card-mainText">
                  This website is administered by:
                </p>
                <p className="views-card-secondary">Michael Bruns</p>
                <p className="views-card-secondary">Becky Bruns </p>
              </div>
              <Button
                style={{ width: "fit-content", padding: "20px" }}
                text="Contact to Author"
              />
            </div>
          </Card>

          <Card>
            <div className="suggestion-card">
              <p>Have a Suggestions?</p>
              <Button text="Contact Us -->" />
            </div>
          </Card>
        </div>
      </div>
      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          fullWidth
          sx={{
            backdropFilter: "blur(5px) sepia(5%)",
          }}
          // 👇 Props passed to Paper (modal content)
          PaperProps={{ sx: { borderRadius: "15px", overflow: "hidden" } }}
          maxWidth="md"
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <p className="dialog-header">{"Notification Preference"}</p>
          <div className="dialog-content">
            <div className="email-section">
              <p className="youremail">Your Email:</p>
              <div className="email-content">
                <p className="email-p">Marina@example.com</p>
                <a>Change</a>
              </div>
            </div>
            <div className="notification-section">
              <p className="youremail">Receive Notification:</p>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkmark"></span>
                  <a className="action-btn">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 0.00017218C18.1829 -0.0115166 14.2753 0.570915 10.7981 2.05909C11.0382 2.66025 11.24 3.35948 11.4065 4.13806C10.4703 3.43979 9.29929 3.21674 8.26372 3.35897C6.13143 4.65716 4.24411 6.38642 2.75353 8.63693C3.91577 8.99107 5.13264 9.67842 6.11413 10.6388C4.64385 10.3172 2.9352 10.3697 1.53823 10.7758C0.904218 12.0857 0.384523 13.5373 0 15.1448C5.93785 13.7445 6.02145 15.3053 2.34128 21.5571C3.11988 22.1331 4.28729 22.1859 5.19723 21.4858C5.46249 11.2323 9.95729 13.8947 11.0072 15.1876C11.6664 13.3343 12.6113 11.4189 13.9093 9.41314C13.1116 8.74345 12.1004 8.27905 10.9654 7.93492C12.1355 7.69493 13.314 7.43595 14.3851 7.42262C14.6841 7.41887 14.9746 7.43504 15.2544 7.4754C16.065 6.37925 16.9802 5.2558 18.0109 4.09797C17.4325 3.80986 16.8356 3.57499 16.252 3.41459C17.0424 3.15159 17.8793 3.03379 18.6899 3.04214C18.7826 3.04306 18.8746 3.04648 18.9667 3.05068C19.8926 2.0595 20.901 1.04276 22 3.519e-05V0.00017218ZM18.9667 1.15727C12.9264 4.14313 8.51165 8.59639 5.96701 14.2273C7.23126 7.41855 12.5231 2.85992 18.9667 1.15727Z"
                        fill="#5C5470"
                      />
                    </svg>
                  </a>
                  On new posts from other guests
                </label>
              </div>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={handleCheckboxChange1}
                  />
                  <span className="checkmark"></span>
                  <a className="action-btn">
                    <svg
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.22223 26C0.87593 26 0.585448 25.8752 0.350782 25.6256C0.116115 25.376 -0.000810585 25.0675 4.22914e-06 24.7V18.2C4.22914e-06 17.485 0.23956 16.8727 0.718671 16.3631C1.19778 15.8535 1.77304 15.5991 2.44445 15.6V10.4C2.44445 9.685 2.684 9.0727 3.16311 8.5631C3.64223 8.0535 4.21748 7.79913 4.88889 7.8H9.77778V5.915C9.41111 5.655 9.11574 5.34083 8.89167 4.9725C8.66759 4.60417 8.55556 4.16 8.55556 3.64C8.55556 3.315 8.61667 2.9952 8.73889 2.6806C8.86111 2.366 9.04445 2.07913 9.28889 1.82L11 0L12.7111 1.82C12.9556 2.08 13.1389 2.36687 13.2611 2.6806C13.3833 2.99433 13.4444 3.31413 13.4444 3.64C13.4444 4.16 13.3324 4.60417 13.1083 4.9725C12.8843 5.34083 12.5889 5.655 12.2222 5.915V7.8H17.1111C17.7833 7.8 18.359 8.05436 18.8381 8.5631C19.3172 9.07183 19.5564 9.68413 19.5556 10.4V15.6C20.2278 15.6 20.8034 15.8548 21.2826 16.3644C21.7617 16.874 22.0008 17.4859 22 18.2V24.7C22 25.0683 21.8827 25.3773 21.648 25.6269C21.4133 25.8765 21.1233 26.0009 20.7778 26H1.22223ZM4.88889 15.6H17.1111V10.4H4.88889V15.6ZM2.44445 23.4H19.5556V18.2H2.44445V23.4Z"
                        fill="#5C5470"
                      />
                    </svg>
                  </a>
                  On Marina’s Birthday
                </label>
              </div>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleCheckboxChange2}
                  />
                  <span className="checkmark"></span>
                  <a className="action-btn">
                    <svg
                      width="25"
                      height="21"
                      viewBox="0 0 25 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8879 0C15.7231 0 13.8017 0.83263 12.5 2.26375C11.1983 0.83263 9.27694 0 7.11207 0C5.22653 0.0022229 3.41887 0.733042 2.0856 2.03216C0.752319 3.33127 0.00228135 5.09261 0 6.92983C0 14.5254 11.4019 20.5942 11.8869 20.8494C12.0753 20.9482 12.286 21 12.5 21C12.714 21 12.9247 20.9482 13.1131 20.8494C13.5981 20.5942 25 14.5254 25 6.92983C24.9977 5.09261 24.2477 3.33127 22.9144 2.03216C21.5811 0.733042 19.7735 0.0022229 17.8879 0ZM17.2963 14.9474C15.7955 16.1883 14.1912 17.3052 12.5 18.2864C10.8088 17.3052 9.20445 16.1883 7.70366 14.9474C5.36853 12.9955 2.58621 10.0189 2.58621 6.92983C2.58621 5.76026 3.06304 4.63858 3.9118 3.81157C4.76056 2.98455 5.91174 2.51994 7.11207 2.51994C9.03017 2.51994 10.6358 3.50692 11.3028 5.09658C11.3999 5.32832 11.5656 5.52663 11.7788 5.66622C11.9921 5.80581 12.2431 5.88037 12.5 5.88037C12.7569 5.88037 13.0079 5.80581 13.2212 5.66622C13.4344 5.52663 13.6001 5.32832 13.6972 5.09658C14.3642 3.50692 15.9698 2.51994 17.8879 2.51994C19.0883 2.51994 20.2394 2.98455 21.0882 3.81157C21.937 4.63858 22.4138 5.76026 22.4138 6.92983C22.4138 10.0189 19.6315 12.9955 17.2963 14.9474Z"
                        fill="#5C5470"
                      />
                    </svg>
                  </a>
                  On day of passing
                </label>
              </div>
            </div>
          </div>
          <div className="dialog-action">
            <div className="checkbox-container">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                />
                <span className="checkmark"></span>
                Unsubscribe from all e-mails
              </label>
            </div>
            <Button onClick={handleClose} text="Save" />
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Profile;  
