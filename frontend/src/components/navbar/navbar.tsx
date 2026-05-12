import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    /** 
     * Alteração: Removido 'sticky top-0' para que o conteúdo da HomePage (Hero) 
     * não fique escondido sob a Navbar. Caso prefira manter fixo, você deve 
     * adicionar um padding superior no container do Outlet no seu App.tsx.
     */
    <nav className="relative z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        
        {/* Lado Esquerdo: Logo e Links Principais */}
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32" />
          </Link>
          
          <div className="hidden font-bold lg:flex space-x-6">
            <Link to="/search" className="text-slate-800 hover:text-lightBlue transition duration-200">
              Search
            </Link>
          </div>
        </div>

        {/* Lado Direito: Login e Botão Arredondado */}
        <div className="hidden items-center space-x-8 lg:flex">
          <div className="font-bold text-slate-800 hover:text-lightBlue cursor-pointer">
            Login
          </div>
          <Link
            to="/search"
            className="px-8 py-3 font-bold text-white bg-lightBlue rounded-full hover:opacity-70 transition duration-300"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;