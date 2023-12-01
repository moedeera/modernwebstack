import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Test = () => {
  const [state, setState] = useState({
    id: 0,
    name: "John",
    info: [{ age: "27" }, { gender: "male" }],
    registered: false,
  });

  useEffect(() => {
    console.log("hello");
  }, []);

  const function1 = () => {
    let x = 10;
    console.log("hello");
    return x;
  };

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
      <div className="test-image">
        <h3>Image 1 </h3>
        <img src="" alt="" />
      </div>
    </div>
  );
};
