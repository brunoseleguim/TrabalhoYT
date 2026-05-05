import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../api";
import AddPortfolio from "../portifolio/addPortifolio/addPortifolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): React.JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row shadow-sm mb-3"
      key={id}
      id={id}
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-center text-veryDarkViolet md:text-left text-lg">
          {searchResult.description || searchResult.description} ({searchResult.symbol})
        </h2>
      </div>
      
      {/* O componente de botão fica do lado direito em telas maiores (md:flex-row) */}
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;