// React
import React, { createRef } from 'react';

// CSS
import './SearchForm.scss';

// Constants
import { SEARCH, API_URL_WEATHER, API_KEY } from '../constants/searchform';

// Api
import axios from 'axios';

const SearchForm = () => {
  let textInput = createRef<HTMLInputElement>();

  const searchCity = async () => {
    if (textInput.current !== null) {
      const apiResult = await searchCityApiCall(textInput.current.value);
      console.log(apiResult);
    }
  };

  const searchCityApiCall = (city: string) => {
    return axios
      .get(API_URL_WEATHER, {
        params: {
          q: city,
          APPID: API_KEY,
        },
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
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
