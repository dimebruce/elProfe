import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import excelLogo from "/excel.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Informática lll</h1>
      <h2> Parcial l - Excel</h2>
      <div>
        <img src={excelLogo} className="excel" alt="React logo" />
      </div>
      <div>
        <a href="tablasDinamicas.xlsx">
          <span>👉 tablasDinamicas (Descarga)</span>
        </a>
      </div>
      <div>
        <a href="excelFormulasStudent.xlsx">
          <span>👉 excelFormulas ✅</span>
        </a>
      </div>
    </>
  );
}

export default App;
