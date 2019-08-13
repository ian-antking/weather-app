import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';
import SearchForm from './search-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({ selectedDate: date });
  }

  componentDidMount() {
    const url = 'https://mcr-codes-weather.herokuapp.com/forecast?city=manchester';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        location: {
          city: data.location.city,
          country: data.location.country,
        },
        forecasts: data.forecasts,
      }));
  }

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm/>
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />

        {
        selectedForecast && <ForecastDetails forecasts={selectedForecast} />
        }

      </div>
    );
  }
}

export default App;
