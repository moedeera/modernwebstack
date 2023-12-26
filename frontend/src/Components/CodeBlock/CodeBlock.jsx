import { useState } from "react";
import "./CodeBlock.css";
import { ImportBlock } from "./SubFunctions/ImportCode/ImportBlock";
import { NodeCreator } from "./SubFunctions/NodesCode/NodeCreator";
import { Opener } from "./SubFunctions/OpenerLine/Opener";
import { codeSample } from "./SampleCode/CodeSample";
import { useEffect } from "react";
export const CodeBlock = ({ codeString }) => {
  const [code, setCode] = useState(codeSample);

  useEffect(() => {
    if (codeString) {
      setCode(codeString);
    }
  }, []);
  return (
    <div className="code-sample-container">
      <ImportBlock code={code} />
      <div className="section-separation"></div>
      <Opener code={code} />
      <NodeCreator code={code} />
      <div className="code-sample-line">
        <span>{"};"}</span>
      </div>
    </div>
  );
};
