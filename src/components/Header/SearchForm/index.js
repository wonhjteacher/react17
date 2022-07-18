import React from 'react';
import './index.css';
const SearchForm = () => {
    return (
     <form className='search'>
        <input
            placeholder='검색'
            type="text"
            className='searchInput'
        />
        <button className='searchBtn'>
            <img src="/images/search.png" alt="search icon" className='searchIcon' />
        </button>
    </form>
    );
};

export default SearchForm;