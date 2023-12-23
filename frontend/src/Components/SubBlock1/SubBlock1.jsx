import "./SubBlock1.css";

import gear from "./gear.png";
import down from "./down.png";
import { ImportsMapper } from "../CodeSnippet/SubFunctions/ImportsMapper";

import { codeSyntax2, cssSyntax } from "../../Context/TemplateVariable";
import { EndStart } from "../CodeSnippet/SubFunctions/EndStart";
import { NodeMapper } from "../CodeSnippet/SubFunctions/NodeMapper";
import CssCodeFormatter from "../CodeSnippet/SubFunctions/CSSMapper";

export const SubBlock1 = () => {
  return (
    <div className="sub-block-1-container">
      <div className="sub-block-1-jsx">
        <div className="sb1-upper-portion">
          <div className="sb1-label">
            <img src={gear} alt="" srcset="" />
            JSX
          </div>
          <div className="sb1-icon">
            <img src={down} alt="" srcset="" />
          </div>
        </div>
        <div className="sb1-code-container ">
          {/* <ImportsMapper imports={codeSyntax.imports} /> */}
          <EndStart type={"start"} info={codeSyntax2.name} />
          {codeSyntax2.nodes.map((node, index) => (
            <div key={index}>
              <NodeMapper node={node} level={1} />
            </div>
          ))}
        </div>
      </div>
      <div className="sub-block-1-css">
        {" "}
        <div className="sb1-upper-portion">
          <div className="sb1-label">
            <img src={gear} alt="" srcset="" />
            CSS
          </div>
          <div className="sb1-icon">
            <img src={down} alt="" srcset="" />
          </div>
        </div>
        <div className="code-snippet-codeblock">
          <CssCodeFormatter cssCode={cssSyntax} />
        </div>
      </div>
      <div className="sub-block-1-files">
        {" "}
        <div className="sb1-upper-portion">
          <div className="sb1-label">
            <img src={gear} alt="" srcset="" />
            JSX
          </div>
          <div className="sb1-icon">
            <img src={down} alt="" srcset="" />
          </div>
        </div>
        <div className="sb1-code-container">
          <ImportsMapper imports={codeSyntax2.imports} />
        </div>
      </div>

      <div className="sub-block-1-image"></div>
    </div>
  );
};
