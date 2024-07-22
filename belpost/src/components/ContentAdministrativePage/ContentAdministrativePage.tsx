import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './contentAdministrativePage.scss';
import backSvg from '../../assets/btnBack.svg';

const ContentAdministrativePage = () => {
  return (
    <div className="contentAdminPage_wrapper">
      <div className="wrapper-article">
        <div className="admin_article">Административные процедуры</div>
        <NavLink exact className="btn-back" to="/">
          <img className="back_svg" src={backSvg} alt="backSvg" />
        </NavLink>
      </div>

      <div className="contentAdminPage_content">
        <NavLink to="/ContentAbout">
          <Button className="button" label="страница 1" svgItem="belpostSvg" />
        </NavLink>
        <NavLink to="/management">
          <Button className="button" label="процедура 2" svgItem="belpostSvg" />
        </NavLink>
        <NavLink to="/appointmentSchedule">
          <Button className="button" label="процедура 3" svgItem="belpostSvg" />
        </NavLink>
        <NavLink to="/structure" className="last_link">
          <Button className="button" label="процедура 4" svgItem="belpostSvg" />
        </NavLink>
      </div>
    </div>
  );
};

export default ContentAdministrativePage;
