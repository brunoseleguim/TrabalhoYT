import React from 'react';
import Card from '../card/Card';
import { CompanySearch } from '../../api';
import "./CardList.css"; // 1. Certifique-se de importar o CSS

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): React.JSX.Element => {
  return (
    /* 2. Adicionada a className="card-list" para ativar o Grid do CSS */
    <div className="card-list">
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card 
              key={result.symbol} 
              companyName={result.description} 
              ticker={result.symbol} 
              price={0} 
            />
          );
        })
      ) : (
        /* 3. Adicionada a classe para estilizar a mensagem de "não encontrado" */
        <h1 className="no-results">No results found</h1>
      )}
    </div>
  );
};

export default CardList;