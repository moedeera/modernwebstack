import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";

export const Homepage = () => {
  return (
    <div className="container">
      <Landing />
      <Block1 />
    </div>
  );
};
