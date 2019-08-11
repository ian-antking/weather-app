import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

class ForecastDetails extends React.Component {
  render() {
    return (
      <div>
        <span className="date">{Moment(this.props.forecasts.date).format('ddd Do MMM')}</span>
        <br />
        <span className="temperatureMax">Max Temperature: {this.props.forecasts.temperature.max}°c</span>
        <br />
        <span className="temperatureMin">Min Temperature: {this.props.forecasts.temperature.min}°c</span>
        <br />
        <span className="humidity">Humidity: {this.props.forecasts.humidity}%</span>
        <br />
        <span className="wind">Wind Speed: {this.props.forecasts.wind.speed}mph</span>
      </div>
    );
  }
}

export default ForecastDetails;
