import React from "react";
import chevronRight from "../DemoA/chevron_right.png";
import "./DemoB.css";
import CodeEditor from "../../CodeEditor/CodeEditor";
import { CodeBlock } from "../../CodeBlock/CodeBlock";

const DemoB = () => {
  return (
    <div className="demoB-container">
      <div>
        <div className="demoB-block-1">
          <div
            className="demoB-block-1-image"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/5926460/pexels-photo-5926460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
          ></div>
          <h3>Discounts this Holiday</h3>
          <small>Janet Smith</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="demoB-block-1-readMore">
            <p>Read More</p>
            <img src={chevronRight} alt="right arrow" />
          </div>
        </div>
      </div>
      <div className="demoB-codeBlock">
        <CodeBlock />
      </div>
    </div>
  );
};

export default DemoB;
