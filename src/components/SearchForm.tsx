// React
import React, { RefObject, createRef } from 'react';

// CSS
import './SearchForm.scss';

// Constants
import { SEARCH, API_URL_WEATHER, API_KEY } from '../constants/searchform';

// Api
import axios from 'axios';

const SearchForm = () => {
  let textInput = createRef<HTMLInputElement>();

  const searchCity = () => {
    if (!textInput.current !== null) {
      console.log(textInput.current);
    }

    axios
      .get(API_URL_WEATHER, {
        params: {
          q: 'Tilburg',
          appid: API_KEY,
        },
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="SearchForm">
      <input
        className="SearchForm__input"
        ref={textInput}
        type="text"
        placeholder="Search for a city..."
      />
      <button
        className="SearchForm__button"
        type="submit"
        onClick={() => searchCity()}
      >
        {SEARCH}
      </button>
    </div>
  );
};

export default SearchForm;
