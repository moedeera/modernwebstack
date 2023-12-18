import { CodeSnippet } from "../CodeSnippet/CodeSnippet";
import { codeSyntax, block4CSS } from "../../Context/TemplateVariable";
import "./Block6.css";
import { Block4 } from "../Block4/Block4";

export const Block6 = () => {
  return (
    <div className="block-6-container">
      <div className="title-container">
        {" "}
        <small>Start today</small>
        <h3>Up your game</h3>
      </div>

      <div className="block-show">
        <CodeSnippet code={codeSyntax} cssInfo={block4CSS} />
        <Block4 />
      </div>
    </div>
  );
};
