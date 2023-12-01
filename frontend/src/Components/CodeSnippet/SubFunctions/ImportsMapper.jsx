import React from "react";

export const ImportsMapper = ({ imports }) => {
  return (
    <div>
      {" "}
      {imports.map((imp, index) => (
        <div key={index} className="cs-import-line">
          import{" "}
          <span>{imp.default ? `${imp.name} ` : `{ ${imp.name} } `}</span>
          from <span>"{imp.from}";</span>
        </div>
      ))}
    </div>
  );
};
