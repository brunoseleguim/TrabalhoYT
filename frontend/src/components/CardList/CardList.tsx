import React from 'react';
import Card from '../card/Card';
import { CompanySearch } from '../../api'; // Importamos a interface para tipar as props

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): React.JSX.Element => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card 
              key={result.symbol} 
              companyName={result.description} // No Finnhub usamos 'description'
              ticker={result.symbol} 
              price={0} // O endpoint de search do Finnhub não traz o preço (precisaria de outra chamada)
            />
          );
        })
      ) : (
        <h1>No results found</h1>
      )}
    </div>
  );
};

export default CardList;