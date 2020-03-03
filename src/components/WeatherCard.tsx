// React
import React from 'react';

// CSS
import './WeatherCard.scss';

// Bootstrap
import Card from 'react-bootstrap/Card';

interface WeatherCardProps {
  city: string;
  temperature: string;
  weatherCondition: string;
}

const WeatherCard: React.FC<WeatherCardProps> = props => {
  const { city, temperature, weatherCondition } = props;

  const imageSource =
    weatherCondition && weatherCondition.toLowerCase() === 'clouds'
      ? './images/clouds.jpg'
      : './images/sunny.jpg';
  return (
    <div className="WeatherCard">
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
    </div>
  );
};

export default WeatherCard;
