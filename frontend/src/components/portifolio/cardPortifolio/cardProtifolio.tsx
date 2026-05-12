import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom"; // Importação necessária para o link
import DeletePortfolio from "../deletePortifolio/deletePortifolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <li className="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm min-w-[120px]">
      {/* O símbolo agora é um Link que leva para a CompanyPage */}
      <Link 
        to={`/company/${portfolioValue}`} 
        className="font-bold text-slate-800 hover:text-lightBlue transition-colors"
      >
        {portfolioValue}
      </Link>
      
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </li>
  );
};

export default CardPortfolio;