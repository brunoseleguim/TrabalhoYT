import React, { SyntheticEvent } from "react";
import Card from "../card/Card";
import { CompanySearch } from "../../api";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  // 1. Adicionou a definição da função nas Props
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }: Props): React.JSX.Element => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={uuidv4()}
              searchResult={result}
              // 2. Repassou a função para o componente Card
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <h1>No results</h1>
      )}
    </div>
  );
};

export default CardList;