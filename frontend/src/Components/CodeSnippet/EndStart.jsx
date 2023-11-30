import React from "react";

export const EndStart = ({ type, info }) => {
  if (type === "start")
    return (
      <div className="code-snippet-starter">
        <span>export</span> <span>const</span> {info} {" = () => {"}
      </div>
    );
  return (
    <div className="code-ender">
      <span className="empty">a</span> <span> {");"}</span>
      <br />
      <span>{"};"}</span>
    </div>
  );
};
