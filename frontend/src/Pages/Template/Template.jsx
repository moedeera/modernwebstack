import { Block3 } from "../../Components/Block3/Block3";
import { CodeBlock } from "../../Components/CodeBlock/CodeBlock";
import { SubBlock0 } from "../../Components/SubBlock0/SubBlock0";
import "./Template.css";

export const Template = () => {
  return (
    <div className="container page">
      <Block3 />
      <CodeBlock />
      <SubBlock0 />
    </div>
  );
};
