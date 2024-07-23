import React from "react";
import "./Block3.css";
import b3svg from "./block3.svg";

import { useEffect, useState } from "react";

export const Block3 = ({ data }) => {
  const [info, setInfo] = useState({
    small: "Design",
    header: "Prototyping and create stunning animations",
    text: ` Our AI engine gives you everything you need to create stunning
            designs, from vector graphics to interactive prototypes with our
            powerful features and intuitive interface.`,
    buttonText: "Learn More",
    link: "/",
    reverse: true,
  });

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);
  return (
    <div className="block3-container">
      <small>{info.small}</small>
      <h2>{info.header}</h2>
      <div className="block3-image-container">
        <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
        />
        <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
        />

        <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
