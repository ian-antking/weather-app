import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';

const App = props => {
  return (
    <div>
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />

      <ForecastSummary
        date={props.forecasts[0].date}
        temperature={props.forecasts[0].temperature}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
    }),
  })).isRequired,
};

export default App;
