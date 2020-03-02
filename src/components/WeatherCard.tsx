// React
import React from 'react';

// CSS
import './WeatherCard.scss';

// Bootstrap
import Card from 'react-bootstrap/Card';

interface WeatherCardProps {
  city: string;
}

const WeatherCard: React.FC<WeatherCardProps> = props => {
  const { city } = props;
  return (
    <Card className="WeatherCard">
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
