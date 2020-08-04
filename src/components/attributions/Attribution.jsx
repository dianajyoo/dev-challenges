import React from 'react';
import './Attribution.scss';

const Attribution = ({ children, theme }) => {
  return (
    <h3
      className={
        'attribution ' + (theme === 'main' ? '' : 'attribution--secondary')
      }
    >
      {children}
    </h3>
  );
};

export default Attribution;
