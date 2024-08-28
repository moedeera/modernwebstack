import React, { useContext } from "react";
import "./LandingBlock.css";
import { siteContext } from "../../Context/Context";
import searchIcon from "../Landing/magnifying_glass.png";
import { Link } from "react-router-dom";

const LandingBlock = () => {
  const { searchPage, setSearchPage } = useContext(siteContext);
  return (
    <div className="landing-block-container">
      <div className="landing-block-text">
        {" "}
        <h1>
          Simple
          <br /> <span className="middle-text"> Ready-made</span>
          <br /> Components
        </h1>
        <p>
          No libraries needed. Just copy and paste the templates and components
          you want directly into your react project. Create beautiful designs
          for websites, apps, and more easily.
        </p>
        <div className="landing-blocks-buttons-container">
          <Link to={"/"} className="btn-1">
            Templates
          </Link>
          <div
            className="btn-1 gray-alt"
            onClick={() => {
              setSearchPage(true);
            }}
          >
            {" "}
            Search
          </div>
        </div>
      </div>
      <div className="landing-block-demo">
        <p>Demo</p>
      </div>
      <div></div>
    </div>
  );
};

export default LandingBlock;
