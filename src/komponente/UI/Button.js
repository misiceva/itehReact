import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({ children, text, ...rest }) => {
  return (
    <button className={classes.button} {...rest}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  rest: PropTypes.any,
};
export default Button;
