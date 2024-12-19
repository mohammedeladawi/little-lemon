import React from "react";
import styles from "./Radio.module.css";

const Radio = ({
  id,
  name,
  value,
  checked: isChecked,
  onChange: handleChange,
}) => {
  return (
    <div className={styles["custom-radio"]}>
      <span
        className={`${styles["inner-circle"]} ${
          isChecked ? styles["inner-circle--checked"] : ""
        }`}
      ></span>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
};

export default Radio;
