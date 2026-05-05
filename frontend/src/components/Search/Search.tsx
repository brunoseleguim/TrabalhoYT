import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): React.JSX.Element => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* O formulário agora envolve o input e o botão */}
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
          {/* O botão não precisa mais de onClick, pois o onSubmit do form cuida disso */}
          <button
            type="submit"
            className="p-3 px-10 text-white bg-lightBlue rounded-lg hover:opacity-70 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;