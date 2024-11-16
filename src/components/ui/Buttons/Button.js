import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, href, type = "primary" }) => {
  return (
    <a href={href} className={`${styles["btn"]} ${styles[`btn-${type}`]}`}>
      {children}
    </a>
  );
};

export default Button;
