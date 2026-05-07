import React from "react";
import CardPortfolio from "../cardPortifolio/cardProtifolio";
//import "./listPortifolio.css";
interface Props {
  portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <section id="portfolio" className="px-4 mb-5 mt-5">
      <h2 className="text-2xl font-bold mb-4">My Portfolio</h2>
      {/* O segredo está nestas classes: flex flex-wrap gap-3 */}
      <ul className="flex flex-wrap gap-3 justify-start">
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => (
            <CardPortfolio
              key={portfolioValue}
              portfolioValue={portfolioValue}
            />
          ))}
      </ul>
    </section>
  );
};

export default ListPortfolio;