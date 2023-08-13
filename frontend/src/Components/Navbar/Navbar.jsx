import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { siteContext } from "../../Context/Context";
import menu from "./menu.png";
import close from "./close.png";
import { useState } from "react";

export const Navbar = () => {
  const { websiteInfo } = useContext(siteContext);
  console.log(websiteInfo.menuList);

  const [sideMenu, showSideMenu] = useState(false);

  return (
    <div className="container-small">
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <h3>MWS</h3>
          </Link>
        </div>
        <div className="links">
          {websiteInfo.menuList.map((links) => {
            return (
              <Link to={`${links.link}`} key={links.name}>
                <p>{links.name}</p>
              </Link>
            );
          })}
        </div>

        <div className="menu-div">
          <img
            src={menu}
            alt="menu-icon"
            onClick={() => {
              showSideMenu(true);
            }}
          />
        </div>

        {/* <div className="contact-login">
          {websiteInfo.menuButtons.map((links) => {
            return (
              <Link to={`${links.link}`}>
                <h3>{links.name}</h3>
              </Link>
            );
          })}
        </div> */}
      </div>

      <div
        className="side-menu"
        style={
          sideMenu
            ? { transform: "translate(0,0)" }
            : { transform: "translate(100%,0)" }
        }
      >
        {" "}
        <div>
          <div
            className="close"
            onClick={() => {
              showSideMenu(false);
            }}
          >
            <img src={close} alt="" />
          </div>
          {websiteInfo.menuList.map((links) => {
            return (
              <Link
                to={`${links.link}`}
                key={links.name}
                onClick={() => {
                  showSideMenu(false);
                }}
              >
                <h3>{links.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
