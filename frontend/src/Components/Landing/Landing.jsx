import "./Landing.css";
import img1 from "./pic2.svg";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-text">
        <h1>
          Design.
          <br /> Prototype.
          <br /> Collaborate.
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
  );
};
