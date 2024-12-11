import React, { useCallback, useState } from "react";
import styles from "./Radio.module.css";

const Radio = ({ title, inputName, inputValue, isChecked, setSeatValue }) => {
  const handleInputChange = useCallback(() => {
    setSeatValue(inputValue);
  }, []);

  return (
    <label className={styles["custom-label"]}>
      <div className={styles["custom-radio"]}>
        {isChecked && <span className={styles["custom-radio--checked"]}></span>}
        <input
          type="radio"
          name={inputName}
          value={inputValue}
          checked={isChecked}
          onChange={handleInputChange}
        />
      </div>
      {title}
    </label>
  );
};

export default Radio;
