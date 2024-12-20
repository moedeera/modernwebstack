import React, { useState } from "react";
import "./DemoA.css";

const DemoA = () => {
  const list = [
    { name: "Home" },
    { name: "Discover" },
    { name: "Videos" },
    { name: "Challenges" },
    { name: "Videos" },
  ];

  const [selected, setSeletected] = useState("Home");
  return (
    <div className="demoA-container">
      <div className="demoA-upper">
        <div className="mws-navbar-1">
          {list.map((item, index) => (
            <div key={index} className="mws-navbar-1-link">
              <p>{item.name}</p>
            </div>
          ))}
          <div className="mws-navbar-1-menu"></div>
        </div>
        <div className="mws-navbar-dropdown-1"></div>
      </div>
      <div className="demoA-main"></div>
      <div className="demoA-lower"></div>
    </div>
  );
};

export default DemoA;
