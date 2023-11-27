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
