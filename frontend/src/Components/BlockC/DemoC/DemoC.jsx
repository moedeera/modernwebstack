import React from "react";
import "./DemoC.css";
import keyboard from "./keyboard.png";
import { CodeBlock } from "../../CodeBlock/CodeBlock";
const DemoC = () => {
  return (
    <div className="demoC-container">
      <div className="demoC-block-1">
        <div className="demoC-block-1-image">
          <img src={keyboard} alt="" />
        </div>
        <div className="demoC-block-1-text">
          <div className="demoC-shipping">
            <small>Free Shipping</small>
          </div>
          <div>
            <h3>RPX Razor Gaming Keyboard. Badlands Edition</h3>
          </div>
          <div className="demoC-price">
            <h3>299.99 US$</h3>
          </div>
          <div>
            {" "}
            <small style={{ color: "gray" }}>
              {" "}
              Please see shipping and discount conditions. 30 day Warranty
              available for this product
            </small>
          </div>

          <div className="demoC-button">
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
      {/* <div className="demoC-codeBlock">
        <CodeBlock />
      </div> */}
    </div>
  );
};

export default DemoC;
