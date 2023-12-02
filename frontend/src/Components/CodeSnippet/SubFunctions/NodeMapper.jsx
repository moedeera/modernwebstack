import React from "react";
import { InternalNodes } from "./InternalNodes";

export const NodeMapper = ({ node, level }) => {
  const padding = level * 5;
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="code-snippet-nodes">
        <span className="empty" style={{ paddingLeft: `${padding}` }}></span>
        <span className="">
          <span>{`<${node.type}`}</span>
          <span className="node-class">{`${
            node.className !== "" && ` className="`
          }${node.className !== "" && `${node.className}"`}`}</span>{" "}
          {`>`}
        </span>
        <InternalNodes nodes={node.internal} level={2} />
        <span style={{ paddingLeft: `${padding}` }} className="empty"></span>
        <span>{`</${node.type}>`}</span>
      </div>
    </div>
  );
};
