import React, { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onClick, search, handleChange }: Props): React.JSX.Element => {
    return (
        <div className="search-container">
            <input 
                value={search} 
                onChange={handleChange} 
                placeholder="Search stocks..."
            />
            <button onClick={onClick}>
                Search
            </button>
        </div>
    );
};

export default Search;