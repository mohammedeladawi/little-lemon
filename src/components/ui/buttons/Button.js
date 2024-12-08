import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  buttonTag = Link,
  children,
  href,
  colorType = "primary",
  addStyle,
  ...properties
}) => {
  const Tag = buttonTag;
  return (
    <Tag
      to={href}
      className={`${styles["btn"]} ${styles[`btn-${colorType}`]}`}
      style={addStyle}
      {...properties}
    >
      {children}
    </Tag>
  );
};

export default Button;
