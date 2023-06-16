import React from "react";
import "./LoginForm.css";
import { useState } from "react";

export const LoginForm = ({ setPage }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
