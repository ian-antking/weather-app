import React from 'react';
import ForecastSummary from './forecast-summary';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
        props.forecasts.map(forecast => (
          <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            icon={forecast.icon}
            temperature={forecast.temperature.max}
            description={forecast.description}
          />
        ))
        }
  </div>
);

export default ForecastSummaries;
