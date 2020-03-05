// React
import React from 'react';

// CSS
import './WeatherCard.scss';

// Bootstrap
import Card from 'react-bootstrap/Card';

// Constants
import {
  TEMPERATURE,
  WEATHER_CONDITION,
  WEATHER_DESCRIPTION,
} from '../constants/weather';

interface WeatherCardProps {
  allCitys: [];
}

const WeatherCard: React.FC<WeatherCardProps> = props => {
  const { allCitys } = props;

  return (
    <div className="WeatherCard">
      {allCitys &&
        allCitys.map(
          (
            city: {
              cityName: string;
              temperature: string;
              weatherCondition: {
                main: string;
                icon: string;
                description: string;
              };
            },
            key,
          ) => (
            <Card
              key={Math.random()}
              border="light"
              bg="light"
              style={{ width: '15rem', height: '20rem' }}
            >
              <Card.Img
                variant="top"
                src={`https://openweathermap.org/img/wn/${city.weatherCondition.icon}@2x.png`}
              />
              <Card.Body>
                <Card.Title>{city.cityName}</Card.Title>
                <Card.Text>
                  <i>{TEMPERATURE}</i> {city.temperature}
                  <br />
                  <br />
                  <i>{WEATHER_CONDITION}</i> {city.weatherCondition.main}
                  <br />
                  <i>{WEATHER_DESCRIPTION}</i>{' '}
                  {city.weatherCondition.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ),
        )}
    </div>
  );
};

export default WeatherCard;
