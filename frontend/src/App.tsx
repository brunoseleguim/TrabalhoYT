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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
};

  const onClick = async (e: SyntheticEvent) => {
  e.preventDefault(); 
  const result = await searchCompanies(search);

  if (typeof result === "string") {
    setServerError(result);
  } else if (result && typeof result === "object" && "data" in result) {
    // O Finnhub retorna a lista dentro de 'result', e o Axios coloca tudo em 'data'
    // Portanto, o caminho é result.data.result
    setSearchResult(result.data.result); 
    setServerError(null);
}
};
  return (
  <div className="App">
    <Search onClick={onClick} search={search} handleChange={handleChange} />
    {/* 3. Passe a prop para o componente */}
    <CardList searchResults={searchResult} /> 
    {serverError && <div>{serverError}</div>}
  </div>
);
}

export default App;