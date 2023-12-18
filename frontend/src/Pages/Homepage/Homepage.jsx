import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import { landingPageAbout, landingPageLearning } from "../../Context/Content";
import { Block0 } from "../../Components/Block0/Block0";
import { Block3 } from "../../Components/Block3/Block3";

import { CodeSnippet } from "../../Components/CodeSnippet/CodeSnippet";
import { Block4 } from "../../Components/Block4/Block4";
import { block4CSS, codeSyntax } from "../../Context/TemplateVariable";
import { Block5 } from "../../Components/Block5/Block5";
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
