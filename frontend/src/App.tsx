import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Adicionamos um padding-top para o conteúdo não ficar sob a navbar */}
      <div className="pt-20"> 
        <Outlet /> 
      </div>
    </div>
  );
}

export default App;