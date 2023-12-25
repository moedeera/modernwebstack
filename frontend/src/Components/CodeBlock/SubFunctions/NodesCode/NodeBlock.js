function parseHtmlToNodes(htmlString) {
  // Filter the input to include only the relevant HTML part
  const openingTagMatch = htmlString.match(/<\w+/); // Find the first opening tag like <div
  if (!openingTagMatch) return []; // If no opening tag is found, return empty array

  const openingTagIndex = openingTagMatch.index; // Index of first opening tag
  const tagName = openingTagMatch[0].substring(1); // Extract tag name without "<"

  // Find the last closing tag of the same type
  const closingTag = `</${tagName}>`;
  const closingTagIndex = htmlString.lastIndexOf(closingTag);

  if (closingTagIndex === -1) return []; // If no corresponding closing tag is found, return empty

  // Adjust htmlString to only include the desired segment
  htmlString = htmlString.substring(
    openingTagIndex,
    closingTagIndex + closingTag.length
  );

  // Helper function to process attributes string into objects
  const processAttributes = (attributeString) => {
    return attributeString
      .split(/\s+/)
      .filter(Boolean)
      .map((attr) => {
        const [type, ...values] = attr.split("=");
        const value = values.join("="); // Keep the entire attribute value as-is
        return { type, value };
      });
  };

  // Helper function to create node object
  const createNode = (tagString, isText = false) => {
    if (isText) {
      return { prop: "text", text: tagString };
    } else {
      const [tag, ...attributes] = tagString.trim().split(/\s+/);
      return {
        prop: tag.toLowerCase(),
        overflow: tagString.length > 40,
        attributes: processAttributes(attributes.join(" ")),
        children: [],
      };
    }
  };

  let currentPos = 0;
  let nodes = []; // This will hold the final nodes structure
  let stack = [nodes]; // Use a stack to manage hierarchy

  while (currentPos < htmlString.length) {
    let nextLessThan = htmlString.indexOf("<", currentPos);
    let nextGreaterThan = htmlString.indexOf(">", currentPos);

    if (nextLessThan > -1 && nextGreaterThan > -1) {
      // Capture text nodes
      if (nextLessThan > currentPos) {
        let text = htmlString.substring(currentPos, nextLessThan).trim();
        if (text.length > 0) {
          // Add text to the current node's children
          stack[stack.length - 1].push(createNode(text, true));
        }
      }

      // Process the next tag
      let isClosingTag = htmlString[nextLessThan + 1] === "/";
      let tagContent = htmlString
        .substring(nextLessThan + 1, nextGreaterThan)
        .replace(/\//g, "")
        .trim();
      if (!isClosingTag) {
        let node = createNode(tagContent);
        if (stack.length > 0) {
          stack[stack.length - 1].push(node);
        }
        stack.push(node.children);
      } else {
        stack.pop();
      }

      currentPos = nextGreaterThan + 1;
    } else {
      // No more tags, process any remaining text
      let text = htmlString.substring(currentPos).trim();
      if (text.length > 0) {
        stack[stack.length - 1].push(createNode(text, true));
      }
      break;
    }
  }

  return nodes.length > 0 ? nodes[0] : {};
}

// Example usage
const codeString = `import test from "test"; \\ this is my code <div> Hello </div> \\ thank you`;
const nodes = parseHtmlToNodes(codeString);
console.log(JSON.stringify(nodes, null, 2));

export { parseHtmlToNodes };
