import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ size, dark, children }) => {
  const className = classNames({
    [styles.button]: true,
    [styles.dark]: dark,
    [styles.sizeSmall]: size === 'small',
    [styles.sizeNormal]: size === 'normal',
    [styles.sizeBig]: size === 'big'
  });

  return <button className={className}>{children}</button>;
};

Button.propTypes = {
    size: propTypes.oneOf(['small', 'normal', 'big']),
    dark: propTypes.bool,
    children: propTypes.node
}

Button.defaultProps = {
  size: 'normal',
  dark: false
};

export default Button;
