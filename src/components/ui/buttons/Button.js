import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ children, href, type = "primary", addStyle }) => {
  return (
    <Link
      to={href}
      className={`${styles["btn"]} ${styles[`btn-${type}`]}`}
      style={addStyle}
    >
      {children}
    </Link>
  );
};

export default Button;
