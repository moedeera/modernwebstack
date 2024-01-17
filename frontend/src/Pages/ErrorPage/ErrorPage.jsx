import React from "react";

export const ErrorPage = () => {
  return (
    <div
      className="error-page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        marginTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
      <p
        style={{
          width: "95%",
          maxWidth: "500px",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Oops! The page you are looking for may be in another directory. Please
        check the URL or navigate back to the home page.
      </p>
    </div>
  );
};
