import { Block3 } from "../../Components/Block3/Block3";
import { Block6 } from "../../Components/Block6/Block6";
import { Block8 } from "../../Components/Block8/Block8";
import { CodeBlock } from "../../Components/CodeBlock/CodeBlock";
import "./Docs.css";

export const Docs = () => {
  return (
    <div className="container page">
      <Block6 />
      <Block8 />
      <div className="page-code-container">
        <CodeBlock />
      </div>
    </div>
  );
};
