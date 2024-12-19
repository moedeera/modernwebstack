import React, { useState } from "react";
import "./BlockC.css";

const BlockC = () => {
  const [currentView, setCurrentView] = useState(0);
  const views = [
    { id: 1, name: "Simple", viewNumber: 0 },
    { id: 2, name: "Semi-Functional", viewNumber: 1 },
    { id: 3, name: "Full Functional", viewNumber: 2 },
    { id: 4, name: "Layouts", viewNumber: 3 },
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
              A
            </div>
            <div className="block-c-box" id="box-2">
              {" "}
              B
            </div>
            <div className="block-c-box" id="box-3">
              {" "}
              C{" "}
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
