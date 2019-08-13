import React from 'react';
import '../styles/search-form.scss';

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
    }
  
  render () {
      return(
    <div className="search">
      <input type="text" placeholder="City Name" />
      <button type="submit">Search</button>
    </div>
      );
  };
}
export default SearchForm;
