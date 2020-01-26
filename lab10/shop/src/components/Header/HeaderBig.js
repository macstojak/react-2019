import React from "react";
import PropTypes from 'prop-types';

import style from "./Header.module.css";

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const HeaderBig = ({ children }) => (
  <h1 className={style.HeaderBig}>{children}</h1>
);

HeaderBig.propTypes = {
  /** opis propsa */
  children: PropTypes.node
}

export default HeaderBig;
