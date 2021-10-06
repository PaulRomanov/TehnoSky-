import React, { Component } from 'react';
import * as uuid from 'uuid';

export default class WeatherIcon extends Component {
  // eslint-disable-next-line
  state = {
    data: {
      weather: [
        {
          id: 300,
          main: 'Drizzle',
          description: 'light intensity drizzle',
          icon: '09d',
        },
      ],
    },
  };

  render() {
    // eslint-disable-next-line
    const renderWeatherIcon = this.state.data.weather.map((item) => {
      return (
        <img key={uuid.v4()} src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="img" />
      );
    });
    return <div>{renderWeatherIcon}</div>;
  }
}
