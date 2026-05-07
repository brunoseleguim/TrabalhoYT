import React, { SyntheticEvent } from "react";
import CardPortfolio from "../cardPortifolio/cardProtifolio";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void; 
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio" className="px-4 mb-5 mt-5">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        My Portfolio
      </h2>
      <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => (
            <CardPortfolio
              key={portfolioValue}
              portfolioValue={portfolioValue}
              onPortfolioDelete={onPortfolioDelete} 
            />
          ))}
      </ul>
    </section>
  );
};

export default ListPortfolio;