import { ChangeEvent, useState, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { searchCompanies, CompanySearch } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  
  // Novo estado para armazenar os símbolos das ações favoritadas
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  };

  // Função para criar o portfólio (Vídeo 9)
  // Ela captura o evento do Card e extrai o símbolo da ação
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    
    // Captura o valor do símbolo vindo do input dentro do formulário do Card
    const symbolToAdd = e.target[0].value;
    
    // Verifica se a ação já está no portfólio para evitar duplicidade
    const exists = portfolioValues.find((value) => value === symbolToAdd);
    if (exists) return;
    
    // Atualização imutável do estado
    const updatedPortfolio = [...portfolioValues, symbolToAdd];
    setPortfolioValues(updatedPortfolio);
  };

  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      
      // Type Narrowing: verificando se o retorno é uma mensagem de erro (string) ou dados
      if (typeof result === "string") {
          setServerError(result);
      } else if (result && result.data && Array.isArray(result.data.result)) {
          setSearchResult(result.data.result);
          setServerError(null); // Limpa o erro caso a busca tenha sucesso
      }
  };

  return (
    <div className="App">
      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange} 
      />
      
      {serverError && <h1 style={{ color: 'red' }}>{serverError}</h1>}
      
      {/* Passamos os resultados da busca e a função de criação para o CardList */}
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate} 
      />
    </div>
  );
}

export default App;