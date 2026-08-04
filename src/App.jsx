import { useState } from "react"
import { Button } from "../src/components/ui/button"
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="h-svh w-full bg-[#09090B] text-white">
      <Header />
      <Main />
    </div>
  )
}

export default App