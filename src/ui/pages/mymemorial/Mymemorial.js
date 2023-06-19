import React from "react";
import "./Mymemorial.css";
import avatart from "../../../assets/icons/avatart.svg";
import { RiDeleteBinLine } from "react-icons/ri";
function Mymemorial() {
  return (
    <div className="memorialPage">
      <h2>My Memorials</h2>

      <div className="memorialCard">
        <h2>Create a memorial</h2>
        <div className="firstlineInputs">
          <input className="f_input" type="text" placeholder="First Name" />
          <input className="f_input" type="text" placeholder="Last Name" />
          <button>CREATE</button>
        </div>
        <h2>MY memorials</h2>
       
        <div className="secondLine">
          <div className="innerCard">
            <div className="left">
              <div className="avatart">
                <img src={avatart} />
              </div>
              <div className="nameEmail">
                <span>Marina</span>

                <p>maina.remdandmissed.com</p>
              </div>
            </div>
            <div className="memoButtons">
              <button className="topBtn">Upgrade Plan</button>
              <button className="delBtn">
                <RiDeleteBinLine />
                Delete Memorial
              </button>
            </div>
          </div>
        </div>
        <div className="secondLine">
          <div className="innerCard">
            <div className="left">
              <div className="avatart">
                <img src={avatart} />
              </div>
              <div className="nameEmail">
                <span>Marina</span>

                <p>maina.remredandmissed.com</p>
              </div>
            </div>
            <div className="memoButtons">
              <button className="topBtn">Upgrade Plan</button>
              <button className="delBtn">
                <RiDeleteBinLine />
                Delete Memorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mymemorial;
