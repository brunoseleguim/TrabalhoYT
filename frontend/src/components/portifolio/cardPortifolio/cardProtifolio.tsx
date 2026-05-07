import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../deletePortifolio/deletePortifolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <li className="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm min-w-[120px]">
      <h4 className="font-bold text-slate-800">{portfolioValue}</h4>
      {/* O botão simples foi substituído por este componente [00:04:50] */}
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </li>
  );
};

export default CardPortfolio;