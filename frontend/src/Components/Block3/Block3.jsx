import React from "react";
import "./Block3.css";
import b3svg from "./block3.svg";
import designgif from "./design.png";
import code from "./code.png";
import share from "./share.png";
import { useEffect, useState } from "react";

export const Block3 = ({ data }) => {
  const [info, setInfo] = useState({
    small: "Design",
    header: "Join Our Community Of Open Source Design",
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
        {/* <img
          src="https://www.modernwebstack.com/assets/code1-ba39da29.jpg"
          alt=""
        /> */}
        <div className="block-3-icon">
          <img src={designgif} alt="" style={{ width: "64px" }} srcset="" />
          <h4>Design</h4>
        </div>

        <div className="block-3-icon">
          <img src={code} alt="" style={{ width: "64px" }} srcset="" />
          <h4>Code</h4>
        </div>

        <div className="block-3-icon">
          <img src={share} alt="" style={{ width: "64px" }} srcset="" />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
};
