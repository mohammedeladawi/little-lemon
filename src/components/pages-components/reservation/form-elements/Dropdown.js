import React, { useCallback, useMemo, useState } from "react";
import styles from "./Dropdown.module.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const Dropdown = ({
  icon,
  title,
  optionItems,
  selectedValue,
  setSelectedValue,
  isSubmited,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = useCallback((optionValue) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
  }, []);

  return (
    <div className={styles["dropdown-container"]}>
      <div
        className={styles["dropdown-bar"]}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className={styles["dropdown-bar_icon"]}>{icon}</span>
        <span className={styles["dropdown-bar_value"]}>
          {selectedValue || title}
        </span>
        <span className={styles["dropdown-bar_arrow"]}>
          {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </span>
      </div>

      {isOpen && (
        <ul
          className={`${styles["options-list"]} ${
            optionItems.length >= 6 ? styles["divide"] : ""
          }`}
        >
          {optionItems.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {isSubmited && !selectedValue && (
        <p className={styles["error-message"]}>This item is required</p>
      )}
    </div>
  );
};

export default Dropdown;
