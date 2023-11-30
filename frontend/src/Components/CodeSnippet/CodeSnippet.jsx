import React, { useState } from "react";
import "./CodeSnippet.css";
import { ImportsMapper } from "./importsMapper";
import { EndStart } from "./EndStart";

export const CodeSnippet = ({ code }) => {
  const [codeSnippet, setCodeSnippet] = useState({
    imports: [
      { name: "React", from: "react", default: true },
      { name: "Link", from: "react-router-dom", default: false },
    ],
    name: "Test",
    nodes: [],
  });
  return (
    <div className="code-snippet-container">
      <div className="code-snippet-options">
        <div className="code-snippet-jsx">JSX</div>
        <div className="code-snippet-css">CSS</div>
        <div className="code-snippet-clipboard">Copy</div>
      </div>
      <div className="code-snippet-codeblock">
        <ImportsMapper imports={codeSnippet.imports} />
        <EndStart type={"start"} info={codeSnippet.name} />
        <EndStart type={"end"} />
      </div>
    </div>
  );
};
