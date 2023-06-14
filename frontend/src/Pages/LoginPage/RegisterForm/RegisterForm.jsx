import React from "react";
import "./RegisterForm.css";

export const RegisterForm = ({ setPage }) => {
  return (
    <div className="login-form">
      <div className="image-container"></div>
      <div className="form-header">
        {" "}
        <h3>Sign up</h3>
        <small>Register today</small>
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
      <div className="input-section-container">
        <label>Re-Enter Password</label>
        <div className="input-section">
          <input type="text" placeholder="Enter your password" />
          <small> Show</small>
        </div>
      </div>
      <div className="forget-remember-agree-section">
        <div className="agree-section">
          <input type="checkbox" />
          <small>
            I Accept the <span>terms and conditions</span>
          </small>
        </div>
      </div>
      <button className="btn1 login-button">Register</button>
      <button className="btn1 google-sign-button">Sign up with Google</button>
      <small className="sign-up-text">
        Already have an account?{" "}
        <span
          onClick={() => {
            setPage("login");
          }}
        >
          Login
        </span>
      </small>
    </div>
  );
};
