import React from "react";

const CssCodeFormatter = ({ cssCode }) => {
  // Split the CSS code into lines
  const lines = cssCode.split("\n");

  // Process each line of the CSS code
  const formattedCode = lines.map((line, index) => {
    // Trim the line to handle leading/trailing whitespaces
    const trimmedLine = line.trim();

    if (index === 0) {
      // The first line contains the selector
      return (
        <div key={index} style={{ marginBottom: "5px" }}>
          <span>{trimmedLine}</span>
        </div>
      );
    } else if (trimmedLine === "}") {
      // Closing bracket in a separate line
      return (
        <div key={index}>
          <span>{trimmedLine}</span>
        </div>
      );
    } else {
      // Property and value pairs
      const [property, value] = trimmedLine.split(":");

      if (property && value) {
        return (
          <div key={index} style={{ lineHeight: "1.5em" }}>
            <span
              style={{
                color: "steelblue",
                marginLeft: "5px",
              }}
            >
              {property.trim()}:
            </span>
            <span style={{ color: "lightgreen" }}>{value.trim()}</span>
            <br />
          </div>
        );
      } else {
        // Handle unexpected format
        return null;
      }
    }
  });

  return <div>{formattedCode}</div>;
};

export default CssCodeFormatter;
