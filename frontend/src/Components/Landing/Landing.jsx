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
            Learn
            <br /> Prototype
            <br /> Collaborate
          </h1>
          <p>
            Create beautiful designs for websites, apps, and more, directly in
            your browser
          </p>
          <Link className="btn" to="/">
            Learn More
          </Link>
        </div>
        <div className="landing-image">
          <img src={img1} alt="main-image" />
        </div>
      </div>
    </div>
  );
};
