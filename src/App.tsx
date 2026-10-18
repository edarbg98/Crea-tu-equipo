import Roles from "./components/roles/roles";
import Confi from "./components/configuracion/confi";
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [rush1, setRush1] = useState("");
  const [curador1, setCurador1] = useState("");

  return (
    <div>
      <br />
      <Confi
        setTexto={setTexto}
        setRush1={setRush1}
        setCurador1={setCurador1}
      ></Confi>
      <br />
      <Roles texto={texto} rush1={rush1} curador1={curador1} />
    </div>
  );
}

export default App;
