import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginForm = ({ setPage }) => {
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <h3>Login </h3>
          <small>
            Don't have an account?{" "}
            <Link className="b" to={"/"}>
              Create a new one
            </Link>
          </small>
          <p>Email</p>
          <input type="text" placeholder="Enter your email" />
          <p>Password</p>
          <input type="password" placeholder="Enter Your password" />
          <button className="btn btn-primary">Login</button>
        </div>
        {/* <div className="login-form-image">
          <div className="white-overlay">
            <h1>
              Start <br /> Immersing yourself in a{" "}
              <span className="title-span">Story</span>
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};
