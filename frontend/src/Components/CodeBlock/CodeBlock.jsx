import "./CodeBlock.css";
import { code } from "./SampleCode/CodeSample";
import { ImportBlock } from "./SubFunctions/ImportCode/ImportBlock";
import { parseHtmlToNodes } from "./SubFunctions/NodesCode/NodeBlock";
import { Opener } from "./SubFunctions/OpenerLine/Opener";

export const CodeBlock = () => {
  return (
    <div className="code-sample-container">
      <ImportBlock code={code} />
      <div className="section-separation"></div>
      <Opener code={code} />
      <div className="code-sample-line"></div>
      <div className="code-sample-line"></div>
      <div className="code-sample-line"></div>
      <div className="code-sample-line"></div>
      <div className="code-sample-line">
        <span>{"};"}</span>
      </div>
    </div>
  );
};
