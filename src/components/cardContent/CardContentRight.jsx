import { Editor } from "@monaco-editor/react";

export function CardContentRight() {
  return (
    <Editor
      height="50vh"
      defaultLanguage="sql"
      theme="vs-dark"
      options={{
        fontSize: 15,
        fontFamily: "JetBrains Mono",
        minimap: { enabled: false },
        lineNumbers: "on",
        roundedSelection: true,
        automaticLayout: true,
        wordWrap: "on",
        formatOnPaste: true,
        formatOnType: true,
        cursorBlinking: "smooth",
        smoothScrolling: true,
        scrollBeyondLastLine: false,
      }}
    />
  );
}
