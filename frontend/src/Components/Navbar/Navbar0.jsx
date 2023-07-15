import React from "react";

export const Navbar0 = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <h3>MWS</h3>
        </Link>
      </div>
      <div className="links">
        <div>
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <h3>Portfolio</h3>
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <h3>About</h3>
          </Link>
        </div>
      </div>
      <div className="contact-login">
        <Link to={"/"}>
          <h3>Contact</h3>
        </Link>
      </div>
    </div>
  );
};
