import React from "react";
import "./LoginForm.css";

export const LoginForm = ({ setPage }) => {
  return (
    <div className="login-form">
      <div className="image-container"></div>
      <div className="form-header">
        {" "}
        <h3>Login</h3>
        <small>Welcome back</small>
        <div className="input-section-container">
          <label>Email</label>
          <div className="input-section">
            <input type="text" placeholder="Enter your email" />
          </div>
        </div>
      </div>

      <div className="input-section-container">
        <label>Password</label>
        <div className="input-section">
          <input type="text" placeholder="Enter your password" />
          <small> Show</small>
        </div>
      </div>
      <div className="forget-remember-section">
        <div className="remember-section">
          <input type="checkbox" />
          <small>Keep me signed in</small>
        </div>
        <div className="forget-section">
          <small>Forgot Password? </small>
        </div>
      </div>
      <button className="btn1 login-button">Sign in</button>
      <button className="btn1 google-sign-button">Sign in with Google</button>
      <small className="sign-up-text">
        Don't have an account?{" "}
        <span
          onClick={() => {
            setPage("register");
          }}
        >
          Sign Up
        </span>
      </small>
    </div>
  );
};
