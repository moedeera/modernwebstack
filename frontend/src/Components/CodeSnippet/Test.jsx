import React from "react";
import { Link } from "react-router-dom";

export const Test = () => {
  return (
    <div className="test-container">
      <div className="test-text">
        <h3>Welcome</h3>
        <p>
          Our AI engine gives you everything you need to create stunning designs
        </p>
        <Link to={"/"} className="btn">
          More
        </Link>
      </div>
      <div className="test-image">{/* <img src="" alt="" /> */}</div>
    </div>
  );
};
