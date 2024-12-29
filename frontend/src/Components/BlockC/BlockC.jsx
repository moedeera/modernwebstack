import React, { useState } from "react";
import "./BlockC.css";
import DemoA from "./DemoA/DemoA";
import DemoB from "./DemoB/DemoB";
import DemoC from "./DemoC/DemoC";

const BlockC = () => {
  const [currentView, setCurrentView] = useState(0);
  const views = [
    { id: 1, name: "Simple", viewNumber: 0, count: 235 },
    { id: 2, name: "Functional Blocks", viewNumber: 1, count: 301 },
    { id: 3, name: "Advanced", viewNumber: 2, count: 152 },
    { id: 4, name: "Layouts", viewNumber: 3, count: 145 },
  ];
  return (
    <div>
      {" "}
      <div className="block-c-container">
        {" "}
        <div>
          <h2>Filter based on your needs</h2>
          <div className="block-c-buttons">
            {views.map((view) => (
              <div
                key={view.id}
                className={
                  currentView === view.viewNumber
                    ? "btn btn-alt block-c-selected"
                    : "btn btn-alt"
                }
                onClick={() => {
                  setCurrentView(view.viewNumber);
                }}
              >
                {view.name}
              </div>
            ))}
          </div>
        </div>
        <div className="block-c-scrolling-container">
          <div
            className="block-c-scrolling-contents"
            style={{ transform: `translateX(-${currentView * 100}%)` }}
          >
            {" "}
            <div className="block-c-box" id="box-1">
              {" "}
              <DemoA />
            </div>
            <div className="block-c-box" id="box-2">
              {" "}
              <DemoB />
            </div>
            <div className="block-c-box" id="box-3">
              {" "}
              <DemoC />
            </div>
            <div className="block-c-box" id="box-3b">
              {" "}
              C2{" "}
            </div>
            <div className="block-c-box" id="box-4">
              {" "}
              D
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockC;
