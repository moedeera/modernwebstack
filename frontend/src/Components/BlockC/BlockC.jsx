import React, { useState } from "react";
import "./BlockC.css";

const BlockC = () => {
  const [view, setView] = useState(0);
  return (
    <div>
      {" "}
      <div className="block-c-container">
        {" "}
        <h2>Filter based on your needs</h2>
        <div className="block-c-scrolling-container">
          <div
            className="block-c-scrolling-contents"
            style={{ transform: `translateY(-${view * 25}%)` }}
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
            <div className="block-c-box " id="box-4">
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
