import searchIcon from '../../assets/search.svg';
import './searchbar.css';
// src/components/SearchBar.js
import { useState, useContext } from 'preact/hooks';
import { SearchContext } from '../../app';

const SearchBar = () => {
    const [localInput, setLocalInput] = useState('');
    const [input,updateInput]  = useContext(SearchContext);

    const handleInput = (event) => {
        setLocalInput(event.target.value);
    };

    const handleSubmit = () => {
      console.log(localInput);
      updateInput(localInput);
    };

    return (
        <div className='searchBar'>
            <input type="text" onChange={handleInput} placeholder="Type here..." />
            <img src={searchIcon} alt="Submit" onClick={handleSubmit} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default SearchBar;
