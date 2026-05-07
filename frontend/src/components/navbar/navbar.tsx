import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    // "sticky top-0" faz a barra ficar fixa no topo ao rolar a página
    // "z-50" garante que ela fique por cima de outros elementos
    <nav className="relative sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        
        {/* Lado Esquerdo: Logo e Links Principais */}
        <div className="flex items-center space-x-20">
          <img src={logo} alt="Logo" className="w-32" />
          <div className="hidden font-bold lg:flex space-x-6">
            <a href="/" className="text-slate-800 hover:text-lightBlue transition duration-200">
              Dashboard
            </a>
          </div>
        </div>

        {/* Lado Direito: Login e Botão Arredondado */}
        <div className="hidden items-center space-x-8 lg:flex">
          <div className="font-bold text-slate-800 hover:text-lightBlue cursor-pointer">
            Login
          </div>
          <a
            href="/"
            className="px-8 py-3 font-bold text-white bg-lightBlue rounded-full hover:opacity-70 transition duration-300"
          >
            Signup
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;