import React from 'react';
import './Title.scss';

const Title = ({ children, theme }) => {
  return (
    <h5 className={'title ' + (theme === 'main' ? '' : 'title--secondary')}>
      {children}
    </h5>
  );
};

export default Title;
