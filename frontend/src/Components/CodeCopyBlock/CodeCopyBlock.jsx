import React from "react";

import {
  CopyBlock,
  dracula,
  a11yLight,
  atomOneLight,
  atomOneDark,
  monokaiSublime,
  nord,
  solarizedDark,
  solarizedLight,
} from "react-code-blocks";

const CodeEditorReactCodeBlocks = () => {
  const styles = [
    { name: "dracula", style: dracula },
    { name: "a11yLight", style: a11yLight },
    { name: "atomOneLight", style: atomOneLight },
    { name: "atomOneDark", style: atomOneDark },
    { name: "monokaiSublime", style: monokaiSublime },
    { name: "nord", style: nord },
    { name: "solarizedDark", style: solarizedDark },
    { name: "solarizedLight", style: solarizedLight },
  ];

  const codeString = `function MyCoolCodeBlock({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}`;

  return (
    <div className="code-editor">
      {styles.map((styleObj, index) => (
        <div key={index}>
          <h3>
            {index + 1}. {styleObj.name}
          </h3>
          <CopyBlock
            className="highlight"
            text={codeString}
            language="javascript"
            showLineNumbers={true}
            theme={styleObj.style}
            wrapLines={true}
            codeBlock
          />
        </div>
      ))}
    </div>
  );
};

export default CodeEditorReactCodeBlocks;
