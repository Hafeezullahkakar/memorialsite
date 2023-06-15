import React from "react";
import "./CreateMemorial.css";
import greater from "../../../assets/icons/greater.svg";
import LovedOne from "../../components/lovedone/LovedOne";
// import MemoLogin from "../../components/creatememo_chooseplane/ChoosePlane";
import ChoosePlane from "../../components/creatememo_chooseplane/ChoosePlane";
import MemoLogin from "../../components/creatememo_login/MemoLogin";
import PrivacyOption from "../../components/privacyoption/PrivacyOption";

const A = () => {
  return <h1>Component A</h1>;
};
const B = () => {
  return <h1>Component B</h1>;
};
const C = () => {
  return <h1>Component C</h1>;
};
const D = () => {
  return <h1>Component D</h1>;
};

function CreateMemorial() {
  // const [options, setOptions] = React.useState([1, 2, 3, 4]);
  // const [selectedOptions, setSelectedOptions] = React.useState(0);

  const options = [
    {
      title: "About your loved one",
      isCompleted: true,
      isActive: true,
      component: <LovedOne /> || "",
    },
    {
      title: "Account details",
      isCompleted: false,
      isActive: false,
      component: <MemoLogin />,
    },
    {
      title: "Choose your plan",
      isCompleted: false,
      isActive: false,
      component: <ChoosePlane />,
    },
    {
      title: "Privacy options",
      isCompleted: false,
      isActive: false,
      component: <PrivacyOption />,
    },
  ];
  const [showOption, setShowOption] = React.useState({
    title: "About your loved one",
    isCompleted: true,
    isActive: true,
    component: <LovedOne />,
  });

  const handleSelected = (itm) => {
    setShowOption(itm);
    showOption.isActive = true;
    // console.log(showOption);
  };

  return (
    <div className="memrialpage">
      <h1>Create a memorial website</h1>
      <div className="breadcrum">
        {options.map((item) => {
          return (
            <p
              className={
                item.isActive || item.isCompleted ? "active" : "noActive"
              }
              onClick={() => handleSelected(item)}
            >
              {item.title}

              <span>
                <img src={greater} />
              </span>
            </p>
          );
        })}
      </div>
      <div className="breadcrum_component">{showOption.component}</div>
    </div>
  );
}

export default CreateMemorial;
