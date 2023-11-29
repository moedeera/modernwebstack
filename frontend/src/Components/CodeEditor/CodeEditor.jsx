import React, { useCallback } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import "./CodeEditor.css";
import { codeblock1 } from "../../Context/Content";

const CodeEditor = () => {
  return (
    <div className="code-editor">
      <Editor
        height="650px"
        width="50%"
        language="typescript"
        value={codeblock1}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          // automaticLayout: true,
          readOnly: true, // Set to true to disable editing
        }}
      />
    </div>
  );
};

export default CodeEditor;
