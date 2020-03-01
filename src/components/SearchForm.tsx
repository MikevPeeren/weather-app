// React
import React from 'react';

// CSS
import './SearchForm.scss';

// Constants
import { SEARCH } from '../constants/searchform';

const SearchForm = () => {
  return (
    <div className="SearchForm">
      <input
        className="SearchForm__input"
        type="text"
        placeholder="Search for a city..."
      />
      <button className="SearchForm__button" type="submit">
        {SEARCH}
      </button>
    </div>
  );
};

export default SearchForm;
