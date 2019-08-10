import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';
import ForecastSummary from '../../src/components/forecast-summary';

describe('<ForecastSummaries/>', () => {
  let wrapper;
  let forecasts;
  beforeEach(() => {
    forecasts = [
      {
        date: 123,
        description: 'date1',
        icon: 'icon1',
        temperature: {
          max: 999,
        },
      },
      {
        date: 456,
        description: 'date 2',
        icon: 'icon2',
        temperature: {
          max: 777,
        },
      },
    ];
    wrapper = Enzyme.shallow((
      <ForecastSummaries forecasts={forecasts} />
    ));
  });

  it('renders the correct amount of ForecastSummary components', () => {
    expect(wrapper.find(ForecastSummary).length).toEqual(2);
  });

  it('passes the correct values from each forecast into each ForecastSummar', () => {
    wrapper.find(ForecastSummary).forEach((node, index) => {
      expect(node.prop('date')).toEqual(forecasts[index].date);
      expect(node.prop('description')).toEqual(forecasts[index].description);
      expect(node.prop('icon')).toEqual(forecasts[index].icon);
      expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
    });
  });
});
