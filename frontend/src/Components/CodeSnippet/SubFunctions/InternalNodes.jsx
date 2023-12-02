import React from "react";
import { CreateElement } from "./CreateElement";

export const InternalNodes = ({ nodes, level }) => {
  return (
    <div>
      {nodes.map((node, index) => (
        <div key={index} className="code-snippet-nodes">
          <CreateElement element={node} level={level} />
        </div>
      ))}
    </div>
  );
};
