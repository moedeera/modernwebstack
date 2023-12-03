export const formatJSXString = (jsxString) => {
  // A simple function to create a span with specific styles
  const createSpan = (content, style) =>
    `<span style="${style}">${content}</span>`;

  // Styles for different elements
  const styles = {
    root: "color: lightblue;", // Style for root elements
    nested: "color: white; margin-left: 5px;", // Style for nested elements
    text: "color: white;", // Style for text
  };

  // Split the string by lines to process each line
  let lines = jsxString
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);

  // Process each line and wrap elements in spans with styles
  let formattedLines = lines.map((line) => {
    if (line.startsWith("<div") || line.startsWith("</div>")) {
      return createSpan(line, styles.root);
    } else if (line.startsWith("<h3") || line.startsWith("<p")) {
      return createSpan(line, styles.nested);
    } else {
      // Text content
      return createSpan(line, styles.text);
    }
  });

  // Join the lines back together
  return <>{`<div class="code-snippet">${formattedLines.join("\n")}</div>`}</>;
};
