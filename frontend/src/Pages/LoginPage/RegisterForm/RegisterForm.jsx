import React from "react";
import "./RegisterForm.css";
import { useState } from "react";

export const RegisterForm = ({ setPage }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="input-section-container">
        <label>Password</label>
        <div className="input-section">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <small
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {" "}
            {showPassword ? "Hide" : "Show"}
          </small>
        </div>
      </div>
      <div className="input-section-container">
        <label>Re-Enter Password</label>
        <div className="input-section">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {" "}
            {showPassword ? "Hide" : "Show"}
          </small>
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
        Already have an account???{" "}
        <span
          onClick={() => {
            setPage("login");
          }}
        >
          Login?
        </span>
      </small>
    </div>
  );
};
