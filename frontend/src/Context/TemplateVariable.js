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

const block4CSS = `.block-4-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  border: 1px solid grey;
  height: max-content;
  padding: 40px 15px;
  width: 95%;
  border-radius: 5px;
}
.block-4-container p {
  margin-bottom: 20px;
}
`;

const code = {
  syntax: `import { Link } from "react-router-dom";
import "./Block4.css";

export const Block4 = () => {
  return (
    <div className="block-4-container">
      <h3>Check out this Block</h3>
      <p>
        An amazing customizable block that has it's own CSS styling ready to go
        so you don't have to worry about setting up everything yourself. Copy
        and Paste and viola ! you have a professional sleek looking component
        just lie that.
      </p>
      <Link to={"/"} className="btn">
        Learn More
      </Link>
    </div>
  );
};
`,

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

export { css as cssSyntax, code as codeSyntax, block4CSS as block4CSS };
