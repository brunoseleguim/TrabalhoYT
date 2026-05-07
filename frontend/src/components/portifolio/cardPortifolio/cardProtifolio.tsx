import React from "react";
//import "./cardPortifolio.css";
interface Props {
  portfolioValue: string;
}

const CardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <li className="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm min-w-[120px]">
      <h4 className="font-bold text-slate-800">{portfolioValue}</h4>
      <button className="mt-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
        X
      </button>
    </li>
  );
};

export default CardPortfolio;