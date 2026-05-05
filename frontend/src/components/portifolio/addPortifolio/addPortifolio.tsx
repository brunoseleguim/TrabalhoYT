import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <div className="flex flex-col items-center justify-end flex-1">
      <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button
          type="submit"
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none font-semibold transition-all"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;