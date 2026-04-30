import React from 'react'
import "./card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

// Mudança aqui: Tipagem da função e do retorno
const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): React.JSX.Element => {
  return (
    <div className="card">
      <img
        src="https://s.yimg.com/ny/api/res/1.2/Fe2ID8yI9erQgqpNh.la9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2Ng--/https://media.zenfs.com/en/the_motley_fool_261/9558c5bc1963a96d67c909460a526749"
        alt="Stock"
      />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  )
}

export default Card