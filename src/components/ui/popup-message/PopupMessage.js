import React from "react";
import Alert from "../alert-container/Alert";
import styles from "./PopupMessage.module.css";

const PopupMessage = ({ message }) => {
  if (!message) return null;
  return (
    <Alert>
      <p className={styles["popup"]}>{message}</p>
    </Alert>
  );
};

export default PopupMessage;
