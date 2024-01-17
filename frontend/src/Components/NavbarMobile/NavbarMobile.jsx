import { useContext, useEffect } from "react";
import "./NavbarMobile.css";
import { siteContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const NavbarMobile = ({ closeMobileMenu }) => {
  const { websiteInfo } = useContext(siteContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMobileMenu(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); //
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
