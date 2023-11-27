import { useEffect, useState } from "react";
import "./Block1.css";
import { Link } from "react-router-dom";
import basicImage from "../Landing/code1.jpg";

export const Block1 = ({ data }) => {
  const [info, setInfo] = useState({
    small: "",
    header: "Faster and easier design with AI",
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
    <div
      className={
        info.reverse ? "block-1-container reverse" : "block-1-container"
      }
    >
      <div className="block-1-text">
        <small>{info.small}</small>
        <h3>{info.header}</h3>
        <p>{info.text}</p>
        <Link className="btn btn-primary" to={info.link}>
          {info.buttonText}
        </Link>
      </div>
      <div className="block-1-image">
        <img src={basicImage} alt="" />
      </div>
    </div>
  );
};
