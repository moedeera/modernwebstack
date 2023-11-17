// import React, { useContext } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import { siteContext } from "../../Context/Context";
// import menu from "./menu.png";
// import close from "./close.png";
// import { useState } from "react";

// export const Navbar = () => {
//   const { websiteInfo } = useContext(siteContext);
//   console.log(websiteInfo.menuList);

//   const [sideMenu, showSideMenu] = useState(false);

//   return (
//     <div className="container-small">
//       <div className="navbar">
//         <div className="logo">
//           <Link to={"/"}>
//             <h3>MWS</h3>
//           </Link>
//         </div>
//         <div className="links">
//           {websiteInfo.menuList.map((links) => {
//             return (
//               <Link to={`${links.link}`} key={links.name}>
//                 <p>{links.name}</p>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="menu-div">
//           <img
//             src={menu}
//             alt="menu-icon"
//             onClick={() => {
//               showSideMenu(true);
//             }}
//           />
//         </div>

//         {/* <div className="contact-login">
//           {websiteInfo.menuButtons.map((links) => {
//             return (
//               <Link to={`${links.link}`}>
//                 <h3>{links.name}</h3>
//               </Link>
//             );
//           })}
//         </div> */}
//       </div>

//       <div
//         className="side-menu"
//         style={
//           sideMenu
//             ? { transform: "translate(0,0)" }
//             : { transform: "translate(100%,0)" }
//         }
//       >
//         {" "}
//         <div>
//           <div
//             className="close"
//             onClick={() => {
//               showSideMenu(false);
//             }}
//           >
//             <img src={close} alt="" />
//           </div>
//           {websiteInfo.menuList.map((links) => {
//             return (
//               <Link
//                 to={`${links.link}`}
//                 key={links.name}
//                 onClick={() => {
//                   showSideMenu(false);
//                 }}
//               >
//                 <h3>{links.name}</h3>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Templates", link: "/" },
    { id: 3, name: "Docs", link: "/" },
    { id: 4, name: "About", link: "/" },
  ];
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        <span>Modern</span>
        <br />
        WebStack
      </Link>
      <div className="navbar-links-lg">
        {menu.map((item) => (
          <Link key={item.id} to="/">
            {item.name}
          </Link>
        ))}
      </div>
      <Link to="/" className="btn btn-nav">
        Login
      </Link>
      <div className="navbar-menu-button">
        <div className="bar-main bar-top"></div>
        <div className="bar-main bar-bottom"></div>
      </div>
    </div>
  );
};
