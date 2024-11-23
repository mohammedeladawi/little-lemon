import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, href, type = "primary", addStyle }) => {
  return (
    <a
      href={href}
      className={`${styles["btn"]} ${styles[`btn-${type}`]}`}
      style={addStyle}
    >
      {children}
    </a>
  );
};

export default Button;
