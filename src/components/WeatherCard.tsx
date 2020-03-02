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
  return (
    <div className="WeatherCard">
      <Card border="light" bg="light" style={{ width: '20rem' }}>
        <Card.Img variant="top" src="" />
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
