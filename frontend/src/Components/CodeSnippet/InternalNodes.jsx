import React from "react";

export const InternalNodes = ({ nodes }) => {
  return (
    <div>
      {nodes.map((node, index) => (
        <div key={index} className="code-snippet-nodes">
          <span className="empty">aaaaa</span>
          <span className="">
            <span>{`<${node.type}`}</span>
            <span className="node-class">
              {node.className !== "" ? "" : ""}
            </span>
            {`>`}
          </span>
          {node.text}

          <span>{`</${node.type}>`}</span>
          <br />
        </div>
      ))}
    </div>
  );
};
