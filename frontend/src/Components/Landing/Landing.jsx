import { SubBlock1 } from "../SubBlock1/SubBlock1";
import "./Landing.css";
import img1 from "./code1.jpg";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing-container">
      {/* <div className="gradient"></div> */}

      <div className="landing-content">
        {" "}
        <div className="landing-text">
          <h1>
            Simple
            <br /> <span className="middle-text"> Ready-made</span>
            <br /> Components
          </h1>
          <p>
            No libraries needed. Just copy and paste the templates and
            components you want directly into your react project. Create
            beautiful designs for websites, apps, and more with a simple copy
            and paste.
          </p>
          <Link className="btn" to="/">
            Learn More
          </Link>
        </div>
        <div className="landing-image">
          <img src={img1} alt="main-image" />
        </div>
        <SubBlock1 />
      </div>
    </div>
  );
};
