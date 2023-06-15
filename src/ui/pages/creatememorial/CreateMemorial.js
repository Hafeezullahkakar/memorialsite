import React from "react";
import "./CreateMemorial.css";
import greater from "../../../assets/icons/greater.svg";
import LovedOne from "./LovedOne";
function CreateMemorial() {
  return (
    <div className="memrialpage">
      <h1>Create a memorial website</h1>
      <div className="breadcrum">
        <p>
          {" "}
          About your loved one{" "}
          <span>
            <img src={greater} />
          </span>
        </p>
        <p>
          {" "}
          Account details{" "}
          <span>
            {" "}
            <img src={greater} />
          </span>
        </p>
        <p>
          {" "}
          Choose your plan{" "}
          <span>
            {" "}
            <img src={greater} />
          </span>
        </p>
        <p>
          {" "}
          Privacy options{" "}
          <span>
            {" "}
            <img src={greater} />
          </span>
        </p>
      </div>
      <div className="breadcrum_component">
        <LovedOne />
      </div>
    </div>
  );
}

export default CreateMemorial;
