import React, { FC, useState } from 'react';
import './data.scss';

export const useDate = () => {
  const locale = 'ru';
  const [today] = useState(new Date());

  const date = `${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}\n\n ${today.getFullYear()}`;

  return {
    date,
  };
};

const Data: FC = () => {
  const { date } = useDate();

  return (
    <div className="data-container">
      <div className="data">{date}</div>
    </div>
  );
};

export default Data;
