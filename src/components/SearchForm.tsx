// React
import React, { createRef, useState } from 'react';

// CSS
import './SearchForm.scss';

import WeatherCard from './WeatherCard';

// Constants
import { SEARCH, API_URL_WEATHER, API_KEY } from '../constants/searchform';

// Api
import axios from 'axios';

const SearchForm = () => {
  const [city, setCity] = useState();

  let textInput = createRef<HTMLInputElement>();

  const searchCity = async () => {
    if (textInput.current !== null) {
      const apiResult = await searchCityApiCall(textInput.current.value);
      const resultData = apiResult.data;

      console.log(resultData);
      setCity(resultData.name);
    }
  };

  const searchCityApiCall = async (city: string) => {
    try {
      const response = await axios.get(API_URL_WEATHER, {
        params: {
          q: city,
          APPID: API_KEY,
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <React.Fragment>
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

      {city && <WeatherCard city={city}></WeatherCard>}
    </React.Fragment>
  );
};

export default SearchForm;
