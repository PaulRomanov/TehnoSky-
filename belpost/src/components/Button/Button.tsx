import React, { FC } from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import administrative from '../../assets/administrative.svg';
import management from '../../assets/management.svg';
import appointmentSchedule from '../../assets/appointmentSchedule.svg';
import structure from '../../assets/structure.svg';
import belpostSvg from '../../assets/belpostSvg.svg';

interface Props {
  label?: string;
  onClick?: (e: any) => void;
  className?: string;
  svgItem?: string;
}

const iconSvg = {
  administrative,
  management,
  appointmentSchedule,
  structure,
  belpostSvg,
};

const Button: FC<Props> = ({ label, onClick, className, svgItem }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <div className="btn_lable">{label}</div>
      <img className='btn__img' src={iconSvg[svgItem]} alt='svg' />
    </button>
  );
};

export default Button;
