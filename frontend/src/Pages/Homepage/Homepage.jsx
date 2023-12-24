import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import { landingPageAbout, landingPageLearning } from "../../Context/Content";
import { Block3 } from "../../Components/Block3/Block3";
import { Block6 } from "../../Components/Block6/Block6";
import { Block8 } from "../../Components/Block8/Block8";
import { SubBlock0 } from "../../Components/SubBlock0/SubBlock0";
import { CodeBlock } from "../../Components/CodeBlock/CodeBlock";

export const Homepage = () => {
  return (
    <div className="container">
      {/* <CodeBlock /> */}
      <Landing />
      <Block1 data={landingPageAbout} />
      <Block1 data={landingPageLearning} />
      <Block3 />
      <Block6 />
      <Block8 />
      <SubBlock0 />
    </div>
  );
};
