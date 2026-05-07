import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";
import ListPortfolio from "./components/portifolio/listPortifolio/listPortifolio";
import { searchCompanies } from "./api"; 
import { CompanySearch } from "./api";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else if (result?.data) {
      const data = result.data.result ? result.data.result : result.data;
      setSearchResult(data); 
      setServerError(null);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const value = e.target[0].value;
    const exists = portfolioValues.find((v) => v === value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, value];
    setPortfolioValues(updatedPortfolio);
  };

  // --- NOVA FUNÇÃO DE DELETE (AULA 14) ---
  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    // O filter cria um novo array removendo apenas o item que clicamos [00:01:51]
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />  
        <Search 
          onSearchSubmit={onSearchSubmit} 
          search={search} 
          handleSearchChange={handleSearchChange} 
        />
        
        {/* Agora passamos a função de delete para o portfólio [00:03:19] */}
        <ListPortfolio 
          portfolioValues={portfolioValues} 
          onPortfolioDelete={onPortfolioDelete} 
        />

        {serverError && <div className="error-message">{serverError}</div>}
        
        <CardList 
          searchResults={searchResult} 
          onPortfolioCreate={onPortfolioCreate} 
        />
      </div>
    </div>
  );
}

export default App;