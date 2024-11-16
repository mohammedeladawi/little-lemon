import React from "react";
import styles from "./Container.module.css";

const Container = ({ addStyle, children }) => {
  return (
    <div className={styles["container"]} style={addStyle}>
      {children}
    </div>
  );
};

export default Container;
