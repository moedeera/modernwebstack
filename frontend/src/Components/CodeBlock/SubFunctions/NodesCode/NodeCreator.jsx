import "./NodeCreator.css";
import { parseHtmlToNodes } from "./NodeBlock";

export const NodeCreator = ({ code }) => {
  let nodes;

  nodes = parseHtmlToNodes(code);

  // console.log(nodes);

  return (
    <>
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
          style={{ marginLeft: `${2 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">div </span>
        <span className="prop-attribute-type">className=</span>
        <span className="prop-attribute-name">"child"</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/* <h1>Count is at {count}</h1> */}
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">h1</span>
        <span className="prop-bracket">{">"}</span>
        <span className="prop-text">
          Count is at <span className="prop-variable">{`{data.count}`}</span>
        </span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">{"/h1"}</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/* <p> */}
      <div className="code-sample-line">
        {" "}
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">p</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/* p text */}
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>{" "}
        <span className="prop-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </span>
      </div>
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>{" "}
        <span className="prop-text">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </span>
      </div>
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>{" "}
        <span className="prop-text">
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </span>
      </div>

      {/* </p> */}
      <div className="code-sample-line">
        {" "}
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"</"}</span>
        <span className="prop-label">p</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/* <Link to={"/"}>Click Here</Link> */}
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label router-link">Link </span>
        <span className="prop-attribute-type">to=</span>
        <span className="prop-attribute-name">{`{"/"}`}</span>
        <span className="prop-bracket">{">"}</span>
        <span className="prop-text">Click Here</span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label router-link">{"/Link"}</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/* {data.map((data) => (
            <div key={data.id}>
              {" "}
              <p>{data.name}</p>
            </div>
          ))} */}
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${3 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"{"}</span>
        <span className="prop-variable"> data.map</span>
        <span className="prop-variable-map-bracket-out">{"("}</span>
        <span className="prop-variable-map-bracket-inner">{"("}</span>
        <span className="prop-variable-sub">dat</span>
        <span className="prop-variable-map-bracket-inner">{")"}</span>
        <span className="prop-variable">{" => "}</span>
        <span className="prop-text">{"("}</span>
      </div>
      <div className="code-sample-line" style={{ marginLeft: `${4 * 6}px` }}>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">div </span>
        <span className="prop-attribute-type">key=</span>
        <span className="prop-variable">{`{dat.id}`}</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${5 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">p</span>
        <span className="prop-bracket">{">"}</span>
        <span className="prop-text">
          <span className="prop-variable">{`{dat.name}`}</span>
        </span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">{"/p"}</span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/*</div>*/}
      <div className="code-sample-line" style={{ marginLeft: `${4 * 6}px` }}>
        <span className="prop-bracket">{"</"}</span>
        <span className="prop-label">div </span>
        <span className="prop-bracket">{">"}</span>
      </div>
      {/* </div> */}
      <div className="code-sample-line" style={{ marginLeft: `${4 * 6}px` }}>
        <span className="prop-text">{")"}</span>
        <span className="prop-variable-map-bracket-out">{")"}</span>
        <span className="prop-bracket">{"}"}</span>
      </div>
      {/* </div> */}
      <div className="code-sample-line">
        <span
          className="hierarchy-spacing"
          style={{ marginLeft: `${2 * 6}px` }}
        ></span>
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">{"/div"}</span>
        <span className="prop-bracket">{">"}</span>{" "}
      </div>
      {/* </div> */}
      <div className="code-sample-line">
        <span className="prop-bracket">{"<"}</span>
        <span className="prop-label">{"/div"}</span>
        <span className="prop-bracket">{">"}</span>
      </div>
    </>
  );
};
