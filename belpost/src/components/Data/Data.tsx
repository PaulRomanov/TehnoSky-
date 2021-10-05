import React, { FC, useState } from "react";
import './data.scss';

const Data: FC = () => {

  const {date } = useDate();

  return (
    <div className="data-container">
      <div className="data">
          {date}
      </div>
    </div>
  );
};

interface ReturnDate {
  date: string;
}

export const useDate = () => {
  const locale = 'ru';
  const [today, setDate] = useState(new Date()); 

  const date = `${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n ${today.getFullYear()}`;

  return {
    date    
  };
};

export default Data;