import React from 'react';
import "./card.css";

// Interface que define a estrutura das propriedades que o Card recebe
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): React.JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJDqdbpEacFBKi2aV53PhK9Hdrp3IndEf3g&s"
        alt="Stock Chart"
      />
      <div className="details">
        {/* Exibe o nome da empresa e o ticker (símbolo) de forma clara */}
        <h2>{companyName}</h2>
        <p className="ticker-label">{ticker}</p>
        <p className="price-tag">${price}</p>
      </div>
      <p className="info">
        Informações detalhadas sobre a empresa {ticker} aparecerão aqui conforme o desenvolvimento do projeto.
      </p>
    </div>
  );
};

export default Card;