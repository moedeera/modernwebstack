import React, { useState } from "react";
import "./CodeSnippet.css";
import { ImportsMapper } from "./SubFunctions/ImportsMapper";
import { EndStart } from "./SubFunctions/EndStart";
import { NodeMapper } from "./SubFunctions/NodeMapper";
import CssCodeFormatter from "./SubFunctions/CSSMapper";
import { useEffect } from "react";
import { cssSyntax, codeSyntax } from "../../Context/TemplateVariable";

export const CodeSnippet = ({ code, cssInfo }) => {
  const [view, setView] = useState("JSX");
  const [copyState, setCopyState] = useState("Copy");

  const [css, setCss] = useState(cssSyntax);
  const [codeSnippet, setCodeSnippet] = useState(codeSyntax);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    // Set copyState to "copied" for 2 seconds
    setCopyState("Copied");
    setTimeout(() => {
      setCopyState("Copy");
    }, 2000);
  };

  useEffect(() => {
    if (code) {
      setCodeSnippet(code);
    }
    if (cssInfo) {
      setCss(cssInfo);
    }
  }, []);

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
          <CssCodeFormatter cssCode={css} />
        </div>
      )}
    </div>
  );
};
