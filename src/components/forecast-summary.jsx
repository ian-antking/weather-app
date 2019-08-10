import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
  return (
    <div>
      <span className="date">{moment(props.date).format('ddd Do MMM')}</span>;
      <div className="icon">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <span className="temperature">{props.temperature}°c</span>
      <br />
      <span className="description">{props.description}</span>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastSummary;
