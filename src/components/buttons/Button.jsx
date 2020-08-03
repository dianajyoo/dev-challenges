import React from 'react';
import './Button.scss';

const Button = ({ children, btn }) => {
  return (
    <button type='button' className={'btn ' + btn}>
      {children}
    </button>
  );
};

export default Button;
