import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div className="flex items-center justify-center">
      {/* O onSubmit dispara a função que criamos no App.tsx [00:06:32] */}
      <form onSubmit={onPortfolioDelete}>
        {/* Campo escondido que carrega o ticker da ação (ex: AAPL) [00:05:54] */}
        <input 
          hidden={true} 
          readOnly={true} 
          value={portfolioValue} 
        />
        <button 
          className="block w-full py-1 px-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500 font-bold text-xs"
        >
          X
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;