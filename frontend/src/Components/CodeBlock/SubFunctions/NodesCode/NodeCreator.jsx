import "./NodeCreator.css";
import { parseHtmlToNodes } from "./NodeBlock";

export const NodeCreator = ({ code }) => {
  let nodes;

  nodes = parseHtmlToNodes(code);

  console.log(nodes);

  return (
    <>
      {/* <>
        {" "}
        <div className="code-sample-line">
          <span className="prop-bracket">{"<"}</span>
          <span className="prop-label">{nodes.prop} </span>
          {nodes.attributes.map((att) => (
            <>
              {" "}
              <span className="prop-attribute-type">{att.type}=</span>
              <span className="prop-attribute-name">{att.value}</span>
            </>
          ))}

          <span className="prop-bracket">{">"}</span>
        </div>
        <div className="code-sample-line">
          <span className="prop-bracket">{"<"}</span>
          <span className="prop-label">{"/div"}</span>
          <span className="prop-bracket">{">"}</span>
        </div>
      </> */}

      <div className="code-sample-line">
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">div </span>
        <span className="prop-attribute-type">className=</span>
        <span className="prop-attribute-name">"parent"</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: "12px" }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">div </span>
        <span className="prop-attribute-type">className=</span>
        <span className="prop-attribute-name">"child"</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      <div className="code-sample-line"></div>
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: "12px" }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">{"/div"}</span>
        <span className="prop-bracket">{">"}</span>{" "}
      </div>
      <div className="code-sample-line">
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">{"/div"}</span>
        <span className="prop-bracket">{">"}</span>
      </div>
    </>
  );
};
