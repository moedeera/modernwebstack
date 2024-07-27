import { useEffect, useState } from "react";
import "./Block1x.css";
import { Link } from "react-router-dom";

import { SubBlock2 } from "../SubBlock2/SubBlock2";
import { CodeBlock } from "../CodeBlock/CodeBlock";

export const Block1x = ({ data }) => {
  const [info, setInfo] = useState({
    small: "Fundamentals",
    header: "You need to understand design to know what you want",
    text: ` UI is a simple yet complex concept for most developers. Understanding what looks good is easy. Breaking down the concepts to build
    good looking component is hard.
    `,
    text_sec: `Thats why we simplify things for you. with a breakdown of these concepts.`,
    buttonText: "Documentation",
    link: "/",
    reverse: false,
  });

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);
  return (
    <div
      className={
        info.reverse ? "Block-1x-container reverse" : "Block-1x-container"
      }
    >
      <div className="Block-1x-text">
        <small>{info.small}</small>
        <h3>
          {info.header.substring(0, 12)}
          <span>{info.header.substring(12, 29)}</span>
          {info.header.substring(29, 54)}
        </h3>
        <p>{info.text}</p>
        {/* <br /> */}
        <p>
          {info.text_sec} <span></span>
        </p>
        <div className="btn-container">
          {" "}
          <Link className="btn btn-primary" to={info.link}>
            {info.buttonText}
          </Link>{" "}
          <Link className="btn btn-secondary" to={info.link}>
            See Templates
          </Link>{" "}
        </div>
      </div>
      <div className="Block-1x-image">
        {/* <img src={basicImage} alt="" /> */}
        <CodeBlock />
      </div>
    </div>
  );
};
