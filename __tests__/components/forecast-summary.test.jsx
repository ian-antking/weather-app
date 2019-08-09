import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';


describe('<ForecastSummary/>', () => {
  it('renders the passed date', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecast-summary__date').text().toEqual('mockDate'));
  });

  it('renders the passed temperature', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('forecast-summary__temperature').text().toEqual('mockTemperature'));
  });

  it('renders the passed description', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecast-summary__description').text().toEqual('mockDescription'));
  });

  it('renders the passed icon', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecast-summary__icon').text().toEqual('mockIcon'));
  });
});
