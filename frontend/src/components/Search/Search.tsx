import React, { ChangeEvent, useState, SyntheticEvent } from 'react';

interface Props {}

const Search: React.FC<Props> = (props: Props): React.JSX.Element => {
    // Hook para armazenar o que o usuário digita
    const [search, setSearch] = useState<string>("");

    // Função que roda a cada tecla digitada
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    // Função que roda ao clicar no botão
    const onClick = (e: SyntheticEvent) => {
        console.log("Valor da busca:", search);
    };

    return (
        <div className="search-container">
            <input 
                value={search} 
                onChange={(e) => handleChange(e)} 
                placeholder="Search stocks..."
            />
            <button onClick={(e) => onClick(e)}>
                Search
            </button>
        </div>
    );
};

export default Search;