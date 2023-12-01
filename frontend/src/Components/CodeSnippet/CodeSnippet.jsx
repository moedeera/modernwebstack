import React, { useState } from "react";
import "./CodeSnippet.css";
import { ImportsMapper } from "./SubFunctions/ImportsMapper";
import { EndStart } from "./SubFunctions/EndStart";
import { NodeMapper } from "./SubFunctions/NodeMapper";

export const CodeSnippet = ({ code }) => {
  const [codeSnippet, setCodeSnippet] = useState({
    imports: [
      { name: "React", from: "react", default: true },
      { name: "Link", from: "react-router-dom", default: false },
    ],
    legacyImports: ["react", "useEffect", "useState"],
    functions: [
      {
        type: "useState",
        code: `{
  id: 0,
  name: "John",
  info: [{ age: "27" }, { gender: "male" }],
  registered: false,
}`,
      },
      { type: "useEffect", code: ` console.log("hello");`, dep: [] },
      {
        type: "callback",
        code: `let x = 10;
  console.log("hello");
  return x;`,
        input: [],
      },
    ],
    name: "Test",
    nodes: [
      {
        className: "test-text",
        type: "div",
        internal: [
          {
            type: "h3",
            tags: [],
            className: "",
            text: "Welcome",
            internal: [],
            functions: [],
          },
          {
            type: "p",
            tags: [],
            className: "",
            text: " Our AI engine gives you everything you need to create stunning designs",
            functions: [],
          },
          {
            type: "Link",
            tags: [{ label: "to", data: `"/"` }],
            className: "btn",
            text: "More",
          },
        ],
      },
      {
        className: "test-image",
        type: "div",
        internal: [
          {
            type: "h3",
            tags: [],
            className: "",
            text: "Image 1",
            internal: [],
            functions: [],
          },
          {
            type: "img",
            tags: [
              { label: "src", data: `"./img1"` },
              { label: "alt", data: `"icon"` },
            ],
            className: "",
            text: " Our AI engine gives you everything you need to create stunning designs",
            functions: [],
          },
        ],
      },
    ],
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
        {codeSnippet.nodes.map((node, index) => (
          <div key={index}>
            <NodeMapper node={node} />
          </div>
        ))}
        <EndStart type={"end"} />
      </div>
    </div>
  );
};
