import { parseExportedComponent } from "../ExportCode/Export";
import "./Opener.css";

export const Opener = ({ code }) => {
  const exported = parseExportedComponent(code);
  console.log(exported);
  const propsString = exported.props
    .map((name, index) => {
      return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    })
    .join(", ");

  return (
    <div className="code-sample-line">
      <span className="export-line-start-end">export </span>
      <span className="export-line-const">const </span>
      <span className="export-line-name">{exported.name}</span>
      <span>{" = "}</span>
      <span className="import-line-bracket">{"("}</span>
      <span className="export-line-input">{`${propsString}`}</span>
      <span className="import-line-bracket">{")"}</span>
      <span>{" => "}</span>
      <span>{"{"}</span>
    </div>
  );
};
