import React from "react";
import CardPortfolio from "../cardPortifolio/cardProtifolio";

interface Props {
  portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
  return (
    <section id="portfolio">
      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="relative flex flex-col max-w-5xl mx-auto px-10 md:px-6 lg:px-0">
        <ul className="flex flex-wrap justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioValues &&
            portfolioValues.map((portfolioValue) => {
              return (
                <CardPortfolio
                  key={portfolioValue}
                  portfolioValue={portfolioValue}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default ListPortfolio;