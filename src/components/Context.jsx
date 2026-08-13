import { createContext, useState } from "react";

export const TextoContext = createContext();

export function TextoProvider({ children }) {
  const defaultFields = ["id", "nome", "cpf", "cidade"]
  const defaultCondition = ["ativo = true", "and cidade = 'Curitiba'"]

  const [table, setTable] = useState("usuarios");
  const [fields, setFields] = useState(defaultFields.map((e) => `${e === defaultFields[defaultFields.length - 1] ? `${e}` : `${e}\n`}`).join(""))
  const [queryType, setQueryType] = useState("select");
  const [condition, setCondition] = useState(defaultCondition.map((e) => `${e === defaultCondition[defaultCondition.length - 1] ? `${e}` : `${e}\n`}`).join(""));
  const [formatedSql, setFormatedSql] = useState('Clique em "Gerar SQL" para visualizar o resultado aqui.');

  return (
    <TextoContext.Provider value={{ table, setTable, fields, setFields, queryType, setQueryType, condition, setCondition, formatedSql, setFormatedSql }}>
      {children}
    </TextoContext.Provider>
  );
}
