import React from "react";

interface Props {
  portfolioValue: string;
}

const CardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <h4 className="pt-6 text-2xl font-bold">{portfolioValue}</h4>
      {/* Botão que será funcional no próximo vídeo (Aula 14) */}
      <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
        X
      </button>
    </div>
  );
};

export default CardPortfolio;