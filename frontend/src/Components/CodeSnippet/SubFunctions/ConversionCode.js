const parseJSX = (jsxCode) => {
  // Extract imports
  const importRegex =
    /import\s+(?:(?:{([^}]+)})\s+from\s+"([^"]+)")|([^\s]+)\s+from\s+"([^"]+)";/g;
  const imports = [];
  const legacyImports = [];
  let match;
  while ((match = importRegex.exec(jsxCode)) !== null) {
    const [, namedImports, from, defaultImport, defaultFrom] = match;
    if (namedImports) {
      const names = namedImports.split(",").map((name) => name.trim());
      imports.push({ names, from });
    } else {
      legacyImports.push(defaultImport || defaultFrom);
    }
  }

  // Extract component name
  const nameRegex = /export const (\w+) = \(\) => {/g;
  const [, componentName] = nameRegex.exec(jsxCode);

  // Extract useState initialization
  const useStateRegex = /const \[([^\]]+)\] = useState\((\{[^}]+\})\);/g;
  const [, stateName, stateValue] = useStateRegex.exec(jsxCode);

  // Extract useEffect
  const useEffectRegex = /useEffect\(\(\) => {([^}]+)}, \[\]\);/g;
  const [, useEffectCode] = useEffectRegex.exec(jsxCode);

  // Extract function1
  const function1Regex = /const function1 = \(\) => {([^}]+)\};/g;
  const [, function1Code] = function1Regex.exec(jsxCode);

  // Extract JSX nodes
  const jsxNodesRegex = /<(\w+)[^>]*>([^<]*)<\/\1>/g;
  const nodes = [];
  let jsxMatch;
  while ((jsxMatch = jsxNodesRegex.exec(jsxCode)) !== null) {
    const [, type, text] = jsxMatch;
    nodes.push({ type, text });
  }

  // Construct the data object
  const data = {
    imports,
    legacyImports,
    functions: [
      { type: "useState", code: stateValue, name: stateName },
      { type: "useEffect", code: useEffectCode },
      { type: "callback", code: function1Code },
    ],
    name: componentName,
    nodes,
  };

  return data;
};

// Example usage
const jsxCode = `import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Test = () => {

  

  return (
    <div className="test-container">
      <div className="test-text" onClick={function1}>
        <h3>Welcome</h3>
        <p>
          Our AI engine gives you everything you need to create stunning designs
        </p>
        <Link to={"/"} className="btn">
          More
        </Link>
      </div>
      <div className="test-image">
        <h3>Image 1 </h3>
        <img src="" alt="" />
      </div>
    </div>
  );
};
`;
