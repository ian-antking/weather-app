import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => {
  return (
    <div>
      <span className="date">{props.date}</span>;
      <br />
      <span className="temperature">{props.temperature.max}</span>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastSummary;
