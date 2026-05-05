import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";
import { searchCompanies } from "./api"; 
import { CompanySearch } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  // 1. Renomeado para handleSearchChange para ser mais explícito
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 2. Nova função para lidar com a criação do portfólio (mencionada aos 07:34)
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    console.log(e); // No vídeo, ele testa o disparo do evento aqui
  };

  // 3. Renomeado para onSearchSubmit (refatoração do Search para Form)
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else if (result?.data) {
      // Ajuste conforme a estrutura da sua API
      setSearchResult(result.data); 
      setServerError(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {/* Passando as funções com os novos nomes */}
        <Search 
          onSearchSubmit={onSearchSubmit} 
          search={search} 
          handleSearchChange={handleSearchChange} 
        />
        
        {serverError && <div className="error-message">{serverError}</div>}
        
        {/* Adicionado onPortfolioCreate para o Prop Drilling até o botão "Add" */}
        <CardList 
          searchResults={searchResult} 
          onPortfolioCreate={onPortfolioCreate} 
        />
      </div>
    </div>
  );
}

export default App;