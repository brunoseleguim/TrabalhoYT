import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../api';
import { searchCompanies } from '../../api';
import Search from '../../components/Search/Search';
import ListPortfolio from '../../components/portifolio/listPortifolio/listPortifolio';
import CardList from '../../components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();
  const result = await searchCompanies(search);

  if (typeof result === "string") {
    setServerError(result);
  } else if (result?.data) {
    // Ajuste aqui: Algumas APIs retornam os dados dentro de .result ou direto no .data
    const data = result.data.result ? result.data.result : result.data;
    setSearchResult(Array.isArray(data) ? data : []); 
    setServerError(null);
  }
};

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <h1>{serverError}</h1>}
    </div>
  )
}

export default SearchPage