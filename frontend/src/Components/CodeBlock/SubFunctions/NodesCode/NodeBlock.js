function parseHtmlToNodes(htmlString) {
  // Helper function to create node object
  const createNode = (tagName, attributes) => {
    return {
      prop: tagName.toLowerCase(),
      overflow: tagName.length > 40,
      attributes: attributes,
      children: [],
    };
  };

  // Helper function to extract and process attributes from a tag string
  const getAttributes = (tagContent) => {
    const attrRegex = /(\w+)=("[^"]+"|'[^']+'|{[^}]+})/g;
    let match;
    let attributes = [];

    while ((match = attrRegex.exec(tagContent))) {
      attributes.push({
        type: match[1],
        value: match[2],
      });
    }
    return attributes;
  };

  let stack = []; // Use a stack to manage hierarchy
  let root; // to hold the root node
  let textBuffer = ""; // to accumulate text content between tags

  const handleText = () => {
    if (stack.length > 0 && textBuffer.trim()) {
      const textNode = { prop: "text", text: textBuffer.trim() };
      stack[stack.length - 1].children.push(textNode);
    }
    textBuffer = ""; // Clear the buffer
  };

  const tagRegex = /<\/?[\w\s="'{}.-]+>/g; // Regular expression to match tags
  let tagMatch;
  let lastIndex = 0; // Tracking the last index after the previous tag

  while ((tagMatch = tagRegex.exec(htmlString))) {
    let tagContent = tagMatch[0];
    let isClosingTag = tagContent.startsWith("</");
    let tagIndex = tagMatch.index;

    textBuffer += htmlString.substring(lastIndex, tagIndex); // Accumulate text before the tag

    if (isClosingTag) {
      handleText(); // Handle any text accumulated in the buffer
      stack.pop(); // Pop the last element from the stack as it's closed now
    } else {
      // Process opening tag
      let tagName = tagContent.match(/<\w+/)[0].substring(1); // Extract tag name
      let attributes = getAttributes(tagContent);
      let node = createNode(tagName, attributes);

      if (stack.length > 0) {
        stack[stack.length - 1].children.push(node); // Add node as child to the element on top of the stack
      } else {
        root = node; // This is the root node
      }
      stack.push(node); // Push this node onto the stack
      handleText(); // Handle any text accumulated in the buffer
    }

    lastIndex = tagMatch.index + tagContent.length; // Update last index
  }

  // Handle any remaining text after the last tag
  textBuffer += htmlString.substring(lastIndex);
  handleText();

  return root; // Return the root element containing the structured nodes
}

// Example usage:
const htmlString = `  <div className="parent">
      <div className="child" onClick={function1}>
        <h1>Count is at {count}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to={"/"}>Click Here</Link>
        <button onClick={() => {
            setCount(count + 1);
          }}>
          Increment Count
        </button>
        <div className="grand-child">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h1>
          {data.map((data) => (
            <div key={data.id}>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>`;

const nodes = parseHtmlToNodes(htmlString);
// console.log(nodes);

export { parseHtmlToNodes };
