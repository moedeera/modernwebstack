import { useContext } from "react";
import "./NavbarMobile.css";
import { siteContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const NavbarMobile = ({ closeMobileMenu }) => {
  const { websiteInfo } = useContext(siteContext);
  return (
    <div className="navbar-mobile-page">
      <div
        className="navbar-close"
        onClick={() => {
          closeMobileMenu(false);
        }}
      >
        <div className="close-bar-1"></div>
        <div className="close-bar-2"></div>
      </div>
      <div className="mobile-navbar-page-links">
        {" "}
        {websiteInfo.menuList.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() => {
              closeMobileMenu(false);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
