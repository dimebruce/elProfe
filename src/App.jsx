import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import excelLogo from "/excel.png";
import pdfProyecto from "/proyectoParcial-l.pdf"
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
      {/* <div>
        <img src={excelLogo} className="excel" alt="React logo" />
      </div> */}
      {/* La parte para que no aparezcan videos de otros canales cuando se pausa el video es esta
      rel=0&amp;showinfo=0 */}
      <div className="mb-5 frame-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?rel=0&amp;showinfo=0si=fa9h0IVMszbwrtu9&amp;list=PLhHbKDQSv0OlKuP02MNBkR2-8lsBWgizx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h4><a href={pdfProyecto} target={"_blank"}>👉 Proyecto Parcial I (Descarga ⏬)</a> </h4>
      </div>
      <div className="mt-5">
        <a href="tablasDinamicas.xlsx">
          <span>👉 Material para realizar tutorial - tablasDinamicas (Descarga ⏬)</span>
        </a>
      </div>
      <div>
        <a href="excelFormulasStudent.xlsx">
          <span>👉 Material - excelFormulas ✅</span>
        </a>
      </div>
    </>
  );
}

export default App;
