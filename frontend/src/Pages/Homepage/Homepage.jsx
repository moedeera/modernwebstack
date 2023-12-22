import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import { landingPageAbout, landingPageLearning } from "../../Context/Content";
import { Block3 } from "../../Components/Block3/Block3";
import { Block6 } from "../../Components/Block6/Block6";
import { Block7 } from "../../Components/Block7/Block7";
import { Block8 } from "../../Components/Block8/Block8";

export const Homepage = () => {
  return (
    <div className="container">
      <Landing />
      <Block1 data={landingPageAbout} />
      <Block1 data={landingPageLearning} />
      <Block3 />
      <Block6 />
      <Block8 />
    </div>
  );
};
