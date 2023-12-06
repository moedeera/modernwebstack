import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { siteContext } from "../../Context/Context";
import { useState } from "react";
export const Navbar = () => {
  const { websiteInfo } = useContext(siteContext);
  const [mobileNav, showMobileNav] = useState(false);
  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Templates", link: "/" },
    { id: 3, name: "Docs", link: "/" },
    { id: 4, name: "About", link: "/" },
  ];
  return (
    <div className="navbar-container">
      <div className="navbar">
        {" "}
        <div className="navbar-main">
          {" "}
          <Link to="/" className="navbar-logo">
            <span>Modern</span>
            <br />
            WebStack
          </Link>
          <div className="navbar-links-lg">
            {websiteInfo.menuExpanded.map((item) => (
              <Link key={item.id} to={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/" className="btn btn-nav">
          Login
        </Link>
        <div
          onClick={() => {
            showMobileNav(!mobileNav);
          }}
          className="navbar-menu-button"
        >
          <div className="bar-main bar-top"></div>
          <div className="bar-main bar-middle"></div>
          <div className="bar-main bar-bottom"></div>
        </div>
      </div>
      {mobileNav && <div className="navbar-mobile"></div>}
    </div>
  );
};
