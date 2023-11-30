import React from "react";
import { InternalNodes } from "./InternalNodes";

export const NodeMapper = ({ node }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="code-snippet-nodes">
        <span className="empty">aaa</span>
        <span className="">
          <span>{`<${node.type}`}</span>
          <span className="node-class">{`${
            node.className !== "" && ` className="`
          }${node.className !== "" && `${node.className}"`}`}</span>{" "}
          {`>`}
        </span>
        <InternalNodes nodes={node.internal} />
        <span className="empty">aaa</span>
        <span>{`</${node.type}>`}</span>
      </div>
    </div>
  );
};
