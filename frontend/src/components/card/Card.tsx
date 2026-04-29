import React from 'react';
import "./card.css";
interface Props {}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://s3-symbol-logo.tradingview.com/apple--600.png"
        alt="Apple Stock"
      />
      <div className="details">
        <h2>Apple</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
      </p>
    </div>
  );
};

export default Card;