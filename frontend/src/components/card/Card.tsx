import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom"; // Importação essencial para a navegação funcionar
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
      className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg shadow-lg border border-slate-200 md:flex-row mb-3 transition-shadow hover:shadow-xl"
      key={id}
      id={id}
    >
      <div className="flex flex-col">
        {/* O nome agora é um Link que leva para a CompanyPage */}
        <Link 
          to={`/company/${searchResult.symbol}`} 
          className="font-bold text-center text-veryDarkViolet md:text-left text-lg hover:text-lightBlue transition-colors"
        >
          {searchResult.description} ({searchResult.symbol})
        </Link>
        <p className="text-slate-500 text-sm">{searchResult.type}</p>
      </div>
      
      {/* Container do botão com margem no topo para mobile */}
      <div className="mt-4 md:mt-0">
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default Card;