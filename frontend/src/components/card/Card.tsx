import React, { SyntheticEvent } from "react";
import "./card.css";
import { CompanySearch } from "../../api";

import AddPortfolio from "../portifolio/addPortifolio/addPortifolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  // 1. Adicionou a função de criação nas Props do Card
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): React.JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <div className="details">
        <h2 className="font-bold text-center text-veryDarkViolet md:text-left">
          {searchResult.description} ({searchResult.symbol})
        </h2>
        
      </div>
      {/* 2. Adicionou o componente AddPortfolio passando as props necessárias */}
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;