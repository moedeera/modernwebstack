const css = `.code-snippet-container {
    border: none;
    height: 40vh;
    background-color: #1e152a;
    margin-bottom: 100px;
    width: 95%;
    max-width: 700px;
    position: relative;
    border-radius: 5px;
    overflow-y: scroll;
  }`;

const code = {
  imports: [
    { name: "React", from: "react", default: true },
    { name: "Link", from: "react-router-dom", default: false },
  ],
  legacyImports: ["react", "useEffect", "useState"],
  functions: [
    {
      type: "useState",
      code: `{
  id: 0,
  name: "John",
  info: [{ age: "27" }, { gender: "male" }],
  registered: false,
}`,
    },
    { type: "useEffect", code: ` console.log("hello");`, dep: [] },
    {
      type: "callback",
      code: `let x = 10;
  console.log("hello");
  return x;`,
      input: [],
    },
  ],
  name: "Test",
  nodes: [
    {
      className: "test-text",
      type: "div",
      internal: [
        {
          type: "h3",
          tags: [],
          className: "",
          text: "Welcome",
          internal: [],
          functions: [],
        },
        {
          type: "p",
          tags: [],
          className: "",
          text: " Our AI engine gives you everything you need to create stunning designs",
          functions: [],
        },
        {
          type: "Link",
          tags: [{ label: "to", data: `"/"` }],
          className: "btn",
          text: "More",
        },
      ],
    },
    {
      className: "test-image",
      type: "div",
      internal: [
        {
          type: "h3",
          tags: [],
          className: "",
          text: "Image 1",
          internal: [],
          functions: [],
        },
        {
          type: "img",
          tags: [
            { label: "src", data: `"./img1"` },
            { label: "alt", data: `"icon"` },
          ],
          className: "",
          text: " Our AI engine gives you everything you need to create stunning designs",
          functions: [],
        },
      ],
    },
  ],
};

export { css as cssSyntax, code as codeSyntax };
