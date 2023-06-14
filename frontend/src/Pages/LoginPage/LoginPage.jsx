import React from "react";
import { useState } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const LoginPage = () => {
  // loading div
  const [page, setPage] = useState("register");

  return (
    <div className="container">
      {page === "login" && <LoginForm setPage={setPage} />}

      {page === "register" && <RegisterForm setPage={setPage} />}

      {page === "loading" && <div className="register-form">Register</div>}

      {page == "success" && <div className="success-page">Success</div>}
    </div>
  );
};
