import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ children }) => {
  return <p className={styles["error-message"]}>{children} </p>;
};

export default ErrorMessage;
