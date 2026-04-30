import React, { ChangeEvent, SyntheticEvent, FormEvent } from 'react';

interface Props {
    onSearchSubmit: (e: FormEvent<HTMLFormElement>) => void; // Mudou de onClick para onSearchSubmit
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): React.JSX.Element => {
    return (
        <section className="search">
            <form onSubmit={onSearchSubmit}>
                <input 
                    value={search} 
                    onChange={handleSearchChange} 
                    placeholder="Search stocks..."
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </section>
    );
};

export default Search;