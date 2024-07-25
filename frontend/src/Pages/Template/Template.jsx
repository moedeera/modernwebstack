import { Block3 } from "../../Components/Block3/Block3";
import { CodeBlock } from "../../Components/CodeBlock/CodeBlock";

import { SubBlock0 } from "../../Components/SubBlock0/SubBlock0";
import { TemplatePageLanding } from "../../Components/TemplatePageLanding/TemplatePageLanding";
import "./Template.css";

export const Template = () => {
  return (
    <div className="container homepage">
      <TemplatePageLanding />
      <Block3 />
      <div className="main-code-block">
        <CodeBlock />
      </div>
      <SubBlock0 />
    </div>
  );
};
