import React from 'react';
import TimeNow from '../TimeNow/TimeNow';
import './header.scss';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Data from '../Data/Data';

const Header = () => {
  return (
    <div className="header">
      <div className="header-conteiner">
        <TimeNow />
        <div className="header-cel">16°C</div>
        <WeatherIcon />
      </div>
      <div className="header-date">
        <Data />
      </div>
    </div>
  );
};

export default Header;
