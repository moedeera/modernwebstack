import React, { useState } from "react";
import "./DemoA.css";
import chevronDown from "./chevron_down.png";

const DemoA = () => {
  const list = [
    { name: "Home" },
    { name: "Discover" },
    { name: "Videos" },
    { name: "About" },
    { name: "Contact" },
  ];

  const blocks = [
    {
      name: "Nature",
      image:
        "https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Patterns",
      image:
        "https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "City",
      image:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Social",
      image:
        "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [selected, setSelected] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="demoA-container">
      <div className="demoA-upper">
        <div className="mws-navbar-1">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(item.name);
              }}
              className={
                item.name === selected
                  ? "mws-navbar-1-link mws-navbar-1-selected"
                  : "mws-navbar-1-link"
              }
            >
              <p>{item.name}</p>
            </div>
          ))}
          <div className="mws-navbar-1-menu">
            <div className="mws-navbar-1-menu-container">
              <div className="mws-navbar-1-menu-bar mws-upper"></div>
              <div className="mws-navbar-1-menu-bar mws-middle"></div>
              <div className="mws-navbar-1-menu-bar mws-lower"></div>
            </div>
          </div>
        </div>
        <div className="mws-navbar-dropdown-1">
          <div className="mws-navbar-dropdown-image">
            <img
              src="https://images.pexels.com/users/avatars/224453/andrea-piacquadio-138.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
              alt=""
            />
          </div>
          <div
            className="mws-navbar-dropdown-label"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <p>Account</p>
            <img src={chevronDown} alt="" />
          </div>
          {showDropdown && (
            <div className="mws-dropdown-1-options">
              <div>
                {" "}
                <p>Option A</p>
              </div>
              <div>
                {" "}
                <p>Option B</p>
              </div>
              <div>
                {" "}
                <p>Option C</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="demoA-main">
        <div className="demoA-block-1">
          <div>
            <h3>Images</h3>
          </div>
          <div className="demoA-block-1-grid">
            {blocks.map((block, index) => (
              <div key={index} className="demoA-grid-unit">
                <div
                  className="demoA-grid-unit-image"
                  style={{ backgroundImage: `url("${block.image}")` }}
                ></div>
                <div className="demoA-grid-unit-label">
                  <p>{block.name}</p>
                  <small>145 photos</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="demoA-block-2"></div>
      </div>
      <div className="demoA-lower"></div>
    </div>
  );
};

export default DemoA;
