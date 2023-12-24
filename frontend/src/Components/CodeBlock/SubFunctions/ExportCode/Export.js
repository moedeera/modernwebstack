function parseExportedComponent(code) {
  // Find the first occurrence of "export const"
  const exportConstIndex = code.indexOf("export const");

  if (exportConstIndex === -1) return null; // Return null if "export const" is not found

  // Extract the component declaration code starting from "export const"
  const declarationStart = code.substring(exportConstIndex);

  // Use regex to match the pattern "export const ComponentName = (props) =>"
  const match = declarationStart.match(/export const (\w+)\s*=\s*\(([^)]*)\)/);

  if (match) {
    const [_, name, propsString] = match; // Destructure the match results

    // Split the props by comma and trim each one
    const props = propsString.split(",").map((prop) => prop.trim());

    return { name, props };
  } else {
    return null; // Return null if the pattern is not matched
  }
}

// String literal input
const code = `
  import { useEffect, useState } from "react";
  export const CodeSample = ({data, info}) => {
  `;

// Parsing the input
// const exported = parseExportedComponent(code);
// console.log(exported);

export { parseExportedComponent };
