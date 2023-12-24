import "./CodeBlock.css";
import { code } from "./SampleCode/CodeSample";
import { ImportBlock } from "./SubFunctions/ImportCode/ImportBlock";
import { Opener } from "./SubFunctions/OpenerLine/Opener";

export const CodeBlock = () => {
  const code1 = `
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
`;
  return (
    <div className="code-sample-container">
      <ImportBlock code={code} />
      <div className="section-separation"></div>
      <Opener code={code} />
      <div className="code-sample-line">
        <span>{"};"}</span>
      </div>
    </div>
  );
};
