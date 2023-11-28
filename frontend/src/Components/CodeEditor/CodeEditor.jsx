import React, { useCallback } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import "./CodeEditor.css";
import { codeblock1 } from "../../Context/Content";
const activateMonacoJSXHighlighter = async (monacoEditor, monaco) => {
  const { default: traverse } = await import("@babel/traverse");
  const { parse } = await import("@babel/parser");
  const { default: MonacoJSXHighlighter } = await import(
    "monaco-jsx-highlighter"
  );

  const monacoJSXHighlighter = new MonacoJSXHighlighter(
    monaco,
    parse,
    traverse,
    monacoEditor
  );

  monacoJSXHighlighter.highlightOnDidChangeModelContent();
  monacoJSXHighlighter.addJSXCommentCommand();

  return {
    monacoJSXHighlighter,
  };
};

const CodeEditor = () => {
  const handleEditorDidMount = useCallback(async (editor, monaco) => {
    activateMonacoJSXHighlighter(editor, monaco);
  }, []);
  return (
    <div className="code-editor">
      <Editor
        height="650px"
        width="50%"
        language="typescript"
        value={codeblock1}
        theme="vs-dark"
        onMount={handleEditorDidMount}
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
