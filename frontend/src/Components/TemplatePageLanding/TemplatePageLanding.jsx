import { SubBlock1 } from "../SubBlock1/SubBlock1";
import "../Landing/Landing.css";
import img1 from "../Landing/code1.jpg";
import { Link } from "react-router-dom";

export const TemplatePageLanding = () => {
  return (
    <div className="landing-container">
      {/* <div className="gradient"></div> */}

      <div className="landing-content">
        {" "}
        <div className="landing-text">
          <h3>Supercharge your site</h3>
          <h1>Free Easy-to-use Templates</h1>
          <p>
            Variety of Templates to suit your needs for building a React or
            NextJS application.
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
