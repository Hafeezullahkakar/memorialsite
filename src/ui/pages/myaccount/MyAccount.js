import React from "react";
import "./MyAccount.css";

function MyAccount() {
  return (
    <div className="myAccountPage">
      <h2>My Account</h2>

      <div className="myAccountCard">
        <h2>Personal Information</h2>

        <div className="detailsSection">
          <div className="firstLine">
            <div className="singleInput">
              <p>First Name</p>
              <input type="text" placeholder="Marina" />
            </div>
            <div className="singleInput">
              <p>Last Name</p>
              <input type="text" placeholder="D." />
            </div>
          </div>

          <div className="secondLine">
            <p>Email</p>
            <input type="text" placeholder="marina@gmail.com" />
          </div>
          <div className="thirdLine">
            <h2>Change Password </h2>
            <div className="SInputs">
              <div className="singleInput">
                <p>Current Password</p>
                <input type="text" />
              </div>
              <div className="singleInput">
                <p>New Password</p>
                <input type="text" />
              </div>
              <div className="singleInput">
                <p>New Password </p>
                <input type="text" />
              </div>
            </div>
          </div>

          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
