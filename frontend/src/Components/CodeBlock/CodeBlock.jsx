import "./CodeBlock.css";
import { code } from "./SampleCode/CodeSample";
import { ImportBlock } from "./SubFunctions/ImportCode/ImportBlock";
import { NodeCreator } from "./SubFunctions/NodesCode/NodeCreator";
import { Opener } from "./SubFunctions/OpenerLine/Opener";

export const CodeBlock = () => {
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
