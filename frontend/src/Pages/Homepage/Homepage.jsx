import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import { landingPageAbout, landingPageLearning } from "../../Context/Content";
import { Block3 } from "../../Components/Block3/Block3";
import { Block6 } from "../../Components/Block6/Block6";

export const Homepage = () => {
  return (
    <div className="container">
      <Landing />
      <Block1 data={landingPageAbout} />
      <Block1 data={landingPageLearning} />
      <Block3 />
      <Block6 />
    </div>
  );
};
