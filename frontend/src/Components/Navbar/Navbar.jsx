import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { siteContext } from "../../Context/Context";
import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import logo from "../../../public/mws.png";
export const Navbar = () => {
  const { websiteInfo } = useContext(siteContext);
  const [mobileNav, showMobileNav] = useState(false);

  if (mobileNav) {
    return <NavbarMobile closeMobileMenu={showMobileNav} />;
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        {" "}
        <div className="navbar-main">
          {" "}
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-image">
              <img src={logo} alt="" />
            </div>
            <div>
              {" "}
              <span>M</span>
              <span>W</span>Stack
            </div>
          </Link>
          <div className="navbar-links-lg">
            {websiteInfo.menuExpanded.map(
              (item, index) =>
                index > 0 && (
                  <Link key={item.id} to={item.link}>
                    {item.name}
                  </Link>
                )
            )}
          </div>
        </div>
        <Link to="/" className="btn btn-nav">
          Premium
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
      <div
        className="navbar-mobile"
        style={
          mobileNav
            ? { transform: "translateX(0)", opacity: "1" }
            : { transform: "translateX(100%)", opacity: "0" }
        }
      >
        {websiteInfo.menuExpanded.map((item) => (
          <Link
            key={item.id}
            onClick={() => {
              showMobileNav(!mobileNav);
            }}
            to={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
