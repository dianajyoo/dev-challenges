import React from 'react';
import rightAsterik from '../../vectors/rightAsterik.svg';
import leftAsterik from '../../vectors/leftAsterik.svg';
import './Asterik.scss';

const Asterik = ({ theme }) => {
  return (
    <img
      src={theme === 'main' ? rightAsterik : leftAsterik}
      alt='Asterik'
      className={'asterik ' + (theme === 'main' ? '' : 'asterik--secondary')}
    />
  );
};

export default Asterik;
