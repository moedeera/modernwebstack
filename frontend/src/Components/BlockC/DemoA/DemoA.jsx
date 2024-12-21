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

  const [selected, setSelected] = useState("Home");
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
          <div className="mws-navbar-dropdown-label">
            <p>Account</p>
            <img src={chevronDown} alt="" />
          </div>
        </div>
      </div>
      <div className="demoA-main"></div>
      <div className="demoA-lower"></div>
    </div>
  );
};

export default DemoA;
