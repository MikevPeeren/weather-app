// React
import React, { useState } from 'react';

// CSS
import './WeatherCard.scss';

// Bootstrap
import Card from 'react-bootstrap/Card';

interface WeatherCardProps {
  city: string;
  allCitys: [];
  temperature: string;
  weatherCondition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = props => {
  const [previousCitys, setPreviousCitys] = useState();

  const { city, allCitys, temperature, weatherCondition } = props;

  console.log(allCitys);

  const imageSource =
    weatherCondition && weatherCondition.toLowerCase() === 'clouds'
      ? './images/clouds.jpg'
      : './images/sunny.jpg';

  return (
    <div className="WeatherCard">
      {allCitys &&
        allCitys.map((city, key) => (
          <Card
            border="light"
            bg="light"
            style={{ width: '15rem', height: '20rem' }}
          >
            <Card.Img variant="top" src={imageSource} />
            <Card.Body>
              <Card.Title>{city}</Card.Title>
              <Card.Text>
                Temperature: {temperature}
                <br />
                Weather Condition: {weatherCondition}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default WeatherCard;
