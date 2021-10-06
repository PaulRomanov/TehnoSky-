import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './contentmainPage.scss';

const ContentMainPage = () => {

  return (
    <div className='contentMainPage_wrapper'>
      <div className="contentMainPage_content">
        <NavLink to='/administrative'>
          <Button className="button" label="Административные процедуры" svgItem="administrative" />
        </NavLink>
        <NavLink to='/management'>
          <Button className="button" label="Руководство" svgItem="management" />
        </NavLink>
        <NavLink to='/appointmentSchedule'>
          <Button className="button" label="график приёма" svgItem="appointmentSchedule" />
        </NavLink>
        <NavLink to='/structure' className="last_link">
          <Button className="button" label="Структура" svgItem="structure" />
        </NavLink>
      </div>
    </div>
  );
};

export default ContentMainPage;
