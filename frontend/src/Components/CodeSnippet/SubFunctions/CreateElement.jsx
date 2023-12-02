import React from "react";

export const CreateElement = ({ element, level }) => {
  const padding = level * 5;
  return (
    <div>
      {element.type === "img" && (
        <>
          <span
            style={{ paddingLeft: `${padding}px` }}
            className="empty"
          ></span>
          <span>{`<img `}</span>
          <span className="node-class">
            {element.className !== "" ? `className =` : ""}
            <span style={{ color: "white" }}>
              {" "}
              {element.className !== "" && `"${node.className}"`}
            </span>
            {element.tags.map((tag, index) => (
              <span key={index}>
                {`${tag.label}=`}
                <span>{`${tag.data} `}</span>{" "}
              </span>
            ))}
            {`/>`}
          </span>
        </>
      )}
      {element.type !== "img" && (
        <>
          {" "}
          <span
            style={{ paddingLeft: `${padding}px` }}
            className="empty"
          ></span>
          <span className="">
            <span>{`<${element.type}`}</span>
            <span className="node-class">
              {element.className !== "" ? "" : ""}
            </span>
            {element.tags.map((tag) => (
              <>
                {` ${tag.label}=`}
                <span style={{ color: "white" }}>{`${tag.data} `}</span>{" "}
              </>
            ))}
            {`>`}
          </span>
          {element.text}
          <span>{`</${element.type}>`}</span>
          <br />
        </>
      )}
    </div>
  );
};
