import { ChangeEvent, useState, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import { searchCompanies, CompanySearch } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Impede a página de recarregar ao dar submit
      const result = await searchCompanies(search);
      
      if (typeof result === "string") {
          setServerError(result);
      } else if (result && result.data && Array.isArray(result.data.result)) {
          setSearchResult(result.data.result);
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
      <CardList searchResults={searchResult} />
    </div>
  );
}

export default App;