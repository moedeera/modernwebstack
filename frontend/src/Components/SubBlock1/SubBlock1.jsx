import "./SubBlock1.css";

import gear from "./gear2.png";
import down from "./down.png";
import { ImportsMapper } from "../CodeSnippet/SubFunctions/ImportsMapper";

import { codeSyntax2, cssSyntax } from "../../Context/TemplateVariable";

import CssCodeFormatter from "../CodeSnippet/SubFunctions/CSSMapper";
import { CodeBlock } from "../CodeBlock/CodeBlock";

export const SubBlock1 = () => {
  return (
    <div className="sub-block-1-container">
      <div className="sub-block-1-jsx">
        <CodeBlock />
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

      <div className="sub-block-1-image"></div>
    </div>
  );
};
