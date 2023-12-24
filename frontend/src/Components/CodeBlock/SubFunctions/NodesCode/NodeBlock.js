function parseHtmlToNodes(htmlString) {
  // Helper function to process attributes string into objects
  const processAttributes = (attributeString) => {
    return attributeString
      .split(/\s+/)
      .filter(Boolean)
      .map((attr) => {
        const [type, ...values] = attr.split("=");
        const value = values.join("=").replace(/['"{}`]/g, ""); // Remove quotes and braces
        return { type, value: `{${value}}` };
      });
  };

  // Helper function to create node object
  const createNode = (tagString) => {
    const [tag, ...attributes] = tagString.trim().split(/\s+/);
    return {
      prop: tag.toLowerCase(),
      overflow: tagString.length > 40,
      attributes: processAttributes(attributes.join(" ")),
      children: [],
    };
  };

  // Initialize variables
  let currentPos = 0;
  let char;
  let nodes = []; // This will hold the final nodes structure
  let stack = []; // Use a stack to manage hierarchy

  while (currentPos < htmlString.length) {
    char = htmlString[currentPos];

    if (char === "<" && htmlString[currentPos + 1] !== "/") {
      // Opening tag
      let endPos = htmlString.indexOf(">", currentPos);
      if (endPos === -1) break; // No closing '>', invalid HTML

      let tagContent = htmlString.substring(currentPos + 1, endPos);
      let node = createNode(tagContent);

      if (stack.length === 0) {
        // Root node
        nodes.push(node);
      } else {
        // It's a child of the node on top of the stack
        stack[stack.length - 1].children.push(node);
      }

      // Push the node onto the stack
      stack.push(node);
      currentPos = endPos;
    } else if (char === "<" && htmlString[currentPos + 1] === "/") {
      // Closing tag
      stack.pop(); // Pop from stack as we've closed the most recent node
      currentPos = htmlString.indexOf(">", currentPos);
    }

    // Move to the next character
    if (currentPos !== -1) currentPos++;
  }

  return nodes;
}

// Example usage:
const htmlString = `<div className="parent" onClick={function1}><div className="child"></div><div className="sibling"></div></div><div className="parent"></div>`;
const nodes = parseHtmlToNodes(htmlString);
console.log(nodes);

export { parseHtmlToNodes };
