import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../src/components/forecast-summary';


describe('<ForecastSummary/>', () => {
  it('renders the passed date in a span tag', () => {
    const wrapper = Enzyme.shallow((
      <ForecastSummary date="1" />
    ));
    const text = wrapper.find('span').text();
    expect(text).toEqual('1');
  });

  it('renders the passed temperature in a span tag', () => {
    const wrapper = Enzyme.shallow((
      <ForecastSummary temperature="23" />
    ));
    const text = wrapper.find('span').text();
    expect(text).toEqual('23');
  });

  it('renders the passed description in a span tag', () => {
    const wrapper = Enzyme.shallow((
      <ForecastSummary description="cloudy" />
    ));
    const text = wrapper.find('span').text();
    expect(text).toEqual('cloudy');
  });

  it('renders the passed icon in a span tag', () => {
    const wrapper = Enzyme.shallow((
      <ForecastSummary icon = "test" />
    ));
    const text = wrapper.find('span').text();
    expect(text).toEqual('test'); 
  });
});
