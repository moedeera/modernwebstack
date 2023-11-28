import React from "react";
import "./Homepage.css";
import { Landing } from "../../Components/Landing/Landing";
import { Block1 } from "../../Components/Block1/Block1";
import { landingPageAbout, landingPageLearning } from "../../Context/Content";
import { Block0 } from "../../Components/Block0/Block0";
import { Block3 } from "../../Components/Block3/Block3";
import CodeEditor from "../../Components/CodeEditor/CodeEditor";

export const Homepage = () => {
  return (
    <div className="container">
      <Landing />
      <Block1 data={landingPageAbout} />
      <Block1 data={landingPageLearning} />
      <Block3 />
      {/* <Block0 /> */}

      <CodeEditor />
      <CodeEditor />
    </div>
  );
};
