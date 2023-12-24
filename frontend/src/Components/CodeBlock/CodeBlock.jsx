import "./CodeBlock.css";
import { code } from "./SampleCode/CodeSample";
import { ImportBlock } from "./SubFunctions/ImportCode/ImportBlock";

export const CodeBlock = () => {
  const code1 = `
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
`;
  return (
    <div className="code-sample-container">
      <ImportBlock code={code} />
      <div className="section-separation"></div>
      <div className="code-sample-line">
        <span className="export-line-start-end">export </span>
        <span className="export-line-const">const </span>
        <span className="export-line-name">CodeSample</span>
        <span>{" = "}</span>
        <span className="import-line-bracket">{"("}</span>
        <span className="export-line-input">{`{ data }`}</span>
        <span className="import-line-bracket">{")"}</span>
        <span>{" => "}</span>
        <span>{"{"}</span>
      </div>
    </div>
  );
};
