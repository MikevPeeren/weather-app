// React
import React, { createRef, useState } from 'react';

// CSS
import './SearchForm.scss';

// Components
import WeatherCard from './WeatherCard';

// Constants
import {
  SEARCH,
  INPUT_PLACEHOLDER,
  API_URL_WEATHER,
  API_KEY,
} from '../constants/searchform';

// Api
import axios from 'axios';

const SearchForm: React.FC = () => {
  const [warningText, setWarningText] = useState('');
  const [allCitys, setAllCitys] = useState(
    // @ts-ignore
    JSON.parse(localStorage.getItem('localStorageCitys')),
  );

  const textInput = createRef<HTMLInputElement>();

  /**
   * Based on the input value make API call and handle the results.
   *
   * @returns {void}
   */
  const searchCityByTextInput = async () => {
    if (textInput.current !== null) {
      const apiResult = await searchCityApiCall(textInput.current.value);

      if (apiResult.data) {
        handleResultData(apiResult.data);
      } else {
        setWarningText('This city could not be found. Please try again.');
      }
    }
  };

  /**
   * The call towards OpenWeatherApi happends here
   *
   * @param {string} city
   *
   * @returns {object}
   */
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

  /**
   * Handles the data that was returned from the API call
   *
   * @param resultData
   *
   * @returns {void}
   */
  const handleResultData = (resultData: {
    name: string;
    main: { temp: string };
    weather: [
      {
        main: string;
        icon: string;
        description: string;
      },
    ];
  }) => {
    setWarningText('');

    const cityObject = {
      cityName: resultData.name,
      temperature: resultData.main.temp,
      weatherCondition: resultData.weather[0],
    };

    if (allCitys) {
      //@ts-ignore
      setAllCitys([...allCitys, cityObject]);
      localStorage.setItem(
        'localStorageCitys',
        JSON.stringify([...allCitys, cityObject]),
      );
    } else {
      setAllCitys([cityObject]);
      localStorage.setItem('localStorageCitys', JSON.stringify([cityObject]));
    }
  };

  return (
    <React.Fragment>
      <div className="SearchForm">
        <input
          className="SearchForm__input"
          ref={textInput}
          type="text"
          placeholder={INPUT_PLACEHOLDER}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              searchCityByTextInput();
            }
          }}
        />
        <button
          className="SearchForm__button"
          type="submit"
          onClick={() => searchCityByTextInput()}
        >
          {SEARCH}
        </button>
        <div className="SearchForm__warningText">{warningText}</div>
      </div>

      {allCitys && <WeatherCard allCitys={allCitys}></WeatherCard>}
    </React.Fragment>
  );
};

export default SearchForm;
