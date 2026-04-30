import React from 'react';
import "./card.css";

// Interface que define a estrutura da nossa "Stock" (Ação)
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): React.JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://s.yimg.com/ny/api/res/1.2/Fe2ID8yI9erQgqpNh.la9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2Ng--/https://media.zenfs.com/en/the_motley_fool_261/9558c5bc1963a96d67c909460a526749"
        alt="Stock"
      />
      <div className="details">
        {/* Lembre-se de remover o parêntese extra que estava no seu h2 */}
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Card;