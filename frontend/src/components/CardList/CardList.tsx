import React from 'react';
import Card from '../card/Card';

interface Props {}

const CardList: React.FC<Props> = (props: Props): React.JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={110} />
      <Card companyName="Microsoft" ticker="MSFT" price={200} />
      <Card companyName="Tesla" ticker="TSLA" price={300} />
    </div>
  );
};

export default CardList;