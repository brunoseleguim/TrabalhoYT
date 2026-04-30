import { ChangeEvent, useState, SyntheticEvent } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

function App() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
  };

  const onClick = (e: SyntheticEvent) => {
      console.log("Buscando por: ", search);
  };

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList />
    </div>
  );
}

export default App;