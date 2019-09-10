import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';


describe('<ForecastSummary/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = Enzyme.shallow((
      <ForecastSummary
        date={1525046400000}
        temperature={10}
        description="mockDescription"
        icon={800}
      />
    ));
  });

  it('takes the date and renders in the correct format', () => {
    const text = wrapper.find('.date').text();
    expect(text).toEqual('Mon 30th Apr');
  });

  it('renders the passed temperature', () => {
    const text = wrapper.find('.temperature').text();
    expect(text).toEqual('10°c');
  });

  it('renders the passed description', () => {
    const text = wrapper.find('.description').text();
    expect(text).toEqual('mockDescription');
  });

  it('renders the passed icon', () => {
    const img = wrapper.find('.icon');
    expect(img).toEqual('mockIcon');
  });
});
