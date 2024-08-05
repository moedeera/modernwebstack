import React from "react";
import "./Showcase.css";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import DemoComponent1 from "./DemoComponent1";
import DemoComponent2 from "./DemoComponent2";
import DemoComponent3 from "./DemoComponent3";
import { codeSample, codeSampleB } from "../CodeBlock/SampleCode/CodeSample";

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div className="showcase-component-container">
        <div className="showcase-conveyor-built">
          {" "}
          <div className="showcase-component" id="first-scc">
            <DemoComponent1 />
          </div>
          <div className="showcase-component" id="second-scc">
            <DemoComponent2 />
          </div>
          <div className="showcase-component" id="third-scc">
            <DemoComponent3 />
          </div>
        </div>
      </div>
      <div className="showcase-component-code">
        {/* <CodeBlock codeString={codeSample} /> */}
        <CodeBlock codeString={codeSampleB} />
      </div>
    </div>
  );
};

export default Showcase;
