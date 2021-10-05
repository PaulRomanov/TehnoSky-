import React from 'react';
import { useTranslation } from 'react-i18next';
import TimeNow from '../TimeNow/TimeNow';
import './header.scss';
import WeatherIcon from './../WeatherIcon/WeatherIcon';
import Data from '../Data/Data';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header-wrapper">
        <TimeNow />
        <div className="header-cel">16°C</div> 
        <WeatherIcon />
      </div>
      <div className="header__date">
        <Data />
        </div> 
      
    </div>
  );
};

export default Header;
