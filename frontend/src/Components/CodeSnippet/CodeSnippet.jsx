import React, { useState } from "react";
import "./CodeSnippet.css";
import { ImportsMapper } from "./SubFunctions/ImportsMapper";
import { EndStart } from "./SubFunctions/EndStart";
import { NodeMapper } from "./SubFunctions/NodeMapper";
import CssCodeFormatter from "./SubFunctions/CSSMapper";

export const CodeSnippet = ({ code }) => {
  const [view, setView] = useState("JSX");
  const [copyState, setCopyState] = useState("Copy");

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    // Set copyState to "copied" for 2 seconds
    setCopyState("Copied");
    setTimeout(() => {
      setCopyState("Copy");
    }, 2000);
  };

  return (
    <div className="code-snippet-container">
      <div className="code-snippet-options">
        <div
          className={view === "JSX" ? "view-selected" : ""}
          onClick={() => {
            setView("JSX");
          }}
        >
          JSX
        </div>
        <div
          className={view === "css" ? "view-selected" : ""}
          onClick={() => {
            setView("css");
          }}
        >
          CSS
        </div>
        <div
          className="code-snippet-clipboard"
          onClick={() => {
            copyToClipboard("Hello");
          }}
        >
          {copyState}
        </div>
      </div>
      {view === "JSX" && (
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
      )}
      {view === "css" && (
        <div className="code-snippet-codeblock">
          <CssCodeFormatter
            cssCode={`.code-snippet-container {
  border: none;
  height: 40vh;
  background-color: #1e152a;
  margin-bottom: 100px;
  width: 95%;
  max-width: 700px;
  position: relative;
  border-radius: 5px;
  overflow-y: scroll;
}`}
          />
        </div>
      )}
    </div>
  );
};
