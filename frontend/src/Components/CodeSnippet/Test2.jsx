import React from "react";

export const Test2 = () => {
  const codeSyntax = {
    imports: [{ name: ["React"], from: "react" }],
    nodes: [
      {
        level: 1,
        type: "div",
        tags: [
          { type: "className", data: [`test-2`] },
          { type: "id", data: [`test-2-id`] },
        ],
        text: [],
        nodes: [
          { level: "2", type: "h3", tags: [], text: [`Title`], nodes: [] },
          { level: "2", type: "p", tags: [], text: [`paragraph`], nodes: [] },
          {
            level: "2",
            type: "div",
            tags: [{ type: "className", data: [`hello`] }],
            text: [`Hello`],
            nodes: [],
          },
        ],
      },
    ],
  };

  return (
    <div className="test-2" id="test-2-id">
      <div>
        <h3>Title</h3>
        <p>Paragraph</p>
      </div>
      <h3
        onClick={() => {
          console.log("hello");
        }}
      >
        Title
      </h3>
      <p>Paragraph</p>
      <div className="hello">
        Hello
        <img src="https://www.pexels/image1.jpg" alt="bear" />
      </div>
    </div>
  );
};
