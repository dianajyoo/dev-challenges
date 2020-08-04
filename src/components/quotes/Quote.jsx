import React from 'react';
import './Quote.scss';

const Quote = ({ children, theme }) => {
  return (
    <h2 className={'quote ' + (theme === 'main' ? '' : 'quote--secondary')}>
      {children}
    </h2>
  );
};

export default Quote;
