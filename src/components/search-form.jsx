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

  handleInputChange(e) {
    if (e.charCode !== 13) {
      this.setState({ searchText: e.target.value });
    }
  }

  handleCityChange(e) {
    if (e.target.tagName === 'BUTTON' || e.charCode === 13) {
      const newCity = this.state.searchText;
      this.props.handleClick(newCity);
      this.setState({ searchText: '' });
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="City"
          onChange={this.handleInputChange}
          onKeyPress={this.handleCityChange}
          value={this.state.searchText}
        />
        <button
          className="search-button"
          type="button" 
          onClick={this.handleCityChange}
        >
        Search
        </button>
      </div>
    );
  }
}
export default SearchForm;
