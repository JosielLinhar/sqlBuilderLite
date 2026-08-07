import { createContext, useState } from "react";

export const TextoContext = createContext();

export function TextoProvider({ children }) {
  const [ table, setTable ] = useState("usuarios");

  return (
    <TextoContext.Provider value={{ table, setTable }}>
      {children}
    </TextoContext.Provider>
  );
}
