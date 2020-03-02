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
  const [temperature, setTemperature] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
  const [warningText, setWarningText] = useState();

  let textInput = createRef<HTMLInputElement>();

  const searchCity = async () => {
    if (textInput.current !== null) {
      const apiResult = await searchCityApiCall(textInput.current.value);
      const resultData = apiResult.data;

      if (resultData) {
        console.log(resultData);

        setWarningText('');
        setCity(resultData.name);
        setTemperature(resultData.main.temp);
        setWeatherCondition(resultData.weather[0].main);
      } else {
        setWarningText('This city could not be found. Please try again.');
      }
    }
  };

  const searchCityApiCall = async (city: string) => {
    try {
      const response = await axios.get(API_URL_WEATHER, {
        params: {
          q: city,
          APPID: API_KEY,
          units: 'metric',
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
          onKeyPress={event => {
            if (event.key === 'Enter') {
              searchCity();
            }
          }}
        />
        <button
          className="SearchForm__button"
          type="submit"
          onClick={() => searchCity()}
        >
          {SEARCH}
        </button>
        <div className="SearchForm__warningText">{warningText}</div>
      </div>

      {city && (
        <WeatherCard
          city={city}
          temperature={temperature}
          weatherCondition={weatherCondition}
        ></WeatherCard>
      )}
    </React.Fragment>
  );
};

export default SearchForm;
