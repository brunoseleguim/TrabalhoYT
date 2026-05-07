import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";
import ListPortfolio from "./components/portifolio/listPortifolio/listPortifolio"; // Importe o novo componente
import { searchCompanies } from "./api"; 
import { CompanySearch } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]); // Estado para o portfólio [00:03:00]
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

  // Lógica finalizada do vídeo para adicionar ao portfólio [00:10:00]
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    
    // Pega o valor do ticker (geralmente vindo de um input hidden ou valor do botão no evento)
    const value = e.target[0].value;

    // Verifica se já existe para evitar duplicatas
    const exists = portfolioValues.find((v) => v === value);
    if (exists) return;

    // Atualização imutável usando Spread Operator
    const updatedPortfolio = [...portfolioValues, value];
    setPortfolioValues(updatedPortfolio);
  };

  return (
    <div className="App">
      <div className="container">
        <Search 
          onSearchSubmit={onSearchSubmit} 
          search={search} 
          handleSearchChange={handleSearchChange} 
        />
        
        {/* Exibe a lista do Portfólio (Ações Adicionadas) */}
        <ListPortfolio portfolioValues={portfolioValues} />

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