import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  return (
    <div>
      <span className="date">{props.date}</span>;
      <br />
      <span className="icon">{props.icon}</span>
      <br />
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
