import React from 'react';
import '../styles/search-form.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleCityChange(e) {
    e.preventDefault();
    const newCity = this.state.searchText;
    this.props.handleClick(newCity);
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="City Name" onChange={this.handleInputChange} value={this.state.searchText} />
        <button type="button" onClick={this.handleCityChange}>Search</button>
      </div>
    );
  }
}
export default SearchForm;
