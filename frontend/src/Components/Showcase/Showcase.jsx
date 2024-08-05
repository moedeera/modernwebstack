import React from "react";
import "./Showcase.css";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import DemoComponent1 from "./DemoComponent1";

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
            <DemoComponent1 />
          </div>
          <div className="showcase-component" id="third-scc">
            <DemoComponent1 />
          </div>
        </div>
      </div>
      <div className="showcase-component-code">
        <CodeBlock />
      </div>
    </div>
  );
};

export default Showcase;
