import { Button } from "@base-ui/react";
import { Editor } from "@monaco-editor/react";
import { Copy } from "lucide-react";
import { useContext, useState } from "react";
import { TextoContext } from "../Context";

export function CardContentRight() {
  const { formatedSql } = useContext(TextoContext);

  const [copy, setCopy] = useState(false);
  const copyPostgres = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
      setTimeout(() => setCopy(false), 2000);
    } catch (err) {
      console.error("Não foi possível copiar:", err);
    }
  };

  return (
    <section>
      <div className="h-px bg-[#27272A] my-5"></div>

      <div id="copy-btns" className="grid grid-cols-3 gap-2 mb-3 text-sm">
        <Button
          className="w-full border border-[#27272A] rounded-lg px-3 py-2 cursor-pointer flex gap-2 items-center justify-center"
          onClick={() =>
            copyPostgres(formatedSql.replace(/(\r\n|\r|\n)/gm, " "))
          }
        >
          <Copy size={15} />
          Copiar PostgreSQL
        </Button>

        <Button className="w-full border border-[#27272A] rounded-lg px-3 py-2 cursor-pointer flex gap-2 items-center justify-center">
          <Copy size={15} />
          Copiar Firebird
        </Button>

        <Button className="w-full border border-[#27272A] rounded-lg px-3 py-2 cursor-pointer flex gap-2 items-center justify-center">
          <Copy size={15} />
          Copiar SQL Server
        </Button>
      </div>

      <Editor
        height="50vh"
        defaultLanguage="sql"
        theme="vs-dark"
        value={formatedSql}
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
    </section>
  );
}
