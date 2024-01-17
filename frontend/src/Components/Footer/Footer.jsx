import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <div className="footer-container">
        <div className="upper-footer">
          <Link to="/">
            <h4>
              <span>MW</span>Stack
            </h4>
          </Link>
          <div className="upper-footer-section">
            <p>Browse</p>
            <Link to="/">Home</Link>
            <Link to="/">Features</Link>
            <Link to="/">Pricing</Link>
          </div>
          <div className="upper-footer-section">
            <p>Resources</p>
            <Link to="/">Blog</Link>
            <Link to="/">News</Link>
            <Link to="/">Documents</Link>
          </div>
          <div className="upper-footer-section">
            <p>Information</p>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Collaborate</Link>
          </div>
          <div className="upper-footer-section">
            <p>Follow</p>
            <Link to="/">X/twitter</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Dribble</Link>
          </div>
        </div>
        <div className="lower-footer">
          <small>Copyright ©2023 ModernWebStack. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};
