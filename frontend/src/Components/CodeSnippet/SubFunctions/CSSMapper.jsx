import React from "react";

const CssCodeFormatter = ({ cssCode }) => {
  const lines = cssCode.split("\n");

  const formattedCode = lines.map((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine !== "") {
      const isSelectorLine = trimmedLine.endsWith("{");

      if (isSelectorLine) {
        const selectorName = trimmedLine.replace(/\s*{.*$/, "").trim();

        return (
          <div key={index} style={{ marginBottom: "5px" }}>
            <span style={{ color: "lightblue" }}>{selectorName}</span>
            <span>{trimmedLine.substring(selectorName.length)}</span>
          </div>
        );
      } else {
        return (
          <div key={index} style={{ marginBottom: "5px" }}>
            <span style={{ marginLeft: "10px" }}>{trimmedLine}</span>
          </div>
        );
      }
    }

    return null;
  });

  return <div>{formattedCode}</div>;
};

export default CssCodeFormatter;
