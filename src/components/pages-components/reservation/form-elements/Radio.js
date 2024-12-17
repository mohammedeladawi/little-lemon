import React, { useCallback, useState } from "react";
import styles from "./Radio.module.css";

const Radio = ({
  title,
  inputName,
  inputValue,
  isChecked,
  setCheckedValue,
}) => {
  const handleInputChange = useCallback(() => {
    setCheckedValue(inputValue);
  }, []);

  return (
    <label className={styles["custom-label"]}>
      <div className={styles["custom-radio"]}>
        <span
          className={`${styles["inner-circle"]} ${
            isChecked ? styles["inner-circle--checked"] : ""
          }`}
        ></span>
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
