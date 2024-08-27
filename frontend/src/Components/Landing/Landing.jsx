import "./Landing.css";

import searchIcon from "./magnifying_glass.png";
import { useContext } from "react";
import { siteContext } from "../../Context/Context";
import Showcase from "../Showcase/Showcase";

export const Landing = () => {
  const { searchPage, setSearchPage } = useContext(siteContext);
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

          <div className="landing-buttons-container">
            <div className="btn">Templates</div>
            <div
              className="search-input"
              onClick={() => {
                setSearchPage(true);
              }}
            >
              <img
                src={searchIcon}
                alt=""
                srcset=""
                style={{ width: "100%", maxWidth: "20px" }}
              />
              <small>Search</small>
            </div>
          </div>
        </div>
        <Showcase />
      </div>
    </div>
  );
};
