import { SubBlock1 } from "../SubBlock1/SubBlock1";
import "./Landing.css";
import img1 from "./code1.jpg";
import { Link } from "react-router-dom";
import searchIcon from "./magnifying_glass.png";
import { useContext } from "react";
import { siteContext } from "../../Context/Context";

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
          {/* <div className="button-container">
            {" "}
            <Link className="btn" to="/">
              Learn More
            </Link>
            <div
              className="search-bar"
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
              <div className="quick-search">
                <small>Search</small>
              </div>
            </div>
          </div> */}
          <div className="landing-buttons-container">
            <div className="btn">See Templates</div>
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
        {/* <div className="landing-image">
          <img src={img1} alt="main-image" />
        </div> */}
        {/* <SubBlock1 /> */}
      </div>
    </div>
  );
};
