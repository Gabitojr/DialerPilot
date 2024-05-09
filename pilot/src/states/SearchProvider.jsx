// src/contexts/SearchContext.js
import { createContext, h } from 'preact';
import { useState } from 'preact/hooks';

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
    const [input, setInput] = useState('');

    const updateInput = (newInput) => {
        setInput(newInput);
    };

    return (
        <SearchContext.Provider value={{ input, updateInput }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };
