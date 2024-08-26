import React from "react";
import "./CodeEditor.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coy,
  dark,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  coyWithoutShadows,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  ghcolors,
  gruvboxDark,
  gruvboxLight,
  holiTheme,
  hopscotch,
  lucario,
  materialDark,
  materialLight,
  materialOceanic,
  nightOwl,
  oneDark,
  oneLight,
  pojoaque,
  shadesOfPurple,
  solarizedDarkAtom,
  synthwave84,
  vs,
  vscDarkPlus,
  xonokai,
  zTouch,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeEditor = () => {
  const styles = [
    { name: "coy", style: coy },
    { name: "dark", style: dark },
    { name: "funky", style: funky },
    { name: "okaidia", style: okaidia },
    { name: "solarizedlight", style: solarizedlight },
    { name: "tomorrow", style: tomorrow },
    { name: "twilight", style: twilight },
    { name: "prism", style: prism },
    { name: "a11yDark", style: a11yDark },
    { name: "atomDark", style: atomDark },
    {
      name: "base16AteliersulphurpoolLight",
      style: base16AteliersulphurpoolLight,
    },
    { name: "cb", style: cb },
    { name: "coldarkCold", style: coldarkCold },
    { name: "coldarkDark", style: coldarkDark },
    { name: "coyWithoutShadows", style: coyWithoutShadows },
    { name: "duotoneDark", style: duotoneDark },
    { name: "duotoneEarth", style: duotoneEarth },
    { name: "duotoneForest", style: duotoneForest },
    { name: "duotoneLight", style: duotoneLight },
    { name: "duotoneSea", style: duotoneSea },
    { name: "duotoneSpace", style: duotoneSpace },
    { name: "ghcolors", style: ghcolors },
    { name: "gruvboxDark", style: gruvboxDark },
    { name: "gruvboxLight", style: gruvboxLight },
    { name: "holiTheme", style: holiTheme },
    { name: "hopscotch", style: hopscotch },
    { name: "lucario", style: lucario },
    { name: "materialDark", style: materialDark },
    { name: "materialLight", style: materialLight },
    { name: "materialOceanic", style: materialOceanic },
    { name: "nightOwl", style: nightOwl },
    { name: "oneDark", style: oneDark },
    { name: "oneLight", style: oneLight },
    { name: "pojoaque", style: pojoaque },
    { name: "shadesOfPurple", style: shadesOfPurple },
    { name: "solarizedDarkAtom", style: solarizedDarkAtom },
    { name: "synthwave84", style: synthwave84 },
    { name: "vs", style: vs },
    { name: "vscDarkPlus", style: vscDarkPlus },
    { name: "xonokai", style: xonokai },
    { name: "zTouch", style: zTouch },
  ];

  const codeString = `function MyCoolCodeBlock({ code, language, showLineNumbers }) {
  return (
  <>
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
    <h1>Count is at {data.count}</h1>
    </>
  );
}`;

  return (
    <div className="code-editor">
      {styles.map((styleObj, index) => (
        <div key={index}>
          <h3>
            {index + 1}. "{styleObj.name}"
          </h3>
          <SyntaxHighlighter
            className="highlight"
            language="javascript"
            style={styleObj.style}
            showLineNumbers={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
};

export default CodeEditor;
