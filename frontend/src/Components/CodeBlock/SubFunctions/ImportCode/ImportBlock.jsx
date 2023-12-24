import "./ImportBlock.css";
import { parseImports } from "./ImportCode";

export const ImportBlock = ({ code }) => {
  const imports = parseImports(code);
  console.log(imports);
  return (
    <>
      {imports.map((imp, index) => (
        <div key={index} className="code-sample-line">
          <span className="import-line-start-from">import</span>
          <span className="import-line-bracket">{" { "}</span>
          {imp.imports.map((item, index) => (
            <span key={index} className="import-line-import">
              {item}
              {imp.imports.length > 1 && index !== imp.imports.length - 1 ? (
                <span className="import-line-comma">, </span>
              ) : (
                " "
              )}
            </span>
          ))}
          <span className="import-line-bracket">{"} "}</span>
          <span className="import-line-start-from">from</span>{" "}
          <span className="import-line-location">"{imp.from}"</span>
          {";"}
        </div>
      ))}{" "}
    </>
  );
};
